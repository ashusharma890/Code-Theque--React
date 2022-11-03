import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  height: 4rem;
  background: #39c395;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbarcontent = styled.button`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  border: 0;
  outline: 0;
  background: transparent;
`;

const Logo = styled.img`
  width: 45px;
  background-color: #241f21;
`;

const MainHeading = styled.h1`
  font-size: 1.9rem;
  font-weight: 400;
  color: white;

  span {
    font-weight: 700;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <Navbarcontent
        onClick={() => {
          navigate("/");
        }}
      >
        <Logo src="/logo.png" alt="" />
        <MainHeading>
          <span>Code</span> Theque
        </MainHeading>
      </Navbarcontent>
    </NavbarContainer>
  );
};

export default Navbar;
