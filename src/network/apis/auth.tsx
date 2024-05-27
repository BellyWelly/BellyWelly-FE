import { SERVER } from '../config'

export const postLogin = async (code: any) => {
  const res = await fetch(`${SERVER}/auth/login`, {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      code: code,
      redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI
    })
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))

  return res
}
