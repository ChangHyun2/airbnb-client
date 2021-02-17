const data = {
  location: [
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
      title: '서울',
      content: '차로 15분 거리',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/af3eff67-b6fc-48c8-8420-3b1720f1169e.jpg?im_q=medq&im_w=720',
      title: '대전',
      content: '차로 2.5시간 거리',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/bd549da5-ecdd-4642-9a4c-4943c9c8cf28.jpg?im_q=medq&im_w=720',
      title: '인천',
      content: '차로 45분 거리',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=720',
      title: '수원시',
      content: '차로 45분 거리',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720',
      title: '의정부시',
      content: '차로 30분 거리',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/847cfb7f-788d-42dc-9148-f375348dde76.jpg?im_q=medq&im_w=720',
      title: '부천시',
      content: '차로 30분 거리',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/926d56aa-8b36-4138-8eae-ad991868b858.jpg?im_q=medq&im_w=720',
      title: '대구',
      content: '차로 4시간 거리',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/527be437-1c46-4ab6-aabc-301e6598194e.jpg?im_q=medq&im_w=720',
      title: '성남시',
      content: '차로 45분 거리',
    },
  ],
  house: [
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=720',
      title: '집 전체',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720',
      title: '통나무집 및 전원주택',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=720',
      title: '독특한 공간',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=720',
      title: '반려동물 환영',
    },
  ],
  adventure: [
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=720',
      title: '온라인 체험',
      content: '집에서 즐기는 랜선 세계 여행',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=720',
      title: '체험',
      content: '어디에서든 즐길 수 있는 체험',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=720',
      title: '어드벤처',
      content: '숙박과 식사가 포함된 며칠 일정의 여행입니다.',
    },
  ],
  host: [
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=720',
      title: '숙소 호스트 되기',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=720',
      title: '온라인 체험 호스팅하기',
    },
    {
      imgURL:
        'https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=720',
      title: '체험 호스팅하기',
    },
  ],
};

export const getHomeData = () =>
  new Promise((res) =>
    setTimeout(() => res(new Promise((res, rej) => res(data))), 2000)
  );
