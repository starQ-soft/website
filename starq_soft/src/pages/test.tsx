import React, { useState, useEffect, useRef } from 'react';

const AIGirlfriend = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '亲爱的，你终于回来了，今天过得怎么样？' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await response.json();
      
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: '哎呀，网络好像出了一点小状况...' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h3>AI Girl</h3>
        <span style={styles.status}>{isTyping ? '正在输入...' : '在线'}</span>
      </header>

      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.role === 'user' ? styles.userRow : styles.aiRow}>
            <div style={msg.role === 'user' ? styles.userBubble : styles.aiBubble}>
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      <div style={styles.inputArea}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="说点什么..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>发送</button>
      </div>
    </div>
  );
};

const styles = {
  container: { width: '400px', height: '600px', border: '1px solid #ddd', borderRadius: '20px', display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5', overflow: 'hidden', margin: '20px auto', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' },
  header: { padding: '15px', backgroundColor: '#ff6b81', color: '#fff', textAlign: 'center' },
  status: { fontSize: '12px', opacity: 0.8 },
  chatBox: { flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' },
  userRow: { display: 'flex', justifyContent: 'flex-end' },
  aiRow: { display: 'flex', justifyContent: 'flex-start' },
  userBubble: { backgroundColor: '#ff6b81', color: '#fff', padding: '10px 15px', borderRadius: '15px 15px 0 15px', maxWidth: '80%' },
  aiBubble: { backgroundColor: '#fff', color: '#333', padding: '10px 15px', borderRadius: '15px 15px 15px 0', maxWidth: '80%', border: '1px solid #eee' },
  inputArea: { padding: '15px', display: 'flex', backgroundColor: '#fff' },
  input: { flex: 1, border: '1px solid #ddd', borderRadius: '20px', padding: '8px 15px', outline: 'none' },
  button: { marginLeft: '10px', backgroundColor: '#ff6b81', color: '#fff', border: 'none', borderRadius: '20px', padding: '0 20px', cursor: 'pointer' }
};

export default AIGirlfriend;