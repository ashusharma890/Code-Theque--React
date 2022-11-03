import { useContext, useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { BsToggleOff } from "react-icons/bs";
import { ModalContext } from "../../context/ModalContext";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";

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
  color: var(--color);

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
  background: var(--body);
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
`;

const Folder = styled.div`
  // background: red;
  margin-top: 0;
  margin-bottom: 2rem;
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
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  flex-grow: 1;

  h5 {
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
    color: var(--color);
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

const FolderButtons = styled.div`
  display: flex;
  align-items: center;
`;

const RightPane = () => {
  const navigate = useNavigate();
  const makeAvailableGlobally = useContext(ModalContext)!;
  const { openModal } = makeAvailableGlobally;

  const PlaygroundFeatures = useContext(PlaygroundContext)!;
  const Folders = PlaygroundFeatures.folders;
  const { deleteCard, deleteFolder } = PlaygroundFeatures;

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.dataset.theme = "light";
  }, []);

  const setMode = () => {
    document.body.dataset.theme = isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    // console.log(isDarkMode ? "dark" : "light");
  };

  return (
    <StyledPane>
      <DarkModeToggle onChange={setMode} checked={!isDarkMode} size={80} />
      <Header variant="main">
        <Heading size="large">
          My <span>Playgrounds</span>
        </Heading>
        <AddButton
          onClick={() => {
            openModal({
              value: true,
              type: "4",
              identifier: {
                folderId: "",
                cardId: "",
              },
            });
          }}
        >
          <span>+</span> New Folder
        </AddButton>
      </Header>

      {Object.entries(Folders).map(
        ([folderId, folder]: [folderId: string, folder: any]) => (
          <Folder>
            <Header variant="folder">
              <Heading size="small">{folder.title}</Heading>
              <FolderButtons>
                <Icons>
                  <IoTrashOutline
                    onClick={() => {
                      deleteFolder(folderId);
                    }}
                  />
                  <CiEdit
                    onClick={() => {
                      openModal({
                        value: true,
                        type: "2",
                        identifier: {
                          folderId: folderId,
                          cardId: "",
                        },
                      });
                    }}
                  />
                </Icons>
                <AddButton
                  onClick={() => {
                    openModal({
                      value: true,
                      type: "3",
                      identifier: {
                        folderId: folderId,
                        cardId: "",
                      },
                    });
                  }}
                >
                  <span>+</span> New playground
                </AddButton>
              </FolderButtons>
            </Header>

            <Cards>
              {Object.entries(folder.items).map(
                ([cardId, card]: [cardId: string, card: any]) => (
                  <Card
                    onClick={() => {
                      navigate(`/code/${folderId}/${cardId}`, {
                        state: {
                          id: "dark",
                        },
                      });
                    }}
                  >
                    <SmallLogo src="/logo.png" alt="" />
                    <CardContent>
                      <h5>{card.title}</h5>
                      <p>Language: {card.language}</p>
                    </CardContent>
                    <Icons
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <IoTrashOutline
                        onClick={() => {
                          deleteCard(folderId, cardId);
                        }}
                      />
                      <CiEdit
                        onClick={() => {
                          openModal({
                            value: true,
                            type: "1",
                            identifier: {
                              folderId: folderId,
                              cardId: cardId,
                            },
                          });
                        }}
                      />
                    </Icons>
                  </Card>
                )
              )}
            </Cards>
          </Folder>
        )
      )}
    </StyledPane>
  );
};

export default RightPane;
