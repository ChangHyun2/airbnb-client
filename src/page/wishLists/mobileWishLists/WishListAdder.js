import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Header,
  CloseButton,
  Body,
  InputBox,
  Foot,
  CancelButton,
  SaveButton,
} from './WishListAdder.styled';
import { closeIcon as CloseIcon } from '@UI/SVGIcon/Icons';
import { useFormContext } from '@lib/Former/FormContext';

const WishListAdder = ({ modalSetOff }) => {
  const context = useFormContext();
  console.log(context);
  return (
    <>
      <Header>
        <CloseButton onClick={modalSetOff}>
          <CloseIcon />
        </CloseButton>
        <h2>목록 만들기</h2>
        <span />
      </Header>
      <Body>
        <InputBox>
          <label
            htmlFor="name"
            css={css`
              display: block;
            `}
          >
            <div>이름</div>
            <input type="text" name="name"></input>
          </label>
        </InputBox>
        <InputBox>
          <label
            htmlFor="privateInfo"
            css={css`
              display: block;
            `}
          >
            <div> 개인정보 설정</div>
            <select
              name="privateInfo"
              css={css`
                width: 50%;
              `}
            >
              <option>전체공개</option>
              <option>비공개</option>
            </select>
          </label>
        </InputBox>
      </Body>
      <Foot>
        <CancelButton onClick={modalSetOff}>취소</CancelButton>
        <SaveButton>저장</SaveButton>
      </Foot>
    </>
  );
};

export default WishListAdder;
