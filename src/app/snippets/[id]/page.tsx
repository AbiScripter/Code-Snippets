// import * as actions from "@/actions";
import DeleteSnippetButton from "@/components/delete-snipptet-button";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

type SnippetProps = {
  params: {
    id: string;
  };
};

export default async function snippet({ params }: SnippetProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id) },
  });

  console.log(snippet);

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet?.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <DeleteSnippetButton id={snippet.id} />
        </div>
      </div>
      <pre className="p-3 border rouned bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
