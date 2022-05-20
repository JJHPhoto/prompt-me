const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.user),
    temperature: 0.7,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(user) {
  return `"What was the first empire in history?\n\nThe first empire in history was the Assyrian Empire.\n\nWho succeeded them?\n\nThe succeeding empire was the Persian Empire.\n\nNot the Babylonians?\n\nThe Babylonians did not succeed the Assyrian Empire, but were a predecessor of that empire.\n\nDid Babylon have an empire?\n\nNo, Babylon did not have an empire.\n\nWhat about Egypt?\n\nEgypt was not an empire, but had a long history of being an influential culture and power in the region.\n\nWhy was Assyria an empire?\n\nThe Assyrian Empire was an empire because it was a large and powerful kingdom that controlled a large area of the world.",`;
}

// const response = await openai.createCompletion("text-curie-001", {
//   prompt:
//     "What was the first empire in history?\n\nThe first empire in history was the Assyrian Empire.\n\nWho succeeded them?\n\nThe succeeding empire was the Persian Empire.\n\nNot the Babylonians?\n\nThe Babylonians did not succeed the Assyrian Empire, but were a predecessor of that empire.\n\nDid Babylon have an empire?\n\nNo, Babylon did not have an empire.\n\nWhat about Egypt?\n\nEgypt was not an empire, but had a long history of being an influential culture and power in the region.\n\nWhy was Assyria an empire?\n\nThe Assyrian Empire was an empire because it was a large and powerful kingdom that controlled a large area of the world.",
//   temperature: 0.7,
//   max_tokens: 200,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });
