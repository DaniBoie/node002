const fs = require('fs')

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err){console.log(err)}
//   console.log(data)
// })

// fs.writeFile('something.txt', 'Hi!', (err) => {
//   if (err){console.log(err)}
//   console.log('File Created!')
// })

fs.appendFile('example.txt', ' Goodbye World!', (err) => {
  if (err) {console.log(err)}
  console.log('File Updated!')
})