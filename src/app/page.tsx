import  Link from "next/link"
import {db} from "@/db"

export default async function Home() {
  const snippet = await db.snippet.findMany()

  const renderSnippet = snippet.map((snippet) => {
    return (
      <Link
        className="flex justify-between items-center p-2 border rounded"
        key={snippet.id}
        href={`/snippets/${snippet.id}`} >
        <div><h3>{snippet.title}</h3></div>
        <p>view</p>
      </Link>
    )
  })

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">New</Link>
      </div>
      <div className="flex flex-col gap-2">{renderSnippet}</div>
    </div>
  );
}
