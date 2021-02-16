import { useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Section from '@UI/Section';
import Button, { GhostButton, PillButton } from '@UI/Button';
import { useDetectSticked } from '@hooks';
import s from 'S';

const StyledSections = styled.div`
  ${s.fluid}
  ${s.absolute}
`;

const BannerSection = styled.div`
  ${s.baseImageWrapper}
  background-color: ${s.pallete.black}
  ${s.mb4}

  img{
    position:relative;
  }

  ${s.xsOnly(`
    img{
      border-top-left-radius: ${s.round24}px;
      border-top-right-radius: ${s.round24}px;
    }
  `)}

  ${s.over.sm(`
    height: 630px;

    img{
      object-fit:cover;
      object-position: 50% 100%;
    }
  `)}

  ${s.over.xl(`
    img{
      object-fit: fill;
    }
  `)}
`;

const BannerContent = styled(Section)`
  display:block;
  ${s.absolute}
  top: 90px;

  p {
    ${s.mb2};
    ${s.h32}
    ${s.bold}
    color : ${s.pallete.white}
  }
  

  ${s.over.md(`
    top: 340px;

    p{
      ${s.h42}
    }
  `)}
`;

export default function Sections() {
  return (
    <StyledSections>
      <BannerSection>
        <picture>
          <source
            srcSet="https://a0.muscache.com/im/pictures/cf39f4c4-e860-43d4-85be-deddd7b2da90.jpg?im_w=1440 1x, https://a0.muscache.com/im/pictures/cf39f4c4-e860-43d4-85be-deddd7b2da90.jpg?im_w=1920 2x"
            media="(min-width: 800px)"
          />
          <img src="https://a0.muscache.com/im/pictures/c8dd7889-d579-49c7-9650-24ff71a82190.jpg?im_q=highq&im_w=720" />
        </picture>
        <BannerContent>
          <p>
            이제, 여행은
            <br /> 가까운 곳에서
          </p>
          <Button theme="white" effect="scaleDown" sm>
            근처의 숙소 둘러보기
          </Button>
        </BannerContent>
      </BannerSection>
      <Section>{'locations'}</Section>
      <Section>{'어디에서나, 여행은 살아보는 거야!'}</Section>
      <Section>{'세상을 만나는 특별한 방법'}</Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
      <Section>
        {'수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.'}
      </Section>
    </StyledSections>
  );
}
