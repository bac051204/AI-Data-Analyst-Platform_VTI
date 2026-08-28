import { useState } from 'react';
import { Database, Sparkles } from 'lucide-react';

import ChatMessage from '../components/chat/ChatMessage';
import ChatInput from '../components/chat/ChatInput';

function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'ai',
      content:
        'Xin chào! Tôi là AI Data Analyst. Bạn có thể hỏi tôi về dữ liệu của mình.',
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: message,
    };

    setMessages((previous) => [...previous, userMessage]);

    setIsLoading(true);

    // Mock AI response.
    // Sau này thay bằng API Backend.
    setTimeout(() => {
      const aiMessage = {
  id: Date.now() + 1,
  role: 'ai',
  content:
    'Dựa trên dữ liệu, doanh thu tháng 5 đang cao nhất với 28.000.000 ₫.',
  chartType: 'line',
  data: [
    {
      month: 'Jan',
      revenue: 12000000,
    },
    {
      month: 'Feb',
      revenue: 18000000,
    },
    {
      month: 'Mar',
      revenue: 15000000,
    },
    {
      month: 'Apr',
      revenue: 22000000,
    },
    {
      month: 'May',
      revenue: 28000000,
    },
    {
      month: 'Jun',
      revenue: 25000000,
    },
  ],
};

      setMessages((previous) => [...previous, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="chat-page">
      {/* Page header */}
      <div className="chat-page-header">
        <div>
          <div className="chat-title">
            <Sparkles size={24} />
            <h2>AI Analyst</h2>
          </div>

          <p>
            Ask questions and get insights from your data.
          </p>
        </div>

        <div className="selected-dataset">
          <Database size={17} />
          <span>sales_2026.csv</span>
        </div>
      </div>

      {/* Chat area */}
      <div className="chat-container">
        <div className="messages-container">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
            />
          ))}

          {isLoading && (
            <div className="typing-indicator">
              <span>AI Analyst is thinking...</span>
            </div>
          )}
        </div>

        <ChatInput
          onSend={handleSendMessage}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}

export default ChatPage;