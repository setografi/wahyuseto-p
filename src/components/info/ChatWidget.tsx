import React, { useEffect, useRef, useState } from 'react';
import { fakeMessages } from '../../constants/fakeMessages';

const ChatWidget: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const messagesContentRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    if (messagesContentRef.current) {
      messagesContentRef.current.scrollTop = messagesContentRef.current.scrollHeight;
    }
  };

  const setDate = (messageDiv: HTMLDivElement) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timestampDiv = document.createElement('div');
    timestampDiv.classList.add(
      'timestamp',
      'absolute',
      'bottom-[-20px]',
      'text-xs',
      'text-neutral-500',
      'right-7'
    );
    timestampDiv.textContent = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    messageDiv.appendChild(timestampDiv);
  };

  const animateReadIcon = (checkmarkDiv: HTMLElement) => {
    setTimeout(() => {
      checkmarkDiv.classList.replace('text-neutral-500', 'text-blue-500');
    }, 800);
  };

  const insertPersonalMessage = (msg: string) => {
    if (!messagesContentRef.current) return;

    const messageDiv = document.createElement('div');
    messageDiv.classList.add(
      'message',
      'message-personal',
      'self-end',
      'bg-accent-purple-900',
      'border',
      'border-accent-purple-200',
      'p-2',
      'rounded-2xl',
      'rounded-tr-none',
      'max-w-[80%]',
      'relative',
      'ml-auto'
    );
    messageDiv.textContent = msg;

    const checkmarkDiv = document.createElement('i');
    checkmarkDiv.classList.add(
      'ri-check-double-line',
      'absolute',
      'bottom-[-22px]',
      'right-2',
      'text-base',
      'text-neutral-500'
    );
    messageDiv.appendChild(checkmarkDiv);

    messagesContentRef.current.appendChild(messageDiv);
    setDate(messageDiv);
    scrollToBottom();

    animateReadIcon(checkmarkDiv);
  };

  const insertFakeMessage = () => {
    if (!messagesContentRef.current) return;

    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add(
      'message',
      'message-received',
      'self-start',
      'typing-indicator-container',
      'flex',
      'items-center'
    );
    const typingDots = document.createElement('div');
    typingDots.classList.add('typing-indicator', 'flex', 'space-x-1');

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      dot.classList.add('h-2', 'w-2', 'bg-neutral-500', 'rounded-full', 'animate-bounce');
      dot.style.animationDelay = `${i * 0.2}s`;
      typingDots.appendChild(dot);
    }

    typingIndicator.appendChild(typingDots);
    messagesContentRef.current.appendChild(typingIndicator);
    scrollToBottom();

    setTimeout(() => {
      typingIndicator.remove();

      const messageDiv = document.createElement('div');
      messageDiv.classList.add(
        'message',
        'message-received',
        'self-start',
        'bg-neutral-900',
        'border',
        'border-neutral-200',
        'p-2',
        'rounded-2xl',
        'rounded-tl-none',
        'max-w-[80%]',
        'relative'
      );
      messageDiv.textContent = fakeMessages[currentMessageIndex];
      messagesContentRef.current.appendChild(messageDiv);
      setDate(messageDiv);
      scrollToBottom();

      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % fakeMessages.length);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!messageInputRef.current) return;

    const msg = messageInputRef.current.value.trim();
    if (msg) {
      insertPersonalMessage(msg);
      messageInputRef.current.value = '';
      setTimeout(() => {
        insertFakeMessage();
      }, 1000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      insertFakeMessage();
    }, 1000);
  }, []);

  return (
    <section className="glassmorphism glow-shadow h-full w-full rounded-lg border border-accent-lavender-400/60 p-4 backdrop-blur-2xl md:flex md:items-center md:justify-center">
      <div className="flex h-full flex-col justify-between">
        <div className="flex-none border-b border-neutral-300 p-4 text-start">
          <h1 className="text-base font-normal text-neutral-100">Stellar</h1>
          <h2 className="text-xs tracking-wider text-neutral-100">online</h2>
        </div>

        <div className="messages relative flex-1 overflow-hidden">
          <div
            className="messages-content absolute left-0 top-0 h-full w-full space-y-6 overflow-y-auto p-4"
            ref={messagesContentRef}
          ></div>
        </div>

        <div className="message-box flex flex-none items-center rounded-2xl border border-neutral-300 p-2">
          <textarea
            className="message-input flex-1 resize-none bg-transparent text-base text-neutral-100 outline-none"
            placeholder="Type message..."
            ref={messageInputRef}
          ></textarea>
          <button
            className="message-submit group rounded-full bg-neutral-100 px-2 py-1 transition-all duration-500 hover:bg-neutral-700"
            onClick={handleSendMessage}
          >
            <span className="font-medium text-neutral-900 group-hover:text-neutral-100">
              <i className="ri-arrow-up-line ri-lg"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatWidget;
