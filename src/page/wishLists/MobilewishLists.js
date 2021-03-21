import React from 'react';
import { useSelector } from 'react-redux';
import { useToggle } from '@hooks';
import WishListAdder from './mobileWishLists/WishListAdder';
import { PrivateHeader, PublicHeader, Modal } from './MobileWishLists.styled';
import Divider from '@UI/Divider';
import { FluidButton } from '@component/UI/Button';
import { InvertedButton } from '@UI/Button/Button';
import { MobileWrapper } from '@UI/Wrapper';
import { scaleUp, scaleDown } from '@UI/animation/animation';

function MobileWishLists() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const modal = useToggle(false);

  return (
    <MobileWrapper>
      {!isAuth ? (
        <PrivateHeader>
          <h1>저장 목록</h1>
          <InvertedButton onClick={modal.setOn} size={'lg'}>
            목록 만들기
          </InvertedButton>
          <Modal
            show={modal.on}
            onClose={modal.setOff}
            duration={0.4}
            animationOnMount={scaleUp}
            animationOnUnMount={scaleDown}
          >
            <WishListAdder modalSetOff={modal.setOff} />
          </Modal>
        </PrivateHeader>
      ) : (
        <PublicHeader>
          <h1>저장 목록</h1>
          <FluidButton>로그인</FluidButton>
          <Divider style={{ margin: '1.25em 0' }} />
        </PublicHeader>
      )}
      {/* <WishCards /> */}
    </MobileWrapper>
  );
}

export default MobileWishLists;
