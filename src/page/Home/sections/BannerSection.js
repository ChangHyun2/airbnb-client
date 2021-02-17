import Button from '@UI/Button';
import styled from '@emotion/styled';
import Section from '@UI/Section';
import s from 'S';

const StyledBannerSection = styled.div`
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
export default function BannerSection() {
  return (
    <StyledBannerSection>
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
        <Button size="sm" theme="white" effect="scaleDown">
          근처의 숙소 둘러보기
        </Button>
      </BannerContent>
    </StyledBannerSection>
  );
}
