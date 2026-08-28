import { Bot, User } from 'lucide-react';

import ResultTable from './ResultTable';
import AnalysisChart from './AnalysisChart';

function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`chat-message ${
        isUser ? 'user-message' : 'ai-message'
      }`}
    >
      <div className="message-avatar">
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>

      <div className="message-content">
        <div className="message-name">
          {isUser ? 'You' : 'AI Analyst'}
        </div>

        {message.content && (
          <div className="message-text">
            {message.content}
          </div>
        )}

        {!isUser && message.data && (
          <div className="analysis-result">
            <ResultTable data={message.data} />

            <AnalysisChart
              data={message.data}
              type={message.chartType}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;