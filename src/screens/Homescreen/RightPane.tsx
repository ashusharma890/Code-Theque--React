import React from "react";
import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { BsToggleOff } from "react-icons/bs";

interface HeaderProps {
  readonly variant: string;
}

interface HeadingProps {
  readonly size: string;
}

const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: ${(props) =>
    props.variant === "main" ? "2.75rem" : "1.4rem"};

  &::after {
    position: absolute;
    content: "";
    bottom: -1.25rem;
    width: 100%;
    height: 2px;
    background: #39c359;
    display: ${(props) => (props.variant === "main" ? "block" : "none")};
  }
`;

const Heading = styled.h3<HeadingProps>`
  font-weight: 400;
  font-size: ${(props) => (props.size === "large" ? "1.8rem" : "1.5rem")};

  span {
    font-weight: 700;
  }
`;

const AddButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 1.1rem;
  cursor: pointer;

  span {
    font-size: 1.75rem;
    font-weight: 700;
  }

  transition: all 0.25s ease;
  &:hover {
    opacity: 0.75;
    transform: scale(1.2);
    // background: #111;
    // color: #fff;
  }
`;

const StyledPane = styled.div`
  padding: 2rem;
  background: #fafafa;
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
`;

const Folder = styled.div`
  // background: red;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
`;

const Card = styled.div`
  // background: pink;
  display: flex;
  align-items: center;
  padding: 0.6rem;
  gap: 1rem;
  box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.55);
`;

const CardContent = styled.div`
  flex-grow: 1;

  h5 {
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1.25rem;
  padding-right: 1rem;
`;

const SmallLogo = styled.img`
  width: 75px;
`;

const RightPane = () => {
  return (
    <StyledPane>
      <Header variant="main">
        <Heading size="large">
          My <span>Playgrounds</span>
        </Heading>
        <AddButton className="addbutton">
          <span>+</span> New Folder
        </AddButton>
      </Header>

      <Folder>
        <Header variant="folder">
          <Heading size="small">Data Structures</Heading>
          <AddButton>
            <span>+</span> New playground
          </AddButton>
        </Header>

        <Cards>
          <Card>
            <SmallLogo src="/logo.png" alt="" />
            <CardContent>
              <h5>Stack Implementation</h5>
              <p>Language: Java</p>
            </CardContent>
            <div className="icons">
              <IoTrashOutline />
              <CiEdit />
            </div>
          </Card>
          <Card>
            <SmallLogo src="/logo.png" alt="" />
            <CardContent>
              <h5>Stack Implementation</h5>
              <p>Language: Java</p>
            </CardContent>
            <div className="icons">
              <IoTrashOutline />
              <CiEdit />
            </div>
          </Card>
          <Card>
            <SmallLogo src="/logo.png" alt="" />
            <CardContent>
              <h5>Stack Implementation</h5>
              <p>Language: Java</p>
            </CardContent>
            <div className="icons">
              <IoTrashOutline />
              <CiEdit />
            </div>
          </Card>
        </Cards>
      </Folder>
      <Folder>
        <Header variant="folder">
          <Heading size="small">Data Structures</Heading>
          <AddButton>
            <span>+</span> New playground
          </AddButton>
        </Header>

        <Cards>
          <Card>
            <SmallLogo src="/logo.png" alt="" />
            <CardContent>
              <h5>Stack Implementation</h5>
              <p>Language: Java</p>
            </CardContent>
            <div className="icons">
              <IoTrashOutline />
              <CiEdit />
            </div>
          </Card>
          <Card>
            <SmallLogo src="/logo.png" alt="" />
            <CardContent>
              <h5>Stack Implementation</h5>
              <p>Language: Java</p>
            </CardContent>
            <div className="icons">
              <IoTrashOutline />
              <CiEdit />
            </div>
          </Card>
          <Card>
            <SmallLogo src="/logo.png" alt="" />
            <CardContent>
              <h5>Stack Implementation</h5>
              <p>Language: Java</p>
            </CardContent>
            <div className="icons">
              <IoTrashOutline />
              <CiEdit />
            </div>
          </Card>
        </Cards>
      </Folder>
      <Folder>
        <Header variant="folder">
          <Heading size="small">Data Structures</Heading>
          <AddButton>
            <span>+</span> New playground
          </AddButton>
        </Header>

        <Cards>
          <Card>
            <SmallLogo src="/logo.png" alt="" />
            <CardContent>
              <h5>Stack Implementation</h5>
              <p>Language: Java</p>
            </CardContent>
            <div className="icons">
              <IoTrashOutline />
              <CiEdit />
            </div>
          </Card>
          <Card>
            <SmallLogo src="/logo.png" alt="" />
            <CardContent>
              <h5>Stack Implementation</h5>
              <p>Language: Java</p>
            </CardContent>
            <div className="icons">
              <IoTrashOutline />
              <CiEdit />
            </div>
          </Card>
          <Card>
            <SmallLogo src="/logo.png" alt="" />
            <CardContent>
              <h5>Stack Implementation</h5>
              <p>Language: Java</p>
            </CardContent>
            <div className="icons">
              <IoTrashOutline />
              <CiEdit />
            </div>
          </Card>
        </Cards>
      </Folder>
    </StyledPane>
  );
};

export default RightPane;
