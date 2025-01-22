This is a chat interface that simulates conversation between customer and AI assistant.

## Getting Started

First, install the dependencies:

```
npm install

```

Run the local server:

```
npm run dev;

```

Open [http://localhost:3000](http://localhost:3000)

# Implementation Process for Chat Feature

## 1. Requirements Gathering

- Identify the key functionalities required:
  - Message input field for customers.
  - "Send" button to submit messages.
  - Conversational message display for customer and AI messages.
  - Integration with OpenAI API or a mock backend for AI responses.

---

## 3. Implementing Message Input

- Rendered a `textarea` component from shadcn:
  - Text input for users to type messages.
  - A "Send" button to trigger message submission.
  - Handled input change and submit msg with server actions.

---

## 4. Implementing Chat Display

- ChatDisplay with different styling:
  - Display messages with different styles for customer and AI responses.

---

## 5. AI Response Simulation

- Create `action/index.ts` to integrate mock responses using server actions.
