import OpenAI from "openai"

export default async function getCompletion(userInput) {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_Open_Ai_Key,
    dangerouslyAllowBrowser: true
  })

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: userInput }],
    model: 'gpt-3.5-turbo',
  })
  debugger

  return chatCompletion

}

export {getCompletion}