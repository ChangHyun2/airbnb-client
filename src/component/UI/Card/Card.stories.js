import Container from '@UI/Container';
import styled from '@emotion/styled';
import { alignChild, pad, baseComponent, pallete } from 'S';

export default {
  title: 'Card',
};

const StyledCard = styled.div`
  ${({ size }) => baseComponent.baseCard(size)};
  ${alignChild.grid4};
  height: 100px;
  padding: ${pad.xs};
`;

// Card
export const Card = (props) => {
  return (
    <>
      <StyledCard size={props.size}>{props.text}</StyledCard>
      <Container align={'flex'}>
        {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
          <StyledCard size={size}>
            <p>
              <span>{size}</span> card component
            </p>
          </StyledCard>
        ))}
      </Container>
    </>
  );
};

const argTypes = {
  size: {
    control: {
      type: 'select',
    },
    options: ['xs', 'sm', 'md', 'lg', 'auto'],
  },
  text: {
    control: {
      type: 'text',
    },
  },
};

Card.argTypes = argTypes;
