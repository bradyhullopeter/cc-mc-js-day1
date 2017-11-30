import loadFile from './file-loader';
import logContent from './log-content';

const results = {};
const fileNames = ['file1', 'file2', 'file3', 'file4', 'file5'];

function logFileData(fileName, data) {
  results[fileName] = data;
  
  for (let i = 0; i < fileNames.length; i++) {
    if (fileNames[i] in results) {
      if (results[fileNames[i]]) {
        logContent(fileNames[i], results[fileNames[i]]);
        results[fileNames[i]] = false;
      }
    }
    else {
      return;
    }
  }
}

loadFile('file1', data => logFileData('file1', data));
loadFile('file2', data => logFileData('file2', data));
loadFile('file3', data => logFileData('file3', data));
loadFile('file4', data => logFileData('file4', data));
loadFile('file5', data => logFileData('file5', data));
