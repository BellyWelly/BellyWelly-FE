import { SERVER_AI } from '../../config'

export const postChatMsg = async (accessToken: string, text: string) => {
  const res = await fetch(`${SERVER_AI}/choice`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      content: text.split(',').map(food => food.trim())
    })
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))

  return res
}
