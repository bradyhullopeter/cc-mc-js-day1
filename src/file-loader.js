const data = {
  file1: '1: should appear first',
  file2: '2: second line',
  file3: '3: line 3',
  file4: '4: penultimate',
  file5: '5: done!'
}

export default function(fileName, callback) {
  setTimeout(() => callback(data[fileName]), Math.random() * 2000);
}
