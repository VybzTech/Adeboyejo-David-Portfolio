'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp?: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Thanks for your message: "${input}". I'm David, a full-stack developer. How can I help you today?`,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-bold text-2xl shadow-lg hover:shadow-glow-cyan-strong transition-all duration-300 flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[90] w-96 max-w-[calc(100vw-32px)] rounded-2xl border border-primary/30 bg-gradient-to-b from-background to-background/95 backdrop-blur-xl shadow-2xl flex flex-col max-h-[600px]"
          >
            {/* Header */}
            <div className="p-4 border-b border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10">
              <h3 className="text-lg font-bold text-foreground">Ask me anything</h3>
              <p className="text-xs text-foreground/60 mt-1">I&apos;m here to help and answer questions</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="text-3xl mb-3">👋</div>
                  <p className="text-foreground/70 text-sm">
                    Hi! I&apos;m David. Ask me about my projects, skills, or experience.
                  </p>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-primary text-background rounded-br-none'
                            : 'bg-secondary/20 text-foreground border border-secondary/30 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm leading-relaxed break-words">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-secondary/20 text-foreground border border-secondary/30 rounded-lg rounded-bl-none px-4 py-3">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" />
                          <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-primary/20 bg-background/50 backdrop-blur-sm"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 rounded-lg border border-primary/20 bg-background/70 text-foreground placeholder-foreground/40 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 rounded-lg bg-primary text-background font-semibold hover:shadow-glow-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
