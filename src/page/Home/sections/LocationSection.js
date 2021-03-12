import styled from '@emotion/styled';
import Section from '@UI/Section';
import { css } from '@emotion/react';
import s from 'S';

const StyledLocationSection = styled.div`
  ${s.mb4}
`;

const Card = styled.li`
  ${s.row}

  img {
    border-radius: ${s.round.sm};
    margin-right: 10px;
    width: 65px;
    height: 65px;
  }

  p {
    font-size: 14px;
  }

  margin-right: -10px;
`;

const SnapScroller = styled.div`
  ${s.baseContainer}

  h4{
    margin-bottom: 5px;
    ${s.bold}
  }

  ${s.xsOnly(`
    ${s.baseSnapScroller({
      row: 2,
      col: 3,
    })}
  `)}

  ${s.over.sm(`
    column-count: 3;

    & > li{
      margin-bottom: 10px;
    }

    p {
      letter-spacing: -1px;
    }
  `)}

  ${s.over.xl(`
    column-count: 4;
  `)}
`;

export default function LocationSection(props) {
  return (
    <StyledLocationSection>
      <SnapScroller>
        {props.cardsData.map(({ imgURL, title, content }, i) => (
          <Card
            key={title}
            css={
              i > 5
                ? css`
                    display: none;
                    ${s.over.xl(`display:flex;`)}
                  `
                : null
            }
          >
            <div>
              <img src={imgURL} />
            </div>
            <div>
              <h4>{title}</h4>
              <p>{content}</p>
            </div>
          </Card>
        ))}
      </SnapScroller>
    </StyledLocationSection>
  );
}
