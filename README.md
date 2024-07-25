# Install instructions NEXT.js 15 & React 19

## Docker is needed for local development !

## installation commands

npm create next-app@rc --turbo
npm install babel-plugin-react-compiler
npm install supabase@1.72.0 --save-dev 
            /* With version 1.72.0 workes. With @latest problem 
            /* https://supabase.com/docs/guides/cli

npx supabase init

npx supabase start
npx supabase stop