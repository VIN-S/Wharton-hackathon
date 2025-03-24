const readline = require('readline')
const { generateResponse } = require('./controllers/openaiController')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Input: \n', generateResponse)