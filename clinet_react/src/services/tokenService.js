import Cookies from 'js-cookie';

export const accessToken = () => {
  return localStorage.getItem('token_1h')
}

export const accessTokenCookie = () => {
  return Cookies.get('accessToken');
}