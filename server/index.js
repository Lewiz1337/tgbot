const { S3Client, ListObjectsV2Command, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const axios = require('axios');

const AWS_REGION = 'ru-central1';
const AWS_USER_KEY = 'YCAJE6siEraRi4cIcY-oHEIlr';
const AWS_USER_SECRET_KEY = 'YCNoj5hXMECA5RwJIwRd203KtOel8aknhc1OX-Ak';
const BUCKET = 'telegram-id-awdkjawdkjh';

const accessKeyId = AWS_USER_KEY;
const secretAccessKey = AWS_USER_SECRET_KEY;

const client = new S3Client({
  endpoint: 'http://storage.yandexcloud.net',
  region: AWS_REGION,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

// Функция, для получения всех ключей файлов (data/text.txt, data/2019.pdf и т.д)
const getObjectList = async () => {
  const listObject = new ListObjectsV2Command({
    Bucket: BUCKET,
  });
  const keys = [];
  const res = await client.send(listObject);
  if (res.Contents) {
    res.Contents.forEach((item) => {
      keys.push(item.Key);
    });
  }
  return keys;
};

// Функция, для получения всех ключей файлов, находящихся в
// конкретной папке (data => data/text.txt, data/2019.pdf и т.д)
const openFolder = async (folder) => {
  const allKeys = await getObjectList();
  const keys = allKeys.filter((item) => {
    if (item.includes(folder)) {
      const arr = item.split('/');
      if (
        arr.indexOf(folder) === arr.length - 2 ||
        (arr.indexOf(folder) === arr.length - 3 && arr[arr.length - 1] === '')
      ) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  });
  return keys;
};

// Функция для получения ссылки на скачивание или текст сообщения
const getUrl = async (key) => {
  const getObject = new GetObjectCommand({
    Bucket: BUCKET,
    Key: key,
  });

  const url = await getSignedUrl(client, getObject, {
    expiresIn: 60 * 60,
    ResponseContentType: 'application/octet-stream',
  });
  if (key.includes('.txt')) {
    const res = await axios.get(url);
    return res.data;
  } else {
    return url;
  }
};

// Функция для чтения папки, возвращает результат в виде объекта
// message.txt - выдаст текст с сообщением,
// .pdf, .doc или . - выдаст ссылку на скачивание файла
// .png, .jpeg - выдаст картинку
// Если нет типа - это папки, выведет из ключи в виде массива
const readFolder = async (folder) => {
  const keys = await openFolder(folder);
  const folders = [];
  const message = [];
  const images = [];
  const files = [];

  for (let i = 0; i < keys.length; i++) {
    if (!keys[i].includes('.')) {
      folders.push(keys[i]);
      continue;
    }
    if (keys[i].includes('.txt')) {
      const value = await getUrl(keys[i]);
      message.push(value);
      continue;
    }
    if (keys[i].includes('.png') || keys[i].includes('.jpeg')) {
      const value = await getUrl(keys[i]);
      images.push(value);
      continue;
    }
    if (keys[i].includes('.')) {
      const name = keys[i].slice(keys[i].lastIndexOf('/'), keys[i].length);
      const url = await getUrl(keys[i]);
      console.log(name);
      files.push({ name, url });
      continue;
    }
  }

  return {
    folders,
    message,
    images,
    files,
  };
};

// readFolder('data').then((res) => {
//   console.log(res);
// });
// readFolder('Документация по практике').then((res) => {
//   console.log(res);
// });

// const getObject = new GetObjectCommand({
//   Bucket: 'telegram-id-awdkjawdkjh',
//   Key: `data/test.txt`,
//   // Key: 'data/2019.pdf',
// });

// getUrl('data/2019.pdf');

module.exports = { openFolder, readFolder };
