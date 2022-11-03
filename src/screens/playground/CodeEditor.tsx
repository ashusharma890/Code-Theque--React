import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { duotoneLight, duotoneDark } from "@uiw/codemirror-theme-duotone";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { bespin } from "@uiw/codemirror-theme-bespin";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { indentUnit } from "@codemirror/language";
import { EditorState } from "@codemirror/state";
import styled from "styled-components";

const CodeEditorBox = styled.div<CodeEditorBoxTypes>`
  & > div {
    height: 100%;
  }

  ${({ isFullScreen }) =>
    !isFullScreen
      ? `
  height: calc(100vh - 12.5rem)
  `
      : `
height: 100vh;
`}
`;

interface CodeEditorBoxTypes {
  isFullScreen: boolean;
}

interface CodeEditorProps {
  currentLanguage: string;
  currentTheme: string;
  currentCode: string;
  setCurrentCode: (newCode: string) => void;
  isFullScreen: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  currentLanguage,
  currentTheme,
  currentCode,
  setCurrentCode,
  isFullScreen,
}) => {
  const [theme, setTheme] = useState<any>(githubDark);
  const [lang, setLang] = useState<any>(java);

  useEffect(() => {
    if (currentLanguage === "c++") setLang(cpp);
    if (currentLanguage === "java") setLang(java);
    if (currentLanguage === "javascript") setLang(javascript);
    if (currentLanguage === "python") setLang(python);
  }, [currentLanguage]);

  useEffect(() => {
    if (currentTheme === "duotoneLight") setTheme(duotoneLight);
    if (currentTheme === "duotoneDark") setTheme(duotoneDark);
    if (currentTheme === "githubLight") setTheme(githubLight);
    if (currentTheme === "githubDark") setTheme(githubDark);
    if (currentTheme === "xcodeDark") setTheme(xcodeDark);
    if (currentTheme === "xcodeLight") setTheme(xcodeLight);
    if (currentTheme === "okaidia") setTheme(okaidia);
    if (currentTheme === "dracula") setTheme(dracula);
    if (currentTheme === "bespin") setTheme(bespin);
  }, [currentTheme]);

  return (
    <CodeEditorBox isFullScreen={isFullScreen}>
      <CodeMirror
        theme={theme}
        value={currentCode}
        onChange={(value: string, e: any) => {
          setCurrentCode(value);
        }}
        height="100%"
        extensions={[
          lang,
          indentUnit.of("        "),
          EditorState.tabSize.of(8),
          EditorState.changeFilter.of(() => true),
        ]}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      />
    </CodeEditorBox>
  );
};

export default CodeEditor;
