import s from 'S';
import styled from '@emotion/styled';
import { GhostButton } from '@UI/Button';
import { GlobeIcon, FacebookIcon } from '@UI/Icon';
import LocalSetting from '@component/dialogs/LocalSetting';

const SnsLinks = styled.ul`
  svg {
    width: 18px;
    height: 18px;
  }
`;

const StyledBottomSection = styled.section`
  ${s.baseSection()}
  ${s.h14}
  

  > div {
    ${s.over.md(`
    ${s.colCenter}
    `)}

    ${s.over.lg(`
      padding-top: ${s.spacing[20]};
      border-top: 1px solid ${s.pallete.grey0}
    `)}
  }
`;

const LocalSettingTogglers = styled.div`
  ${s.flex}
  ${s.mb3}

  svg {
    ${s.size('14px', '14px')}
    stroke-width: 0.2px;
  }

  button {
    text-decoration: underline;
    margin-right: ${s.spacing[30]};

    span:last-child {
      margin-left: ${s.spacing[8]};
    }
  }

  button:last-child {
    margin-left: ${s.spacing[8]};
  }
`;

const SiteDetail = styled.div`
  ${s.flex}

  li::after {
    content: '·';
  }
`;

const BottomSection = function () {
  return (
    <StyledBottomSection>
      <div>
        <s.Flex>
          <LocalSettingTogglers>
            <GhostButton>
              <s.Flex>
                <GlobeIcon />
                <span>한국어(KR)</span>
              </s.Flex>
            </GhostButton>
            <s.Flex>
              <span>kr</span>
              <GhostButton>SEK</GhostButton>
            </s.Flex>
          </LocalSettingTogglers>
          <SnsLinks>
            {[{ icon: FacebookIcon, href: '#' }].map(({ icon: Icon, href }) => (
              <li>
                <GhostButton href={href}>
                  <Icon />
                </GhostButton>
              </li>
            ))}
          </SnsLinks>
        </s.Flex>
        <p>© 2021 Airbnb, Inc. All rights reserved</p>
        <SiteDetail>
          {[
            {
              title: '개인정보 처리방침',
              href: '#',
            },
            {
              title: '개인정보 처리방침',
              href: '#',
            },
            {
              title: '개인정보 처리방침',
              href: '#',
            },
            {
              title: '개인정보 처리방침',
              href: '#',
            },
            {
              title: '개인정보 처리방침',
              href: '#',
            },
          ].map(({ title, href }, i) => (
            <li key={i}>
              <GhostButton href={href}>{title}</GhostButton>
            </li>
          ))}
        </SiteDetail>
      </div>
    </StyledBottomSection>
  );
};

export default BottomSection;
