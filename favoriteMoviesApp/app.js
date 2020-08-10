// Old nasty Code
//  let  movie1 = process.argv[2]
//  let  movie2 = process.argv[3]
//  let  movie3 = process.argv[4]

// let sendMovies = movie1 + ` ${movie2} ` + `${movie3} `

// fs.appendFile('movies.txt', `${sendMovies}`, (err) => {
//   if (err) { console.log (err)}
//   console.log('Success!')
// })

//New Clean Code!
const fs = require('fs')

for (let i = 2; i < process.argv.length; i++) {
  const element = process.argv[i];
  fs.appendFile('movies.txt', ` ${element}`, (err) => {
    if (err) { console.log(err) }
    console.log('updated!')
  })
}
