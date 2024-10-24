import Step from "./Step";
import Code from "./Code";

const create = `
create table notes (
  id bigserial primary key,
  title text
);

insert into notes(title)
values
  ('Today I created a Supabase project.'),
  ('I added some data and queried it from Next.js.'),
  ('It was awesome!');
`.trim();

const server = `
import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data: notes } = await supabase.from('notes').select()

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim();

const client = `
'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim();

export default function FetchDataSteps() {
    return (
        <ol style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Step title="Create some tables and insert some data">
                <p>
                    Head over to the{" "}
                    <a
                        href="https://supabase.com/dashboard/project/_/editor"
                        style={{ fontWeight: 'bold', color: 'rgba(31, 41, 55, 0.8)', textDecoration: 'underline' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Table Editor
                    </a>{" "}
                    for your Supabase project to create a table and insert some example
                    data. If you're stuck for creativity, you can copy and paste the
                    following into the{" "}
                    <a
                        href="https://supabase.com/dashboard/project/_/sql/new"
                        style={{ fontWeight: 'bold', color: 'rgba(31, 41, 55, 0.8)', textDecoration: 'underline' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        SQL Editor
                    </a>{" "}
                    and click RUN!
                </p>
                <Code code={create} />
            </Step>

            <Step title="Query Supabase data from Next.js">
                <p>
                    To create a Supabase client and query data from an Async Server
                    Component, create a new page.tsx file at{" "}
                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '0.375rem', backgroundColor: 'rgba(31, 41, 55, 0.2)', color: 'rgba(31, 41, 55, 0.8)' }}>
                        /app/notes/page.tsx
                    </span>{" "}
                    and add the following.
                </p>
                <Code code={server} />
                <p>Alternatively, you can use a Client Component.</p>
                <Code code={client} />
            </Step>

            <Step title="Build in a weekend and scale to millions!">
                <p>You're ready to launch your product to the world! 🚀</p>
            </Step>
        </ol>
    );
}

