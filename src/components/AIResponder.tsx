import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Bot } from 'lucide-react';

export const AIResponder = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hi! I\'m your AI Security Analyst. I can help explain any threats or incidents. What would you like to know?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: getAIResponse(inputValue),
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputValue('');
  };

  const getAIResponse = (userInput) => {
    const lowercaseInput = userInput.toLowerCase();
    
    if (lowercaseInput.includes('gift card') || lowercaseInput.includes('fraud')) {
      return 'The gift card fraud pattern detected involves multiple high-value purchases in short timeframes. This typically indicates account takeover or card testing. I recommend temporarily flagging accounts with 3+ gift card purchases in 10 minutes for manual review.';
    } else if (lowercaseInput.includes('insider') || lowercaseInput.includes('employee')) {
      return 'Insider threat detected based on unusual price override patterns. Employee ID 4521 has exceeded normal discount thresholds by 340% today. This triggers our Zero Trust protocol requiring manager approval for future price modifications.';
    } else if (lowercaseInput.includes('ip') || lowercaseInput.includes('login')) {
      return 'The suspicious IP activity shows 247 login attempts from a single address in the last hour. This IP (192.168.1.100) matches our threat intelligence feed as a known botnet node. Auto-blocking has been activated.';
    } else {
      return 'I can help analyze any security incident. Try asking about specific threats like "gift card fraud", "insider threats", or "suspicious IP activity" for detailed explanations and recommended actions.';
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Bot className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">AI Security Analyst</h3>
      </div>

      <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg ${
              message.type === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-700 text-slate-100'
            }`}>
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <Input
          placeholder="Ask about any security incident..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
        />
        <Button 
          onClick={handleSendMessage}
          size="sm"
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};
