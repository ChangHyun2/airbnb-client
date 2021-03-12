import styled from '@emotion/styled';
import Section from '@UI/Section';
import s from 'S';

const CommonSection = styled.div`
  padding: ${s.pad.xs} 0;

  h2 {
    ${s.h22}
    ${s.bold}
  }

  p {
    ${s.h14}
  }

  ${s.over.md(`
    h2 {
      ${s.h32}
    }
  `)}

  ${s.over.md(`
   padding: ${s.pad.sm} 0;
`)}
`;

const SnapScroller = styled.ul`
  ${s.baseContainer}

  ${s.xsOnly(`
      ${s.baseSnapScroller({ col: 3, offset: 0 })}

      & > li:last-child{
        padding-right: ${s.pad.xs}
      }
    `)}

  ${({ col }) => `
      ${s.over.sm(`
        display:block;
        column-count: ${col};
      `)}
    `}
`;

const Card = styled.li`
  ${s.baseImageWrapper}

  img {
    border-radius: ${s.round.sm};
    ${s.mb1};
  }

  ${s.xsOnly(`
    img {
      width: 80vw;
      height: 80vw;
    }
  `)}

  h3 {
    ${s.h18}
    ${s.bold}
  }
`;

export default function commonSection({
  title,
  content,
  cardsData,
  children,
  ...otherProps
}) {
  return (
    <CommonSection {...otherProps}>
      <Section mb={3}>
        <h2>{title}</h2>
        <s.Relative>{content ? <p>{content}</p> : null}</s.Relative>
      </Section>
      <SnapScroller col={cardsData.length}>
        {cardsData.map(({ imgURL, title, content }) => (
          <Card key={title}>
            <img src={imgURL} />
            <h3>{title}</h3>
            {content ? <p>{content}</p> : null}
          </Card>
        ))}
      </SnapScroller>
    </CommonSection>
  );
}
