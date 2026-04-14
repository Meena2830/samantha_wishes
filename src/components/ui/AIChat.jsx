import { useState } from "react";

const quickPrompts = [
  "Write a strong birthday wish",
  "Give me a stylish caption",
  "Suggest a proud memory quote",
];

function buildPersonalWish(name, tone) {
  const recipient = name.trim() || "someone special";

  if (tone === "playful") {
    return `Happy Birthday, ${recipient}. May your day be packed with laughter, good people, proud moments, and the kind of energy that makes every memory feel unforgettable.`;
  }

  if (tone === "elegant") {
    return `Happy Birthday, ${recipient}. Wishing you a year of meaningful wins, quiet confidence, real respect, and a life that keeps unfolding in strong and beautiful ways.`;
  }

  return `Happy Birthday, ${recipient}. May this year bring you peace, progress, strong health, and new memories that remind you how far you can go.`;
}

function getReply(message) {
  const lower = message.toLowerCase();

  if (lower.includes("caption")) {
    return "A sharp birthday moment filled with confidence, style, and memories worth keeping.";
  }

  if (lower.includes("quote") || lower.includes("memory")) {
    return "Some men leave a mark in every room they enter. The best memories simply prove it.";
  }

  if (lower.includes("birthday") || lower.includes("wish")) {
    return "Happy Birthday, Samantha. May this year arrive with steady success, deep peace, and the kind of respect you have truly earned.";
  }

  return "I can help with birthday wishes for him, captions, memory quotes, or polishing the tone of this tribute page.";
}

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "I'm your birthday writing co-pilot. Ask for a wish for him, a caption, or a memory quote.",
    },
  ]);
  const [draft, setDraft] = useState("");
  const [recipient, setRecipient] = useState("Samantha");
  const [tone, setTone] = useState("dreamy");

  const submitMessage = (value) => {
    const text = value.trim();

    if (!text) {
      return;
    }

    const baseId = Date.now() + Math.floor(Math.random() * 1000);
    const userMessage = { id: baseId, role: "user", text };
    const assistantMessage = {
      id: baseId + 1,
      role: "assistant",
      text: getReply(text),
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setDraft("");
  };

  const generatePersonalMessage = () => {
    const baseId = Date.now() + Math.floor(Math.random() * 1000);

    setMessages((current) => [
      ...current,
      {
        id: baseId,
        role: "user",
        text: `Generate a ${tone} birthday wish for ${recipient}.`,
      },
      {
        id: baseId + 1,
        role: "assistant",
        text: buildPersonalWish(recipient, tone),
      },
    ]);
  };

  return (
    <aside className="chat-shell glass-panel">
      <div className="chat-header">
        <div>
          <strong>Birthday AI</strong>
          <span>Mens birthday wishes, captions, and tribute lines</span>
        </div>
        <span className="chat-status" />
      </div>

      <div className="chat-generator glass-panel">
        <input
          className="chat-mini-input"
          value={recipient}
          onChange={(event) => setRecipient(event.target.value)}
          placeholder="Recipient name"
        />
        <select
          className="chat-mini-input chat-mini-select"
          value={tone}
          onChange={(event) => setTone(event.target.value)}
        >
          <option value="dreamy">Dreamy</option>
          <option value="elegant">Elegant</option>
          <option value="playful">Playful</option>
        </select>
        <button
          type="button"
          className="chat-mini-button"
          onClick={generatePersonalMessage}
        >
          Generate
        </button>
      </div>

      <div className="chat-log">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble ${message.role === "user" ? "user" : "assistant"}`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="chat-prompt-row">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="chat-prompt"
            onClick={() => submitMessage(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>

      <form
        className="chat-form"
        onSubmit={(event) => {
          event.preventDefault();
          submitMessage(draft);
        }}
      >
        <input
          className="chat-input"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ask for a wish or caption..."
        />
        <button type="submit" className="pill-button primary chat-submit">
          →
        </button>
      </form>
    </aside>
  );
}
