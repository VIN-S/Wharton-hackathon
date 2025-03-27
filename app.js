const readline = require('readline')
const { quizMateResponse, noteMateResponse, writeMateResponse } = require('./controllers/openaiController')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Input: \n', writeMateResponse)