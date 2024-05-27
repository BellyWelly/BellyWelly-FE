import { SERVER_AI } from '../../config'

export const postFoodDetection = async (imgUrl: string) => {
  const res = await fetch(`${SERVER_AI}/detection`, {
    method: 'post',
    headers: {
      'content-type': 'application/json'
      // Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      imageUrl: imgUrl
    })
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))

  return res
}
