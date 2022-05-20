import { useState } from "react";
// import api from "../api/generate"

// import React, { Component } from "react";
// import { Form, Button, Card } from "react-bootstrap";
// const { Configuration, OpenAIApi } = require("openai");
// require("dotenv").config();

export default function Prompt() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("./api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setUserInput("");
  }

  return (
    <div>
      <h1> Header here?</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Ask a question about history"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      console.log(userInput)
    </div>
  );
}

// class Prompt extends Component {
//   constructor() {
//     super();
//     this.state = {
//       heading: "AI response here...",
//       response: "...coming in a moment",
//     };
//   }

//   onFormSubmit = (e) => {
//     e.preventDefault();

//     const promptData = new PromptData(e.target),
//       promptDataObj = Object.promptEntries(promptData.entries());
//     console.log(promptDataObj.userPrompt);

//     const configuration = new Configuration({
//       apiKey: "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",
//       // apiKey: process.env.OPENAI_API_KEY,
//     });
//     const openai = new OpenAIApi(configuration);

//     openai
//       .createCompletion("text-curie-001", {
//         prompt:
//           "What was the first empire in history?\n\nThe first empire in history was the Assyrian Empire.\n\nWho succeeded them?\n\nThe succeeding empire was the Persian Empire.\n\nNot the Babylonians?\n\nThe Babylonians did not succeed the Assyrian Empire, but were a predecessor of that empire.\n\nDid Babylon have an empire?\n\nNo, Babylon did not have an empire.\n\nWhat about Egypt?\n\nEgypt was not an empire, but had a long history of being an influential culture and power in the region.\n\nWhy was Assyria an empire?\n\nThe Assyrian Empire was an empire because it was a large and powerful kingdom that controlled a large area of the world.",
//         temperature: 0.7,
//         max_tokens: 200,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//       })
//       .then((response) => {
//         this.setState({
//           heading: `AI answers from your quetions are: ${promptDataObj.userPrompt}`,
//           response: `${response.data.choices[0].text}`,
//         });
//       });

//     // this.setState({
//     //   heading: `Ask our AI about some history!`
//     //   response: `The response from our AI will be appear after you submit your question.`
//     // })
//   };

//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.onFormSubmit}>
//           <Form.Group className="mb-3" controlId="formPrompt">
//             <Form.Label>What would you like to learn?</Form.Label>
//             <Form.Control
//               type="text"
//               name="userPrompt"
//               placeholder="Enter your question here"
//             />
//             <Form.Text className="text-muted">
//               See what you can learn from an AI
//               {/* Change this to text input and make the box larger? */}
//             </Form.Text>
//           </Form.Group>
//           <Button variant="primary" size="lg" type="submit">
//             Learn!
//           </Button>
//         </Form>

//         <Card>
//           <Card.Header>Saved Prompts?</Card.Header>
//           <Card.Body>
//             <Card.Title>{this.state.heading}</Card.Title>
//             <Card.Text>{this.state.response}</Card.Text>
//           </Card.Body>
//         </Card>
//       </div>
//     );
//   }
// }

// export default Prompt;
