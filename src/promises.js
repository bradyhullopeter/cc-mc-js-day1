import loadFile from './file-loader-p.js';
import logContent from './log-content.js';

const file1Promise = loadFile('file1');
//TODO: kick off other promises, log content in order

file1Promise.then(data => logContent('file1', data));
