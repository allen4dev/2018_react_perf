import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Close = styled.button`
  color: red;
  font-weight: bold;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Modal = ({ children, close }) => {
  return (
    <Wrapper>
      <Close onClick={close}>X</Close>
      {children}
    </Wrapper>
  );
};

export default Modal;
