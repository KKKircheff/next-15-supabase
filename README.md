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

npx supabase db reset
        *Important step to initialaize your base* - if run later it wipes out the db and apply all migrations  

npx supabase migration new [migration_name] 

npx supabase migration up
            /* This will set the migration in local db      

npx supabase link
            /* Thi links cloud DB with the local Supabase project
npx supabase login

npx supabase stop
              /* stops containers in docker           
npx supabase upgrade
            /* This will upgrade Supabase CLI to the latest version             

npx supabase db diff --use-migra -f initial_schema

npx supabase db push 
            /* This will set the migration in remote db  
more info *https://supabase.com/docs/reference/cli/supabase-gen-types*

            /* I installed in separate folder outside the proect supabase with next.js template like:
            npm create next-app@lates with-supabase
            /* it creates next.js 14 project
            /* I just use auth components and flow in next 15 project ( copy needed) 
            /* then deleted next.js 14 project       
            /* Other possible installation templates with *npx supabase bootstrap*
            /* create .env file in the root folder an paste inside:
                NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
                NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
      


                          
## auth

npm install @supabase/supabase-js
npm install @supabase/ssr

## Latest Supabase with NextJs Auth changes on:
        /* https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=environment&environment=middleware&queryGroups=package-manager&package-manager=pnpm
        /* then run dev server in new terminal with 'npm run dev' - Ready!!!      

## UseFull Links:

https://blog.logrocket.com/structure-scalable-next-js-project-architecture/

https://github.com/supabase-community/chatgpt-your-files/blob/main/README.md

https://supabase.com/docs/reference/cli/supabase-gen-type