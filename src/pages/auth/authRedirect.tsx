import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { userNameState, userAccessToken } from '../../store/recoil'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../../network/apis/auth'

export const AuthRedirect = () => {
  const navigate = useNavigate()

  const code = new URL(window.location.href).searchParams.get('code')
  const setUserName = useSetRecoilState(userNameState)
  const setAccessToken = useSetRecoilState(userAccessToken)

  useEffect(() => {
    postLogin(code).then(res => {
      setAccessToken(res.accessToken)
      setUserName(res.name)
      navigate('/')
    })
  }, [])

  return <div>로그인 중 입니다</div>
}
