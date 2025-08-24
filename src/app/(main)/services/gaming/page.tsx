"use client";
import React, { useState, useEffect } from "react";

const cards = [
  {
    title: "Game Development",
    desc: "Full-cycle game development across mobile, PC, console, and VR/AR. From prototyping to launch, we create seamless, scalable, and immersive gameplay experiences.",
    img: "/images/gdgd.jpeg",
  },
  {
    title: "Game Art & Animation",
    desc: "2D and 3D art, environments, characters, VFX, and animations that define the look and feel of your game. We bring visual stories to life with stunning detail.",
    img: "/images/gdaa.jpeg",
  },
  {
    title: "Game Quality Assurance",
    desc: "Beyond bug detection—our QA ensures compliance, compatibility, performance, and accessibility. With functional, regression, and device testing, we guarantee smooth play across platforms.",
    img: "/images/gdqa.jpeg",
  },
  {
    title: "PlayTesting & LiveOps",
    desc: "Player feedback drives great games. We provide structured playtesting, user insights, and continuous LiveOps support to keep your game fresh post-launch.",
    img: "/images/gdpt.jpeg",
  },
  {
    title: "Gaming Excellence",
    desc: "Cutting-edge tools like analytics, automation, and Gen AI help optimize performance and ensure your game is future-ready.",
    img: "/images/gdge.jpeg",
  },
];

const applications = [
  "Mobile, PC & Console Games",
  "VR/AR Immersive Worlds",
  "Indie & AAA Titles",
  "Educational & Training Games",
  "Multiplayer & Live-Service Games",
];

const whyZenturioTech = [
  "End-to-end expertise: development, art, QA, and operations",
  "Scalable solutions for both indie and large-scale productions",
  "QA rooted in functionality, compliance, and accessibility",
  "Player-first insights through structured playtesting",
  "Agile delivery for faster, smoother launches",
];

export default function GamingServicePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 600);
      setIsTablet(width > 600 && width <= 1024);
    };
    
    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);
    return () => window.removeEventListener('resize', checkDeviceSize);
  }, []);
  
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a192f",
      color: "#fff",
      padding: 0,
      margin: 0,
      marginBottom: -80,
    }}>
      {/* HERO SECTION */}
      <div style={{
        width: '100%',
        minHeight: isMobile ? 600 : 700,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url("/images/gaming.png") center/cover no-repeat',
        backgroundPosition: 'center 0px',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        overflow: 'hidden',
        marginBottom: 0,
        marginTop: -80,
      }}>
        {/* Gaming-themed animated background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(75, 181, 67, 0.2) 0%, transparent 70%)
          `,
          animation: 'pulse 4s ease-in-out infinite alternate',
        }} />
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(10,34,64,0.65)',
          zIndex: 1,
        }} />
        {/* Bottom Blur Gradient */}
        <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: 180,
          background: 'linear-gradient(180deg, rgba(10,25,47,0) 0%, #0a192f 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 3,
          color: '#fff',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 20px',
        }}>
          <h1 style={{
            fontSize: isMobile ? 32 : isTablet ? 48 : 70,
            fontWeight: 600,
            letterSpacing: 1,
            marginBottom: isMobile ? 16 : 24,
          }}>
            Gaming
          </h1>
          <h2 style={{
            fontSize: isMobile ? 18 : 24,
            fontWeight: 700,
            color: '#4bb6ff',
            marginBottom: 16,
            lineHeight: 1.3,
            maxWidth: 900,
          }}>
            From Concept to Playable Reality
          </h2>
          <p style={{
            fontSize: isMobile ? 14 : 18,
            color: '#e0e6ed',
            lineHeight: 1.6,
            maxWidth: 700,
            margin: '0 auto',
          }}>
            At ZenturioTech, we design, build, and refine games that captivate players. By blending creativity, technology, and rigorous testing, we deliver engaging, high-performance experiences across platforms.
          </p>
        </div>
      </div>

      {/* Our Services Section */}
      <div style={{ 
        maxWidth: isTablet ? 800 : 1200, 
        margin: "0 auto", 
        padding: isMobile ? '32px 8px' : isTablet ? '48px 16px' : '60px 20px', 
        marginTop: isMobile ? 40 : 60,
        background: "#0a192f",
      }}>
        <h2 style={{
          color: '#3ba3ff',
          fontSize: isMobile ? 24 : isTablet ? 32 : 48,
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: isMobile ? 32 : 48,
          letterSpacing: 1,
        }}>
          Our Services
        </h2>
        
        {cards.map((card, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={card.title}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: isMobile ? 'column' : isLeft ? 'row' : 'row-reverse',
                alignItems: 'center',
                marginBottom: 80,
                minHeight: isMobile ? 'auto' : 300,
                width: '100%',
              }}
            >
              {/* Image Container - Now shows actual images */}
              <div
                style={{
                  zIndex: 2,
                  flex: isMobile ? '0 0 auto' : '0 0 350px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: isMobile ? 0 : isLeft ? 0 : -100,
                  marginRight: isMobile ? 0 : isLeft ? -100 : 0,
                  marginBottom: isMobile ? 32 : 0,
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    borderRadius: 40,
                    width: isMobile ? 200 : isTablet ? 260 : 350,
                    height: isMobile ? 180 : isTablet ? 240 : 400,
                    objectFit: 'cover',
                    border: '6px solid #4bb6ff',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  }}
                  onError={(e) => {
                    // Check if target exists and is an HTMLElement
                    if (e.target && e.target instanceof HTMLElement) {
                      const target = e.target;
                      const parent = target.parentNode;
                      
                      if (parent && parent instanceof HTMLElement) {
                        // Fallback if image doesn't load
                        target.style.display = 'none';
                        const fallbackDiv = parent.querySelector('.fallback-div') as HTMLElement;
                        if (fallbackDiv) {
                          fallbackDiv.style.display = 'flex';
                        }
                      }
                    }
                  }}
                />
                {/* Fallback div for when images don't load */}
                <div
                  className="fallback-div"
                  style={{
                    display: 'none',
                    borderRadius: 40,
                    width: isMobile ? 200 : isTablet ? 260 : 350,
                    height: isMobile ? 180 : isTablet ? 240 : 400,
                    border: '6px solid #4bb6ff',
                    boxSizing: 'border-box',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? 14 : 18,
                    fontWeight: 600,
                    color: '#fff',
                    textAlign: 'center',
                    padding: '20px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  {card.title}
                </div>
              </div>
              
              {/* Card box with text content */}
              <div
                style={{
                  zIndex: 1,
                  flex: 1,
                  background: 'rgba(10, 44, 82, 0.44)',
                  borderRadius: 36,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  padding: isMobile ? '24px 12px' : isTablet ? '36px 32px' : '48px 64px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: isMobile ? 'center' : 'flex-start',
                  minHeight: isMobile ? 120 : isTablet ? 180 : 320,
                  paddingLeft: isMobile ? 12 : isLeft ? (isTablet ? 60 : 140) : 32,
                  paddingRight: isMobile ? 12 : isLeft ? 32 : (isTablet ? 60 : 140),
                  textAlign: isMobile ? 'center' : 'left',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Card title */}
                <div
                  style={{
                    fontSize: isMobile ? 18 : isTablet ? 28 : 36,
                    fontWeight: 500,
                    marginBottom: 12,
                    color: '#8ecaff',
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </div>
                {/* Card description */}
                <div
                  style={{
                    fontSize: isMobile ? 14 : isTablet ? 20 : 30,
                    color: '#e0e6ed',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    maxWidth: isMobile ? 'none' : '90%',
                  }}
                >
                  {card.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Applications Section */}
      <div style={{ 
        maxWidth: 1100, 
        margin: '0 auto', 
        marginTop: isMobile ? -40 : -20,
        background: "#0a192f",
        padding: isMobile ? '0 16px' : '0 20px',
        paddingBottom: isMobile ? 40 : 60,
      }}>
        <h2 style={{
          color: '#3ba3ff',
          fontSize: isMobile ? 24 : isTablet ? 32 : 38,
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: isMobile ? 32 : 40,
          letterSpacing: 1,
        }}>
          Applications
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: isMobile ? 'nowrap' : 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? 16 : 24,
          marginBottom: isMobile ? 40 : 60,
          width: '100%',
        }}>
          {isMobile ? (
            applications.map((app, i) => (
              <div key={i} style={{
                background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
                borderRadius: 20,
                padding: '16px 20px',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                width: '100%',
                maxWidth: 280,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 50,
              }}>{app}</div>
            ))
          ) : (
            <>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
                {applications.slice(0, 3).map((app, i) => (
                  <div key={i} style={{
                    background: 'linear-gradient(90deg,rgb(24, 51, 110) 0%,rgb(54, 102, 122) 100%)',
                    borderRadius: 32,
                    padding: '28px 32px',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: isTablet ? 20 : 24,
                    minWidth: isTablet ? 260 : 320,
                    textAlign: 'center',
                    boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                  }}>
                    {app}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 16 }}>
                {applications.slice(3).map((app, i) => (
                  <div key={i} style={{
                    background: 'linear-gradient(90deg,rgb(24, 51, 110) 0%,rgb(54, 102, 122) 100%)',
                    borderRadius: 32,
                    padding: '28px 32px',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: isTablet ? 20 : 24,
                    minWidth: isTablet ? 260 : 320,
                    textAlign: 'center',
                    boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                  }}>
                    {app}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Why ZenturioTech Section */}
      <div style={{ 
        maxWidth: 1100, 
        margin: '0 auto', 
        background: "#0a192f",
        padding: isMobile ? '0 16px' : '0 20px',
        paddingBottom: isMobile ? 60 : 100,
      }}>
        <h2 style={{
          color: '#3ba3ff',
          fontSize: isMobile ? 24 : isTablet ? 32 : 38,
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: isMobile ? 32 : 40,
          letterSpacing: 1,
        }}>
          Why ZenturioTech?
        </h2>
        <div style={{
          background: 'rgba(10, 44, 82, 0.44)',
          borderRadius: 36,
          padding: isMobile ? '32px 24px' : '48px 64px',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          marginBottom: isMobile ? 40 : 60,
        }}>
          {whyZenturioTech.map((point, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: i === whyZenturioTech.length - 1 ? 0 : 20,
              color: '#e0e6ed',
              fontSize: isMobile ? 16 : isTablet ? 18 : 20,
              lineHeight: 1.6,
            }}>
              <span style={{
                color: '#4bb6ff',
                marginRight: 12,
                fontSize: isMobile ? 20 : 24,
                fontWeight: 'bold',
                flexShrink: 0,
              }}>
                ✓
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 36,
          padding: isMobile ? '32px 24px' : '48px 64px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        }}>
          <h3 style={{
            fontSize: isMobile ? 24 : isTablet ? 28 : 32,
            fontWeight: 700,
            color: '#fff',
            marginBottom: 16,
          }}>
            Ready to Level Up?
          </h3>
          <p style={{
            fontSize: isMobile ? 16 : isTablet ? 18 : 20,
            color: '#e0e6ed',
            marginBottom: 24,
            lineHeight: 1.6,
          }}>
            Let's create games that players love to play, share, and remember.
          </p>
          <div style={{
            fontSize: isMobile ? 18 : isTablet ? 20 : 24,
            fontWeight: 700,
            color: '#4bb6ff',
          }}>
            Let's talk, Game On!
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
