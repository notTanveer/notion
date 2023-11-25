"use client";
import { useAppState } from "@/lib/providers/state-provider";
import { File, Folder, workspace } from "@/lib/supabase/supabase.types";
import React, { useCallback, useState } from "react";
import "quill/dist/quill.snow.css";

interface QuillEditorProps {
  dirDetails: File | Folder | workspace;
  fileId: string;
  dirType: "file" | "folder" | "workspace";
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  dirDetails,
  fileId,
  dirType,
}) => {
  const { state, workspaceId, folderId, dispatch } = useAppState();
  const [quill, setQuill] = useState<any>(null);

  var TOOLBAR_OPTIONS = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const wrapperRef = useCallback(async (wrapper: any) => {
    if (typeof window === "undefined" || !wrapper) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const Quill = (await import('quill')).default;
    //WIP cursors
    const q = new Quill(editor, {
      theme: "snow",
      modules: {
        toolbar: TOOLBAR_OPTIONS,
        // cursors
      },
    });
    setQuill(q);
  }, []);

  return (
    <>
      <div>
        { ' ' }
        <div id="container" ref={wrapperRef} className="max-w-[800px]"></div>
      </div>
    </>
  );
};

export default QuillEditor;
