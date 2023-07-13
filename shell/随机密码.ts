import crypto from 'crypto';
import process from 'process';

const randomString = (len: number): string => {
  return crypto.createHmac('sha256', 'fireman-34')
    .update('weigao')
    .digest('hex')
    .slice(0,len)
};

const [
  nodePath,
  shellPath,
  firstArg = "32",
] = process.argv;

const len = Number(process) || 32;

console.log('密码:');
console.log(randomString(32))

// 87aa7246c61698aa369adebd6f1b81a9 随机密码