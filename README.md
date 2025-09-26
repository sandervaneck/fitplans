# Fitplans

Fitplans is a Next.js application that helps athletes and fitness enthusiasts generate personalised nutrition, workout, and tennis practice plans. By combining structured forms with AI generated recommendations, the app quickly produces clear, goal oriented plans based on a user's age, weight, experience level, and training focus.

## Features
- **Goal driven plans:** Choose between nutrition, general workout, or tennis specific plans directly from the landing page.
- **AI assisted recommendations:** Uses OpenAI to create detailed daily schedules and meal suggestions tailored to the provided inputs.
- **Responsive UI:** Built with Material UI and custom themes to deliver a polished experience on both desktop and mobile devices.

## Usage
1. Create a `.env.local` file in the project root and provide the required API credentials:
   ```bash
   NEXT_PUBLIC_OPENAI_API_KEY=your-openai-key
   NEXT_PUBLIC_APP_OPENAI_ORG_ID=your-openai-org-id
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) and generate a meal plan, workout plan, or tennis plan.

## Project structure
- `app/` – Application routes, components, and themed UI logic for plan builders.
- `app/actions/` – Server actions that call OpenAI and format plan responses.
- `app/openai/` – OpenAI client configuration and helper functions for AI prompts.
- `app/utils/` – Shared utilities for meal, workout, and tennis planners.

## Additional resources
- [Next.js Documentation](https://nextjs.org/docs) – Learn more about the framework powering Fitplans.
- [OpenAI Platform](https://platform.openai.com/) – Manage API keys and usage for the AI generated plans.
