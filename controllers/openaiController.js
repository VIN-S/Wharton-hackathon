// Controller for all the backend interactions with openAI APIs
const openai = require('../config/openaiConfig')

const noteMateResponse = async (lectureContent) => {

    const answer = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: 'user',
                content: 'Please help summarize the following content into bullet points. Content body: ' + lectureContent
            }
        ],
        max_tokens: 10000
    })


    console.log(answer.choices[0].message)
}

const quizMateResponse = async (lectureContent) => {

    const answer = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: 'user',
                content: 'Please help me create a pop quiz based on the following content. Content body: ' + lectureContent
            }
        ],
        max_tokens: 10000
    })


    console.log(answer.choices[0].message)
}

const writeMateResponse = async (content) => {

    const answer = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: 'user',
                content: 'Please help to fix the grammar in the following content and provide detailed explanation. Content: ' + content
            }
        ],
        max_tokens: 10000
    })


    console.log(answer.choices[0].message)
}

module.exports = { noteMateResponse, quizMateResponse, writeMateResponse }