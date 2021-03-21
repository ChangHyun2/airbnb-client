import styled from '@emotion/styled';
import s from 'S';
import Divider from '@UI/Divider';
import { helpIcon, adventureIcon, houseIcon } from '@UI/Icon';
import CategorySection from './Footer/CategorySection';
import BottomSection from './Footer/BottomSection';

const StyledFooter = styled.footer`
  padding-top: ${s.pad.sm};
  background-color: ${s.pallete.whiteGrey0};

  > div {
    ${s.over.lg(`
      ${s.flex}
    `)}
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        {[
          {
            category: '소개',
            items: [
              {
                title: '에어비앤비 이용 방법',
                href: '#',
              },
              {
                title: '뉴스룸',
                href: '#',
              },
              {
                title: '투자자 정보',
                href: '#',
              },
              {
                title: '에어비앤비 플러스',
                href: '#',
              },
              {
                title: '에어비앤비 플러스',
                href: '#',
              },
              {
                title: '에어비앤비 플러스',
                href: '#',
              },
              {
                title: '에어비앤비 플러스',
                href: '#',
              },
              {
                title: '에어비앤비 플러스',
                href: '#',
              },
              {
                title: '에어비앤비 플러스',
                href: '#',
              },
            ],
          },
          {
            category: '커뮤니티',
            items: [
              {
                title: '다양성 및 소속감',
                href: '#',
              },
              {
                title: '다양성 및 소속감',
                href: '#',
              },
              {
                title: '다양성 및 소속감',
                href: '#',
              },
              {
                title: '다양성 및 소속감',
                href: '#',
              },
              {
                title: '다양성 및 소속감',
                href: '#',
              },
              {
                title: '다양성 및 소속감',
                href: '#',
              },
              {
                title: '다양성 및 소속감',
                href: '#',
              },
            ],
          },
          {
            category: '호스팅하기',
            items: [
              {
                title: '숙소 호스팅',
                href: '#',
              },
              {
                title: '숙소 호스팅',
                href: '#',
              },
              {
                title: '숙소 호스팅',
                href: '#',
              },
              {
                title: '숙소 호스팅',
                href: '#',
              },
              {
                title: '숙소 호스팅',
                href: '#',
              },
              {
                title: '숙소 호스팅',
                href: '#',
              },
              {
                title: '숙소 호스팅',
                href: '#',
              },
            ],
          },
          {
            category: '에어비앤비 지원',
            items: [
              {
                title: '에어비앤비의 코로나19 대응 방안',
                href: '#',
              },
              {
                title: '에어비앤비의 코로나19 대응 방안',
                href: '#',
              },
              {
                title: '에어비앤비의 코로나19 대응 방안',
                href: '#',
              },
              {
                title: '에어비앤비의 코로나19 대응 방안',
                href: '#',
              },
              {
                title: '에어비앤비의 코로나19 대응 방안',
                href: '#',
              },
              {
                title: '에어비앤비의 코로나19 대응 방안',
                href: '#',
              },
              {
                title: '에어비앤비의 코로나19 대응 방안',
                href: '#',
              },
            ],
          },
        ].map(({ category, items }) => (
          <CategorySection key={category} category={category} items={items} />
        ))}
      </div>
      <BottomSection />
    </StyledFooter>
  );
}
