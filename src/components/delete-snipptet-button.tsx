"use client";

import * as actions from "@/actions";

export default function DeleteSnippetButton({ id }: { id: number }) {
  return (
    <button
      onClick={() => actions.deleteSnippet(id)}
      className="p-2 border rounded"
    >
      Delete
    </button>
  );
}
