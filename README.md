# Next.js 15 Project Setup Guide
A comprehensive guide for setting up a modern web application with Next.js 15, React 19, Supabase, Next-intl, and Material-UI.

## Main points you can explore:

- Run Supabase DB & Auth locally for development
- Setting up and using Material UI in Next.js 15 (still legacy version)
- How Next-intl has been set up properly in combination with Next.js 15 & Supabase Auth, especially in the middleware.ts
- How to use the new async generateMetadata function to generate metadata dynamically for multilingual pages' SEO
- New dynamic 'await' of params and searchParams
- New useActionState cool hook from React 19
- Partial prerendering (PPR)
- How to use 'generateStaticParams' to statically generate routes at build time instead of on-demand at request time (quite useful when using localization packages as Next-intl, and all the app is nested in a dynamic route as [locale])


## Prerequisites
- Docker (Required for local development)
- Node.js and npm

## Quick Start
 - clone the project from github and install

```bash
# Install dependencies
npm install --legacy-peer-deps
```

## Step-by-Step Installation Guide

### 1. Create Next.js Project
Choose one of the following methods:
```bash
# Method 1: Create new project with Turbo
npm create next-app@rc --turbo

# Method 2: Upgrade existing project
npx @next/codemod@canary upgrade latest
# Or manually:
npm install next@canary react@rc react-dom@rc
```

### 2. Install Core Dependencies
```bash
# Install required packages
npm install babel-plugin-react-compiler
npm install server-only  # Note: Don't use in app/page.tsx
```

### 3. Supabase Setup

#### Installation
```bash
npm install supabase --save-dev
npx supabase init
```

#### Local Development
```bash
# Start Supabase containers (use this temporary working version)
npx supabase start

# Database operations
npx supabase db reset  # Initialize database (Warning: wipes existing data)
npx supabase migration new [migration_name]
npx supabase migration up  # Apply migrations to local DB

# Cloud operations
npx supabase link  # Link cloud DB with local project
npx supabase login
npx supabase db push  # Push migrations to remote DB

# Container management
npx supabase stop  # Stop Docker containers
```

#### Environment Setup
Create `.env` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Authentication & UI Dependencies
```bash
# Auth packages
npm install @supabase/supabase-js
npm install @supabase/ssr
npm install zod

# Material-UI packages
npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
npm install @mui/material-nextjs @emotion/cache --legacy-peer-deps
npm install @fontsource/roboto --legacy-peer-deps

# Internationalization
npm install next-intl@canary --legacy-peer-deps
```

## Important Notes
- For Supabase auth with Next.js, refer to the [middleware example](https://github.com/vercel/next.js/blob/canary/examples/with-supabase/utils/supabase/middleware.ts)
- For Supabase with Next-intl integration, check the [documentation](https://next-intl-docs.vercel.app/docs/routing/middleware)
- Async metadata changes in Next.js 15 are documented [here](https://nextjs.org/docs/app/building-your-application/upgrading/version-15#params--searchparams)

## Alternative Setup Methods
You can install Supabase with Next.js template separately:
```bash
npm create next-app@latest with-supabase
```
Note: This creates a Next.js 14 project. You can copy needed auth components and flow to your Next.js 15 project.

## Useful Resources
- [Next.js 15 with next-intl Tutorial](https://www.youtube.com/watch?v=2Jh9olZXBfw)
- [Installing Docker on Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Next.js Project Architecture Guide](https://blog.logrocket.com/structure-scalable-next-js-project-architecture/)
- [ChatGPT Your Files Example](https://github.com/supabase-community/chatgpt-your-files/blob/main/README.md)
- [Supabase CLI Type Generation](https://supabase.com/docs/reference/cli/supabase-gen-type)
- [Material-UI Joy UI Next.js TypeScript Example](https://github.com/mui/material-ui/tree/master/examples/joy-ui-nextjs-ts)
- [Zod Documentation](https://zod.dev/)
- [Next-intl Middleware Documentation](https://next-intl-docs.vercel.app/docs/routing/middleware)
