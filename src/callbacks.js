import loadFile from './file-loader';
import logContent from './log-content';

const results = {};
function logFileData(fileName, data) {
  //TODO: keep track of responses to serialize them in order
  logContent(fileName, data);
}

loadFile('file1', data => logFileData('file1', data));
loadFile('file2', data => logFileData('file2', data));
loadFile('file3', data => logFileData('file3', data));
loadFile('file4', data => logFileData('file4', data));
loadFile('file5', data => logFileData('file5', data));
