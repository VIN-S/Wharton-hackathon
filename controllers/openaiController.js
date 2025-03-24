const openai = require('../config/openaiConfig')

const generateResponse = async (question) => {

    const desctiption = await openai.chat.completions.create({
        model: "gpt-3.5.turbo",
        messages: [
            {
                role: 'user',
                content: 'Come up with a desciption for Youtube called ${question}'
            }
        ],
        max_tokens: 100
    })


    console.log(desctiption.data.choices[0].message)
}

module.exports = { generateResponse }