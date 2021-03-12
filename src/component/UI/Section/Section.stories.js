import { alignSelf } from 'S';
import styled from '@emotion/styled';
import section from '@UI/Section';
import s from 'S';

const SectionComponent = styled(section)`
  box-shadow: 0 0 1px #aaa;
  :hover {
    box-shadow: 0 0 0 1px #000;
  }

  h2 {
    ${s.mb1}
  }
`;

export const Section = (props) =>
  [1, 2, 3, 4, 5].map((num) => (
    <SectionComponent key={num} mb={props.mb}>
      <h2>{`section ${num}`}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a
        asperiores quae, nam quis, reprehenderit amet et praesentium earum rerum
        eveniet facere incidunt? Dicta maiores, aut repellendus id dolorem
        optio?
      </p>
    </SectionComponent>
  ));
Section.argTypes = {
  mb: {
    control: {
      type: 'select',
      options: ['1', '2', '3', '4'],
    },
  },
};

export default {
  title: 'Section',
  component: Section,
};
