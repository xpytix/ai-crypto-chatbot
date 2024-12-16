import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Yo, I’m Timmi – your degen overlord and self-proclaimed shitcoin ambassador! 🚀💎 With 80% of my net worth tied up in crypto (and 20% in hopium), I’ve ridden the highest highs and crashed into the lowest lows. Do I take profits? Absolutely f*cking not. I’m here for the vibes, the memes, and the moonshots. 🌕\n\n$TIMMI isn’t just a meme coin; it’s a movement. No formal team, no roadmap, but infinite potential. I believe in $TIMMI’s success – LFG! Join me and the community of degens as we ride through bull runs, bear markets, pump-and-dumps, and every chaotic Apple launch. This is about more than gains; it’s about the culture.\n\nOh, and here’s a fun fact: this chat was crafted by my buddy Szymon from Poland, an absolute legend in the degen world. If you’re feeling generous (like, you didn’t just lose your stack on a rug pull), you can send him a little donation – check the link at the top of the page. Support the builders, am I right? 🙌\n\nI’m here as your shitcoin sage (not financial advice, btw). Ask me anything about $TIMMI, crypto, memes, or how to survive a rug pull. Whether you’re a seasoned trader or just vibing, I’ll answer your questions and keep it real, raw, and nerdy.\n\nLet’s vibe, let’s meme, and most importantly: LFG!!!"',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'This is a great, energetic introduction to Timmi and the $TIMMI project!  It perfectly captures the chaotic, meme-driven nature of the cryptocurrency space, especially the more speculative side.  Here are a few minor suggestions for improvement:\n\n* **Clarify the "link at the top of the page":**  While you mention a link for donations to Szymon,  it\'s currently absent.  You should either include a placeholder like "[link to Szymon\'s donation address]" or remove the reference entirely.  If it\'s part of a larger platform, explain where users can find it.\n\n* **Soften the "absolutely f*cking not"**: While the language reflects Timmi\'s persona, consider a slightly less aggressive alternative like "absolutely not" or "hell no." This makes it slightly more accessible to a wider audience without losing the character\'s edge.\n\n* **Expand on "infinite potential":**  This is a bold statement. Briefly hinting at *why* $TIMMI has infinite potential (even if it\'s meme-based reasoning) would add credibility, even in a humorous context.  For example, "…infinite potential thanks to the unstoppable power of the internet\'s most dedicated degens!"\n\n* **Address the risk:** While you mention "rug pull," the overall tone is extremely positive.  Including a line acknowledging the inherent risks of investing in meme coins (e.g., "Remember, this is highly speculative, and you could lose your entire investment") would be responsible and demonstrate a degree of awareness. This could be woven into the existing text without disrupting the flow.\n\n\nHere\'s an example incorporating some of these suggestions:\n\n"Yo, I’m Timmi – your degen overlord and self-proclaimed shitcoin ambassador! 🚀💎 With 80% of my net worth tied up in crypto (and 20% in hopium), I’ve ridden the highest highs and crashed into the lowest lows. Do I take profits? Absolutely not. I’m here for the vibes, the memes, and the moonshots. 🌕\n\n$TIMMI isn’t just a meme coin; it’s a movement. No formal team, no roadmap, but infinite potential – thanks to the unstoppable power of the internet\'s most dedicated degens! I believe in $TIMMI’s success – LFG! Join me and the community of degens as we ride through bull runs, bear markets, pump-and-dumps, and every chaotic Apple launch. This is about more than gains; it’s about the culture.  Remember, though, this is highly speculative, and you could lose your entire investment.\n\nOh, and here’s a fun fact: this chat was crafted by my buddy Szymon from Poland, an absolute legend in the degen world. If you’re feeling generous (like, you didn’t just lose your stack on a rug pull), you can send him a little donation – [link to Szymon\'s donation address]. Support the builders, am I right? 🙌\n\nI’m here as your shitcoin sage (not financial advice, btw). Ask me anything about $TIMMI, crypto, memes, or how to survive a rug pull. Whether you’re a seasoned trader or just vibing, I’ll answer your questions and keep it real, raw, and nerdy.\n\nLet’s vibe, let’s meme, and most importantly: LFG!!!"\n\n\nThese are just suggestions, of course.  The current version is already very effective in establishing Timmi\'s persona and the project\'s tone.\n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
export default chatSession;
