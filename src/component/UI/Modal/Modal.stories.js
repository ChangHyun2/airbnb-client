import styled from '@emotion/styled';
import { useToggle } from '@hooks';
import ModalComponent from '@UI/Modal';
import s from 'S';

export default {
  title: 'Modal',
  component: ModalComponent,
};

const Content = styled.div`
  width: 200px;
  height: 100px;
  ${s.baseCard}
`;

export const Modal = (props) => {
  const showModal = useToggle(false);

  return (
    <>
      <ModalComponent show={showModal.on} onClose={showModal.setOff}>
        <Content>helllo</Content>
      </ModalComponent>
      <button onClick={showModal.toggle}>toggle modal</button>
    </>
  );
};
