import React from "react";
import styled from "styled-components";

const StyledLeftPane = styled.div`
  background: #39c395;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftContent = styled.div`
  text-align: center;
  color: #fff;
`;

const Logo = styled.img`
  width: 165px;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  color: white;
  margin-bottom: 0.75rem;

  span {
    font-weight: 700;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  opacity: 75%;
  margin-bottom: 1.5rem;
  font-weight: 400;
  color: white;
`;

const Button = styled.a`
  padding: 0.25 rem 1rem;
  border-radius: 2rem;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  span {
    font-weight: 700;
    font-size: 2rem;
  }

  transition: all 0.25s ease;
  &:hover {
    opacity: 0.9;
    transform: scale(1.2);
    background: white;
    color: #111;
  }
`;

const LeftPane = () => {
  return (
    <StyledLeftPane>
      <LeftContent>
        <Logo src="/logo-s.png" alt="" />
        <Heading>
          <span>Code</span> Theque
        </Heading>
        <SubHeading>Code.. Complie.. Debug..</SubHeading>
        <Button>
          <span>+</span> Create a Playground
        </Button>
      </LeftContent>
    </StyledLeftPane>
  );
};

export default LeftPane;
