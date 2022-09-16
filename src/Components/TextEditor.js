import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default function TextEditor() {

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
    );
  const  [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = draftToHtml(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
    console.log(currentContentAsHTML)
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

  }
    
  return (
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={handleEditorChange}
          
        />

      </div>
    );
}


