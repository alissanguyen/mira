import type { Note } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Note } from "@prisma/client";

export function getNote() {
  return prisma.note.findMany();
}

export function createNote({ description }: { description: string }) {
  return prisma.note.create({
    data: {
      description,
    },
  });
}

export function deleteNote({ id }: Pick<Note, "id">) {
  return prisma.note.deleteMany({
    where: { id },
  });
}
