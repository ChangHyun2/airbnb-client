const items = [
  {
    to: '/',
    exact: true,
    text: '둘러보기',
    logo: 'search',
  },
  {
    to: '/wishlists',
    text: '저장 목록',
    logo: 'heart',
  },
  {
    to: '/login',
    text: '로그인',
    logo: 'login',
    shouldAuth: false,
  },
  {
    to: '/trips',
    text: '여행',
    logo: 'Airbnb',
    shouldAuth: true,
  },
  {
    to: '/message',
    text: '메시지',
    logo: 'message',
    shouldAuth: true,
  },
  {
    to: '/profile',
    text: '프로필',
    logo: 'profile',
    shouldAuth: true,
  },
];

export default items;
