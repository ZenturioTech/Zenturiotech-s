"use client"
import React from "react";

export default function AiMedicalDiagnosticsPage() {
  return (
    <>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '100vh', 
        overflow: 'hidden',
        background: 'url(\'/images/blogbg.jpeg\') center/cover no-repeat, #0a1a2f',
      }}>
        {/* Dark overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(10,26,47,0.95) 0%, rgba(30,58,92,0.85) 60%, rgba(58,95,168,0.8) 100%)',
          zIndex: 0
        }}>
          {/* Animated gradient overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(25,118,210,0.1) 0%, transparent 50%)',
            animation: 'pulse 8s infinite'
          }} />
        </div>

        {/* Content Container */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '48px 24px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              marginBottom: '10px',
              textAlign: 'center',
              width: '100%'
            }}>
              <h1 style={{
                color: '#fff',
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '20px',
                letterSpacing: '0.5px',
                paddingTop: '200px'
              }}>
                <span>NLP: The Future of Human-AI Interaction</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>Understanding the Evolution of Natural Language Processing</span>
              </h1>
              <div style={{
                color: '#bcd1f7',
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                marginBottom: '10px'
              }}>
                <span>Blog by <b style={{ color: '#fff' }}>Fathimath Shamneera</b></span>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.98rem)',
                  color: '#bcd1f7',
                  marginTop: '5px'
                }}>Content Writer & AI Technology Analyst</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        background: '#fff',
        padding: 'clamp(32px, 5vw, 64px) clamp(16px, 3vw, 24px)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          color: '#333'
        }}>
          {/* Introduction */}
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555' }}>
            Natural Language Processing (NLP) has become the backbone of human-AI communication, enabling machines to understand, interpret and respond to human language. As we step into the future AI world, NLP is evolving beyond simple comprehension. It's mastering the art of understanding emotions, intentions and context with remarkable precision.
          </p>

          {/* From Syntax to Semantics */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c', marginTop: '3rem' }}>
            1. From Syntax to Semantics: Deeper Language Understanding
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            Gone are the days when NLP was limited to analysing grammar and sentence structure. Today's models dive deeper into semantic meaning, tone, and even cultural nuances. This shift allows AI to grasp not just what is being said but why. For example:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '1.5rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>AI can now interpret sarcasm or humour in text.</li>
            <li style={{ marginBottom: '1rem' }}>It can adapt responses based on cultural or regional contexts.</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555', fontStyle: 'italic' }}>
            Why does it Matter? This deeper understanding creates more human-like interactions, making AI assistants feel intuitive and empathetic.
          </p>

          {/* Conversational AI */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            2. Conversational AI Becomes Truly Intelligent
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            Conversational AI is no longer just about answering questions; it's about engaging in meaningful conversations. With advancements in dialogue management and intent recognition, AI can:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>Maintain context across multi-turn conversations</li>
            <li style={{ marginBottom: '1rem' }}>Remember user preferences and adapt responses dynamically</li>
            <li style={{ marginBottom: '1rem' }}>Reduce repetitive prompts, creating smoother interactions</li>
          </ul>

          {/* Breaking Barriers */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            3. Breaking Barriers with Low-Resource Language Support
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            Inclusivity is at the forefront of NLP innovation. Thanks to advancements in multilingual NLP and fine-tuning on diverse datasets, AI now supports a broader range of languages and dialects, including those previously underrepresented.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1rem', color: '#555' }}>
            Impact:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '1.5rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>Businesses can engage with global audiences in their native languages</li>
            <li style={{ marginBottom: '1rem' }}>Technology becomes accessible to billions of people worldwide</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555', fontStyle: 'italic' }}>
            Real-World Example: A healthcare chatbot that provides critical information in indigenous languages or rare dialects ensuring no one is left behind.
          </p>

          {/* Real-Time Relevance */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            4. Real-Time Relevance with NLP + RAG
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            The integration of NLP with Retrieval-Augmented Generation (RAG) is a game-changer. By combining natural language understanding with real-time data retrieval, AI can:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '1.5rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>Fetch relevant information dynamically from external databases or APIs</li>
            <li style={{ marginBottom: '1rem' }}>Generate responses that are accurate, contextual, and grounded in facts</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555', fontStyle: 'italic' }}>
            Why It's Revolutionary: Whether it's customer support or business intelligence, RAG-powered NLP ensures responses are always up-to-date and reliable.
          </p>

          {/* Sentiment Analysis */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            5. Sentiment, Emotion & Intent Detection
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            NLP is no longer just about understanding what users say. It's about sensing how they feel. Advanced sentiment analysis now detects emotional tones like frustration, excitement or sadness. This capability is driving innovation across industries:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}><strong>Customer Service:</strong> AI can de-escalate frustrated customers by responding empathetically</li>
            <li style={{ marginBottom: '1rem' }}><strong>Mental Health Support:</strong> Virtual assistants can identify signs of emotional distress and provide timely interventions</li>
            <li style={{ marginBottom: '1rem' }}><strong>Content Moderation:</strong> Platforms can flag harmful or toxic content more effectively</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555', fontStyle: 'italic' }}>
            The Result: Interactions that feel personal, supportive and human-centric.
          </p>

          {/* Conclusion */}
          <div style={{
            marginTop: '3rem',
            padding: 'clamp(20px, 3vw, 32px)',
            background: '#f5f8ff',
            borderRadius: '12px',
            border: '1px solid #e1e8ff'
          }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1rem', color: '#1e3a5c' }}>
              Why This Evolution Matters
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
              NLP has moved from being a backend tool to becoming a strategic enabler for businesses. It powers:
            </p>
            <ul style={{ 
              fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
              lineHeight: 1.8, 
              marginBottom: '0', 
              color: '#555',
              paddingLeft: 'clamp(20px, 2vw, 24px)'
            }}>
              <li style={{ marginBottom: '1rem' }}><strong>Hyper-Personalized Experiences:</strong> Tailored responses that resonate with individual users</li>
              <li style={{ marginBottom: '1rem' }}><strong>Smarter Automation:</strong> Streamlined workflows with minimal human intervention</li>
              <li style={{ marginBottom: '0' }}><strong>Actionable Insights:</strong> Real-time analysis of customer feedback or market trends</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          ul {
            padding-left: 16px;
          }
          
          li {
            margin-bottom: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          h2 {
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          
          p {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </>
  );
} 