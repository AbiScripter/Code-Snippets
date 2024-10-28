import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

type SnippetEditPageProps = {
  params: {
    id: string;
  };
};

export default async function SnippetEditPage({
  params,
}: SnippetEditPageProps) {
  const id = parseInt(params.id);
  let snippet;

  try {
    snippet = await db.snippet.findFirst({
      where: { id },
    });
  } catch (error) {
    console.error("Prisma error:", error);
    return notFound();
  }

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
