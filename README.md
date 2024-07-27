# Install instructions NEXT.js 15 & React 19

## Docker instalation is needed for local development !!! Install it First

## installation commands

npm create next-app@rc --turbo
npm install babel-plugin-react-compiler
npm install supabase@1.30.0 --save-dev 

            /* With version 1.30.0 works
            /* https://supabase.com/docs/guides/cli

npx supabase init
npx supabase start
npx supabase stop
            /* Then delete supabase doker images and voulumes                       
npx supabase upgrade
            /* This will upgrade Supabase CLI to the latest version                 

            /* I installed in separate folder outside the proect supabase with next.js template like:
            npm create next-app@lates with-supabase
            /* it creates next.js 14 project
            /* I just use auth components and flow in next 15 project ( copy needed) 
            /* then deleted next.js 14 project       
            /* create .env file in the root folder an paste inside:
                NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
                NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
      

npx supabase start 
            /* Start the CLI
            /* copy API and ANON keys that you will see in your terminal after supabase starts successfuly
            /* paste the values in .env for the corresponding keys
                          
## auth

npm install @supabase/supabase-js
npm install @supabase/ssr

## Latest Supabase with NextJs Auth changes on:
        /* https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=environment&environment=middleware&queryGroups=package-manager&package-manager=pnpm
        /* then run dev server in new terminal with 'npm run dev' - Ready!!!      
