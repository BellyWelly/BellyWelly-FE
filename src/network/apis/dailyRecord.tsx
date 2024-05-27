import { SERVER } from '../config'

export const getDailyRecord = async (selectedDate: string, accessToken: string) => {
  const res = await fetch(`${SERVER}/home?date=${selectedDate}`, {
    method: 'get',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))

  return res
}

export const postUploadImage = async (accessToken: string, formData: any): Promise<string> => {
  const res = await fetch(`${SERVER}/images`, {
    method: 'post',
    headers: {
      //  "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    body: formData
  })

  if (!res.ok) {
    console.error('Error:', res.statusText)
    return ''
  }
  const imgUrl = await res.text()
  return imgUrl
}

export const postDailyDiets = async (accessToken: string, data: any) => {
  const res = await fetch(`${SERVER}/records/diet`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))

  return res
}

export const postDailyStress = async (accessToken: string, level: number) => {
  const res = await fetch(`${SERVER}/records/stress`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      stress: level
    })
  }).catch(error => console.error('Error:', error))

  return res
}

export const postDailyDefaction = async (accessToken: string, data: any) => {
  const res = await fetch(`${SERVER}/records/defecation`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(data)
  }).catch(error => console.error('Error:', error))

  return res
}
