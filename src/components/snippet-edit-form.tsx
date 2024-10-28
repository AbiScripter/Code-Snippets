// "use client";

// import type { Snippet } from "@prisma/client";
// import { Editor } from "@monaco-editor/react";
// import { useState } from "react";
// // import { editSnippet  } from "@/actions";
// import * as actions from "@/actions";

// type SnippetEditFormProps = {
//   snippet: Snippet;
// };

// export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
//   const [code, setCode] = useState(snippet.code);

//   const handleEditorChange = (value: string = "") => {
//     setCode(value);
//   };

//   const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

//   return (
//     <div>
//       <Editor
//         height="40vh"
//         theme="vs-dark"
//         language="javascript"
//         defaultValue={snippet.code}
//         options={{ minimap: { enabled: false } }}
//         onChange={handleEditorChange}
//       />

//       <form action={editSnippetAction}>
//         <button type="submit" className="p-2 border rounded">
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { startTransition, useState } from "react";
// import { editSnippet  } from "@/actions";
import * as actions from "@/actions";

type SnippetEditFormProps = {
  snippet: Snippet;
};

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const handleSave = () => {
    startTransition(async () => {
      await actions.editSnippet(snippet.id, code);
    });
  };

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />

      <button onClick={handleSave} className="p-2 border rounded">
        Save
      </button>

      {/* <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form> */}
    </div>
  );
}
