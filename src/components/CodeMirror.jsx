import React, { useEffect, useRef } from "react";

import { useCodeMirror } from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { historyField } from "@codemirror/commands";
import { githubDark } from "@uiw/codemirror-theme-github";

import "./CodeMirror.css";


export default function CodeMirrorWidget({ subject = "codeMirror", show = false, serialize = true }) {
  console.log(serialize)
  const editor = useRef();
  const extensions = [markdown({ base: markdownLanguage, codeLanguages: languages })];
  const stateFields = { history: historyField };
  const serializedState = localStorage.getItem(`${subject}-serialized`);  
  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions: extensions,
    theme: githubDark,
    value: subject && serialize ? localStorage.getItem(subject) || "" : "",
    initialState: serialize && serializedState
      ? { json: JSON.parse(serializedState || ""), fields: stateFields }
      : undefined,
    onChange: (value, viewUpdate) => {
      localStorage.setItem(subject, value);
      const state = viewUpdate.state.toJSON(stateFields);
      localStorage.setItem(`${subject}-serialized`, JSON.stringify(state));
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
      <div id="CodeMirror" style={{ display: show ? "block" : "none" }} ref={editor} />
    </>
  );
}
