import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Show from '@component/Show';
import BannerSection from './sections/BannerSection';
import LocationSection from './sections/LocationSection';
import CommonSection from './sections/CommonSection';
import { getHomeData } from '@data/home';
import { TripleDotLoading } from '@UI/Loading';
import s from 'S';

const StyledSections = styled.div`
  ${s.fluid}
  ${s.absolute}
`;

const HouseSection = styled(CommonSection)`
  padding-top: 0px !important;
`;
const AdventureSection = styled(CommonSection)`
  background-color: ${s.pallete.black};
  color: ${s.pallete.white};

  ${s.xsOnly(`
    img{
      width: 272px;
      height: 272px;
    }
  `)};
`;
const HostSection = styled(CommonSection)`
  ${s.xsOnly(`
    img{
      height: auto;
    }
  `)}
`;

export default function Sections() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getHomeData()
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [getHomeData]);

  return (
    <StyledSections>
      <BannerSection />
      {isLoading ? (
        <s.RowCenter>
          <TripleDotLoading />
        </s.RowCenter>
      ) : data ? (
        <>
          <LocationSection cardsData={data.location} />
          <Show.underXl>
            <HouseSection
              title="어디에서나, 여행은 살아보는 거야!"
              cardsData={data.house.slice(0, -1)}
            />
          </Show.underXl>
          <Show.overXl>
            <HouseSection
              title="어디에서나, 여행은 살아보는 거야!"
              columnCount={4}
              cardsData={data.house}
            />
          </Show.overXl>
          <AdventureSection
            title="세상을 만나는 특별한 방법"
            content="현지 전문가와 함께하는 독특한 액티비티를 직접 체험하거나 온라인으로 만나보세요."
            cardsData={data.adventure}
          />
          <HostSection
            title="수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요."
            cardsData={data.host}
          />
        </>
      ) : error ? (
        'error!'
      ) : null}
    </StyledSections>
  );
}
