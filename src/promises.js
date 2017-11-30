import loadFile from './file-loader-p.js';
import logContent from './log-content.js';

const file1Promise = loadFile('file1');
const file2Promise = loadFile('file2');
const file3Promise = loadFile('file3');
const file4Promise = loadFile('file4');
const file5Promise = loadFile('file5');

file1Promise
  .then(data => logContent('file1', data))
  .then(() => file2Promise)
  .then(data => logContent('file2', data))
  .then(() => file3Promise)
  .then(data => logContent('file3', data))
  .then(() => file4Promise)
  .then(data => logContent('file4', data))
  .then(() => file5Promise)
  .then(data => logContent('file5', data))
