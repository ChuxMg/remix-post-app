import { Link } from "@remix-run/react";

import NewNoteForm from "~/components/NewNoteForm";

export default function NotesPage() {
  return (
    <main>
      <NewNoteForm />
      <Link to="/">
        <h1 className="text">Back to Home Page</h1>
      </Link>
    </main>
  );
}
