import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  organization: process.env.NEXT_PUBLIC_APP_OPENAI_ORG_ID,
  dangerouslyAllowBrowser: true,
});
