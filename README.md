# Install instructions NEXT.js 15 & React 19

## Docker instalation is needed for local development !!! Install it First

## installation commands

npm create next-app@rc --turbo
npm install babel-plugin-react-compiler
npm install supabase --save-dev 
npx supabase init
npx supabase@beta start
            /* start containers in Docker - *temp* working version otherwise crash

npx supabase start 
            /* Start containers in Docker. *Currently not working. Use upper start option*
            /* copy API and ANON keys that you will see in your terminal after supabase starts successfuly
            /* paste the values in .env for the corresponding keys
            /* for embeddings enable *vector extension*

npx supabase link
            /* This will give the links to Supabase project
npx supabase login

npx supabase stop
              /* stops containers in docker           
npx supabase upgrade
            /* This will upgrade Supabase CLI to the latest version                 
npx supabase migration up
            /* This will set the migration in local db                
npx supabase db push 
            /* This will set the migration in remote db  
npx supabase migration new [migration_name]             






            /* I installed in separate folder outside the proect supabase with next.js template like:
            npm create next-app@lates with-supabase
            /* it creates next.js 14 project
            /* I just use auth components and flow in next 15 project ( copy needed) 
            /* then deleted next.js 14 project       
            /* create .env file in the root folder an paste inside:
                NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
                NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
      


                          
## auth

npm install @supabase/supabase-js
npm install @supabase/ssr

## Latest Supabase with NextJs Auth changes on:
        /* https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=environment&environment=middleware&queryGroups=package-manager&package-manager=pnpm
        /* then run dev server in new terminal with 'npm run dev' - Ready!!!      
