import loadFile from './file-loader-p.js';
import logContent from './log-content.js';

async function main() {
  const p1 = loadFile('file1');
  const p2 = loadFile('file2');
  const p3 = loadFile('file3');
  const p4 = loadFile('file4');
  const p5 = loadFile('file5');

  logContent('file1', await p1);
  logContent('file2', await p2);
  logContent('file3', await p3);
  logContent('file4', await p4);
  logContent('file5', await p5);
}

main();


