import React, { useContext } from "react";
import EditorContainer from "./EditorContainer";
import InputConsole from "./InputConsole";
import Navbar from "./Navbar";
import OutputConsole from "./OutputConsole";
import { useParams } from "react-router-dom";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import styled from "styled-components";

const MainApp = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: calc(100vh - 4.5rem);
`;

const Consoles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grdi-template-columns: 1ft 1fr;
`;

const Playground = () => {
  const { folderId, playgroundId } = useParams();

  const { folders } = useContext(PlaygroundContext)!;
  const { title, language } =
    folders[folderId as string].items[playgroundId as string];

  return (
    <div>
      <Navbar />
      <MainApp>
        <EditorContainer title={title} language={language} />
        <Consoles>
          <InputConsole />
          <OutputConsole />
        </Consoles>
      </MainApp>
    </div>
  );
};

export default Playground;
