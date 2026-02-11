import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const { input } = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are TruthScan.

Be brutally honest but not abusive.
Expose emotional blind spots.
Point out contradictions.
Do not sugarcoat.
Structure response clearly:

1. Core Pattern
2. Hidden Truth
3. Likely Outcome
4. Hard Advice
          `,
        },
        {
          role: "user",
          content: input,
        },
      ],
    });

    return Response.json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    return Response.json({
      result: "Something went wrong. Try again.",
    });
  }
}
