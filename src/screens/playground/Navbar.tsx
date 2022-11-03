import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";

const NavbarContainer = styled.div`
  height: 4rem;
  background: var(--body1);
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

const Toggle = styled.div`
  display: flex;
  align-content: right;
  justify-content: right;
  background: var(--body1);
`;

const Navbar = () => {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.dataset.theme = "light";
  }, []);

  const setMode = () => {
    document.body.dataset.theme = isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode ? "dark" : "light");
  };

  return (
    <>
      <Toggle></Toggle>
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
        {/* <DarkModeToggle onChange={setMode} checked={!isDarkMode} size={80} /> */}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
