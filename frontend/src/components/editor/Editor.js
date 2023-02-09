import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";

const Editor = ({ setPostData, mode, data, setModifyData }) => {
  const customUploadAdapter = loader => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const data = new FormData();
          loader.file.then(file => {
            data.append("name", file.name);
            data.append("file", file);
            axios({
              method: "post",
              url: "http://localhost:4000/api/upload",
              data,
            }).then(res => {
              resolve({
                default: `http://localhost:4000/images/${res.data.filename}`,
              });
            });
          });
        });
      },
    };
  };
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = loader => {
      return customUploadAdapter(loader);
    };
  }
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        extraPlugins: [uploadPlugin],
      }}
      data={mode === "modify" ? data : null}
      onChange={(e, editor) => {
        const data = editor.getData();
        mode === "modify" ? setModifyData(data) : setPostData(data);
        console.log(data);
      }}
    />
  );
};

export default Editor;
