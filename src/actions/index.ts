"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id: id },
    data: { code: code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id: id },
  });

  redirect("/");
}

export async function createSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  //create a new record in the database
  const snippet = await db.snippet.create({
    data: {
      title: title,
      code: code,
    },
  });

  console.log(snippet);

  //Redirect the user back to the root route
  redirect("/");
}
