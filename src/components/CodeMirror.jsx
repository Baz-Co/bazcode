import React, { useEffect, useRef } from "react";

import { useCodeMirror } from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { historyField } from "@codemirror/commands";
import { githubDark } from "@uiw/codemirror-theme-github";

import "./CodeMirror.css";

const extensions = [markdown({ base: markdownLanguage, codeLanguages: languages })];
const stateFields = { history: historyField };
const serializedState = localStorage.getItem("howTheInternetWorks");

export default function CodeMirrorWidget() {
  const editor = useRef();
  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions: extensions,
    theme: githubDark,
    value: localStorage.getItem("myValue") || "",
    initialState: serializedState
      ? { json: JSON.parse(serializedState || ""), fields: stateFields }
      : undefined,
    onChange: (value, viewUpdate) => {
      localStorage.setItem("myValue", value);
      const state = viewUpdate.state.toJSON(stateFields);
      localStorage.setItem("howTheInternetWorks", JSON.stringify(state));
    },
    indentWithTab: true,
    autoFocus: true,
    placeholder: 'Markdown Text Box'
  });
  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return (
    <>
      <div id="copyToClipboard">Copy To Clipboard</div>
      <div id="CodeMirror" style={{ display: "none" }} ref={editor} />
    </>
  );
}
