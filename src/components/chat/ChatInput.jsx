import { useState } from 'react';
import { Send } from 'lucide-react';

function ChatInput({ onSend, disabled = false }) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = input.trim();

    if (!message || disabled) {
      return;
    }

    onSend(message);
    setInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask a question about your data..."
        disabled={disabled}
        rows={1}
      />

      <button
        type="submit"
        disabled={!input.trim() || disabled}
        className="send-button"
      >
        <Send size={18} />
      </button>
    </form>
  );
}

export default ChatInput;