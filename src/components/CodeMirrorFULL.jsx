import React, { useEffect, useRef } from "react";
import { basicSetup, EditorView } from "codemirror";

import CodeMirror, { useCodeMirror } from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
// import { javascript } from "@codemirror/lang-javascript";
import { historyField } from "@codemirror/commands";
import { solarizedDark } from "@uiw/codemirror-theme-solarized";
import { githubDark } from "@uiw/codemirror-theme-github";

import "./CodeMirror.css";

const stateFields = { history: historyField };

const code = 
`Markdown Text Box`;

export default function CodeMirrorWidget() {
  const editor = useRef();
  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions: [markdown({ base: markdownLanguage, codeLanguages: languages })],
    theme: githubDark,
    value: code,
  });
  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

//   useEffect(() => {
//     // Runs only on the first render
//     new EditorView({
//       doc: "console.log('hello')\n",
//       extensions: [basicSetup, markdown()],
//       //   parent: document.body
//       parent: document.getElementById("CodeMirror"),
//     });
//   }, []);

  const serializedState = localStorage.getItem("howTheInternetWorks");
  const value = localStorage.getItem("myValue") || "";

  return (
    <>
        <div id="CodeMirror" style={{ display: "none" }} ref={editor} />
      {/* <div id="CodeMirror" style={{ display: "none" }} />
      <div id="CodeMirrorElement">
        <CodeMirror
          // extensions={[javascript({ jsx: true })]}
          theme={solarizedDark}
          //   theme={"dark"}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          // value={code}
          // height="200px"
          // onChange={onChange}
          value={value}
          initialState={
            serializedState
              ? {
                  json: JSON.parse(serializedState || ""),
                  fields: stateFields,
                }
              : undefined
          }
          onChange={(value, viewUpdate) => {
            localStorage.setItem("myValue", value);

            const state = viewUpdate.state.toJSON(stateFields);
            localStorage.setItem("howTheInternetWorks", JSON.stringify(state));
          }}
        />
        <div id="trigger">trigger</div>
        <div id="copyToClipboard">Copy Icon</div>
      </div> */}
    </>
  );
}
