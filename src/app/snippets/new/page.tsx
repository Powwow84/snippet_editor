'use client'

import { redirect } from 'next/navigation'
import { db } from "@/db"
import * as actions from "@/actions"
import { useFormState } from 'react-dom';
import { use } from 'react';

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {message: ""})
    return (
      <form action={action}>
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border rounded p-2 w-full"
              id="title"
            />
          </div>

          <div className="flex gap-4">
            <label className="w-12" htmlFor="Code">
              Code
            </label>
            <textarea
              name="Code"
              className="border rounded p-2 w-full"
              id="Code"
            />
          </div>
          {formState.message ? <div className='my-2 p-2 bg-red'>{formState.message}</div> : null}
          <button type="submit" className="rounded p-2 bg-blue-200">
            Create
          </button>
        </div>
      </form>
    );
}