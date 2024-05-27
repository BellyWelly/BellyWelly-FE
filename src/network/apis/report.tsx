import { SERVER } from '../config'

export const getWeeklyReport = async (accessToken: string, section: string, queryString: string) => {
  try {
    const res = await fetch(`${SERVER}/reports/${section}?${queryString}`, {
      method: 'get',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })
    return res
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
