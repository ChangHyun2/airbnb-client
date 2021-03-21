import styled from '@emotion/styled';
import { GhostButton } from '@UI/Button';
import Divider from '@UI/Divider';
import s from 'S';

const StyledCategorySection = styled.section`
  ${s.baseSection()}
  ${s.mb2}

  h4 {
    ${s.h12}
    ${s.bold}
    ${s.mb2}
  }
  
  ${s.over.lg(`
    ${s.grid3}
  `)}
`;

const StyledNav = styled.nav`
  ${s.under.lg(`
    border-bottom: 1px solid ${s.pallete.grey0} ;
  `)}

  li {
    color: ${s.pallete.black5};
  }

  ${s.mdTo.lg(`
    ${s.flex}

    li{
      ${s.grid4}
    }
  `)}

  a {
    ${s.h14}
    ${s.mb1}
  }

  li:last-of-type a {
    ${s.mb2}
  }
`;

export default function CategorySection({ category, items }) {
  return (
    <StyledCategorySection>
      <h4>{category}</h4>
      <StyledNav>
        {items.map(({ title, href, to, Icon, ...otherProps }, i) => (
          <li key={i}>
            <GhostButton href={href} to={to} {...otherProps}>
              {title}
            </GhostButton>
          </li>
        ))}
      </StyledNav>
    </StyledCategorySection>
  );
}
