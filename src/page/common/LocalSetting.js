import { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { useToggle } from '@hooks';
import Button, { RoundButton, GhostButton } from '@UI/Button';
import { closeIcon } from '@UI/Icon';
import s from 'S';
import language from '@data/localSetting/language';
import currency from '@data/localSetting/currency';

const StyledLocalSetting = styled.div`
  ${s.col}
  width: 90vw;
  max-width: 1080px;
  height: 90vh;
  ${s.baseCard('md')};
  padding: ${s.pad.xs};
`;

const CloseButton = styled(RoundButton)`
  svg {
    stroke-width: 2px;
    width: 15px;
    height: 15px;
    padding: 2px;
  }
  ${s.mb3}
`;

const Tabs = styled.div`
  ${s.h16}
  ${s.mb4}
  button {
    color: ${s.pallete.grey5};
    font-weight: bold;

    :hover,
    :focus {
      color: ${s.pallete.black};
    }

    margin-right: ${s.pad.xs};
  }
`;

const Sections = styled.div`
  overflow-y: scroll;
`;

const Section = styled.ul`
  ${s.mb4}
  ${s.row}

  h2 {
    width: 100%;
    ${s.h22}
    ${s.bold}
    ${s.mb2}
  }

`;

const StyledSectionItem = styled.li`
  ${s.grid6}
  padding: 10px;

  ${s.over.md(`
    ${s.grid4}
  `)};

  ${s.over.lg(`
    ${s.grid3}
  `)};

  ${s.over.xl(`
    width: 20%;
  `)};

  button {
    width: 100%;
    font-weight: normal;
    ${s.h14}

    span {
      text-align: left;
      width: 100%;
    }

    div:last-of-type {
      color: ${s.pallete.grey5};
    }
  }
`;

const SectionItem = ({ title, content }) => (
  <StyledSectionItem>
    <Button variant="white" size="md">
      <div>{title}</div>
      <div>{content}</div>
    </Button>
  </StyledSectionItem>
);

const LocalSetting = ({ onClose }) => {
  const showLanguage = useToggle(true);
  const tabRef = useRef();

  useEffect(() => {
    tabRef.current.focus();
  }, []);

  return (
    <StyledLocalSetting>
      <div>
        <CloseButton
          onClick={onClose}
          variant="white"
          size="md"
          IconComponent={closeIcon}
        />
      </div>
      <Tabs>
        <GhostButton ref={tabRef} onClick={showLanguage.setOn}>
          언어와 지역
        </GhostButton>
        <GhostButton onClick={showLanguage.setOff}>통화</GhostButton>
      </Tabs>
      <Sections>
        {showLanguage.on
          ? [
              { title: '추천 언어 및 지역', items: language.slice(0, 3) },
              { title: '언어와 지역을 선택하세요.', items: language },
            ].map(({ title, items }) => (
              <Section key={title}>
                <h2>{title}</h2>
                {items.map(({ language, location }, i) => (
                  <SectionItem key={i} title={language} content={location} />
                ))}
              </Section>
            ))
          : [{ title: '통화를 선택하세요.', items: currency }].map(
              ({ title, items }) => (
                <Section key={title}>
                  <h2>{title}</h2>
                  {items.map(({ country, unit }, i) => (
                    <SectionItem key={i} title={country} content={unit} />
                  ))}
                </Section>
              )
            )}
      </Sections>
    </StyledLocalSetting>
  );
};

export default LocalSetting;
