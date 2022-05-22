import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.country),
    temperature: 0.6,
    max_tokens: 200,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(country) {
  const capitalizedCountry =
    country[0].toUpperCase() + country.slice(1).toLowerCase();

  return `Write a description of a country based on these inputs.

  Name: Australia
  Description: Australia is a country located in the southern hemisphere. It is the sixth-largest country by total area and has the world's tenth-largest population. Australia is bordered by Indonesia and Papua New Guinea to the north, the Indian Ocean to the east, Tasmania and New Zealand to the south, and South Africa to the west.
  Name: Scotland
  Description: Scotland is a country located in western Europe. It has a population of just over 5 million and an area of just over 6,000 square miles. Scotland is bordered by England to the south and west, and by the North Sea to the north.
  Name:${capitalizedCountry}
  Description:`;
}
