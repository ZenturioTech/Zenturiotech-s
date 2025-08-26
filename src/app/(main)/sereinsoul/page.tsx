'use client';
import Image from 'next/image';
import { useState } from 'react';

const SereinSoulPage: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    const video = document.getElementById('main-video') as HTMLVideoElement;
    if (video) {
      video.play();
    }
  };

  return (
    <>
      <div style={{ 
        position: 'relative', 
        width: '100%',
        maxWidth: '1920px',
        height: 'auto',
        background: '#062549',
        margin: '0 auto',
        overflow: 'visible'
      }}>
        
        {/* Hero Features Section with Ocean Background */}
        <div className="hero-section" style={{
          top: '50px',
          bottom: '50px',
          position: 'relative',
          width: '100%',
          height: '849px',
          backgroundImage: 'url(/images/ssocean.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '13px 2px 21.2px 7px rgba(0, 0, 0, 0.26)'
        }}>
          
          {/* Dark Blur Gradient Overlay for Ocean */}
          <div style={{
            position: 'absolute',
            top: '0px',
            left: 0,
            right: 0,
            bottom: '50px',
            backdropFilter: 'blur(2px)',
            background: 'rgba(42, 165, 241, 0.48)',
            zIndex: 1
          }} />
          
          {/* SereinSoul Logo in Transparent Box */}
          <div className="logo-container" style={{
            position: 'absolute',
            left: '8.33%',
            top: '200px',
            width: '500px',
            height: '100px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ width: '420px', height: '420px', position: 'relative' }}>
              <Image
                src="/images/sereinsoullogo.png"
                alt="SereinSoul Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="hero-title" style={{
            position: 'absolute',
            width: '760px',
            height: '291px',
            left: '8.33%',
            top: '320px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '800',
            fontSize: '70px',
            lineHeight: '90px',
            color: '#FFFFFF',
            zIndex: 5,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            You Deserve Someone  Who Listens
          </h1>

          {/* Hero Subtitle */}
          <p className="hero-subtitle" style={{
            position: 'absolute',
            width: '800px',
            height: '160px',
            left: '8.33%',
            top: '600px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '43px',
            lineHeight: '52px',
            color: '#FFFFFF',
            zIndex: 5,
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
          }}>
            India's first AI-powered digital twin platform for sustainable mental well-being.
          </p>

          {/* Character Image */}
          <div className="character-image" style={{
            position: 'absolute',
            width: '451px',
            height: '677px',
            right: '5.2%',
            top: '170px',
            zIndex: 1
          }}>
            <div style={{ width: '451px', height: '630px', position: 'relative' }}>
              <Image
                src="/images/ssgirl.png"
                alt="Person"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Circular icon in bottom right */}
          {/* <div className="circular-icon" style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            right: '5.2%',
            bottom: '50px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            zIndex: 7
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{
                color: '#0F85E7',
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                ♦
              </span>
            </div>
          </div> */}
        </div>

        {/* White Background Section */}
        <div className="white-section" style={{
          position: 'relative',
          width: '100%',
          height: '3200px',
          background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 85%, #062549 100%)',
          padding: '0 7.5%'
        }}>

          {/* AI Companion Section Header */}
          <h2 className="ai-companion-header" style={{
            position: 'absolute',
            width: '1087px',
            height: '130px',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '40px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '45px',
            lineHeight: '65px',
            color: '#0F85E7',
            textAlign: 'center'
          }}>
            Your AI-powered mental wellness companion
          </h2>

          {/* AI Companion Subtitle */}
          <p className="ai-companion-subtitle" style={{
            position: 'absolute',
            width: '1116px',
            height: '53px',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '180px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '41px',
            lineHeight: '49px',
            color: '#60676C',
            textAlign: 'center'
          }}>
            always available, always understanding, always here for you.
          </p>

          {/* Phone Section Background */}
          <div className="phone-bg" style={{
            position: 'absolute',
            width: '85%',
            maxWidth: '1632px',
            height: '536px',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '280px',
            background: '#E4F4FF',
            borderRadius: '65px'
          }} />

          {/* Large Background Circles */}
          <div className="bg-circle-1" style={{
            position: 'absolute',
            width: '349.05px',
            height: '350.11px',
            left: 'calc(7.5% + 193px)',
            top: '398px',
            background: 'rgba(160, 210, 251, 0.53)',
            borderRadius: '50%'
          }} />

          <div className="bg-circle-2" style={{
            position: 'absolute',
            width: '253.62px',
            height: '254.14px',
            left: 'calc(7.5% + 240.98px)',
            top: '445.98px',
            background: 'rgba(160, 210, 251, 0.53)',
            borderRadius: '50%'
          }} />

          <div className="bg-circle-3" style={{
            position: 'absolute',
            width: '153.44px',
            height: '153.96px',
            left: 'calc(7.5% + 291.07px)',
            top: '496.07px',
            background: 'rgba(160, 210, 251, 0.53)',
            borderRadius: '50%'
          }} />

          {/* Small Feature Circles */}
            <div className="feature-circle-1" style={{
            position: 'absolute',
            width: 66,
            height: 72,
            left: 'calc(7.5% + 168px)',
            top: 571,
            background: '#A0D2FB',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            zIndex: 9,
          }}>
            <div style={{ position: 'relative', width: 40, height: 40 }}>
              <Image src="/images/handmed.png" alt="Meditation" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>

             <div className="feature-circle-2" style={{
            position: 'absolute',
            width: 56,
            height: 61,
            left: 'calc(7.5% + 211px)',
            top: 431,
            background: '#A0D2FB',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            zIndex: 9,
          }}>
            <div style={{ position: 'relative', width: 32, height: 32 }}>
              <Image src="/images/handleaf.png" alt="Notes" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>

        <div className="feature-circle-3" style={{
            position: 'absolute',
            width: 56,
            height: 61,
            left: 'calc(7.5% + 488px)',
            top: 432,
            background: '#AFD9FC',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            zIndex: 9,
          }}>
            <div style={{ position: 'relative', width: 32, height: 32 }}>
              <Image src="/images/handgame.png" alt="Games" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>

           <div className="feature-circle-4" style={{
            position: 'absolute',
            width: 65,
            height: 71,
            left: 'calc(7.5% + 342px)',
            top: 357,
            background: '#A0D2FB',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            zIndex: 9,
          }}>
            <div style={{ position: 'relative', width: 36, height: 36 }}>
              <Image src="/images/handcall.png" alt="Call" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>

          <div className="feature-circle-5" style={{
            position: 'absolute',
            width: 51,
            height: 57,
            left: 'calc(7.5% + 518px)',
            top: 578,
            background: '#A0D2FB',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            zIndex: 9,
          }}>
            <div style={{ position: 'relative', width: 28, height: 28 }}>
              <Image src="/images/handdoc.png" alt="Clover" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Phone Image */}
          <div className="phone-image" style={{
            position: 'absolute',
            width: '340px',
            height: '419px',
            left: 'calc(7.5% + 172px)',
            top: '395px'
          }}>
            <div style={{ width: '340px', height: '419px', position: 'relative' }}>
              <Image
                src="/images/ssmob.png"
                alt="SereinSoul Mobile App"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Text Container for Mobile */}
          <div className="phone-text-container">
            {/* Phone Section Title */}
            <h3 className="phone-title" style={{
              position: 'absolute',
              width: '698px',
              height: '132px',
              left: '50%',
              transform: 'translateX(-50%) translateX(254px)',
              top: '350px',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '51px',
              lineHeight: '55px',
              textAlign: 'center',
              color: '#0F85E7'
            }}>
              Your Mind's Best Friend, Always in Your Pocket.
            </h3>

            {/* Phone Section Description */}
            <p className="phone-description" style={{
              position: 'absolute',
              width: '650px',
              height: '200px',
              left: '50%',
              transform: 'translateX(-50%) translateX(270.5px)',
              top: '500px',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '35px ',
              lineHeight: '40px',
              textAlign: 'justify',
              color: '#60676C'
            }}>
              Meet your pocket-friendly mental wellness companion the Sereinsoul app. With our friendly AI chatbot, you'll always have someone to listen, support, and guide you toward a calmer mind, anytime, anywhere.
            </p>
          </div>

          {/* Why You'll Love Section */}
          <div className="love-section" style={{
            position: 'absolute',
            width: 'calc(100% - 15%)',
            left: '7.5%',
            top: '880px',
            textAlign: 'center'
          }}>
            <span style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '46px',
              lineHeight: '55px',
              color: '#7E7F80'
            }}>
              Why You'll Love{' '}
            </span>
            <span style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '74px',
              lineHeight: '89px',
              color: '#0F85E7'
            }}>
              Sereinsoul
            </span>
          </div>

          {/* Feature Cards Container */}
          <div className="feature-cards-container" style={{
            position: 'absolute',
            width: '100%',
            left: '0',
            top: '1000px',
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            paddingLeft: '0',
            paddingRight: '0'
          }}>
            {/* Card 1 - Always Available */}
            <div className="feature-card" style={{
              width: '290px',
              height: '329px',
              background: '#ECF7FF',
              borderRadius: '15px',
              padding: '40px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ width: '80px', height: '80px', position: 'relative', marginBottom: '20px' }}>
                <Image
                  src="/images/ssfungames.png"
                  alt="Always Available"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '27px',
                lineHeight: '32px',
                color: '#0F85E7',
                marginBottom: '15px'
              }}>
                Always Available
              </h4>
              <p style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '29px',
                color: '#696984'
              }}>
                Always available 24 x 7
              </p>
            </div>

            {/* Card 2 - Judgment-Free */}
            <div className="feature-card" style={{
              width: '290px',
              height: '329px',
              background: '#ECF7FF',
              borderRadius: '15px',
              padding: '40px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ width: '80px', height: '80px', position: 'relative', marginBottom: '20px' }}>
                <Image
                  src="/images/ssjudgement.png"
                  alt="Judgment-Free"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '27px',
                lineHeight: '32px',
                color: '#0F85E7',
                marginBottom: '15px'
              }}>
                Judgment-Free
              </h4>
              <p style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '29px',
                color: '#696984'
              }}>
                No one is going to judge you
              </p>
            </div>

            {/* Card 3 - Wellness Tips */}
            <div className="feature-card" style={{
              width: '290px',
              height: '329px',
              background: '#ECF7FF',
              borderRadius: '15px',
              padding: '40px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ width: '80px', height: '80px', position: 'relative', marginBottom: '20px' }}>
                <Image
                  src="/images/sswellness.png"
                  alt="Wellness Tips"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '27px',
                lineHeight: '32px',
                color: '#0F85E7',
                marginBottom: '15px'
              }}>
                Wellness Tips
              </h4>
              <p style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '29px',
                color: '#696984'
              }}>
                Gives Wellness Tips
              </p>
            </div>

            {/* Card 4 - Fun Games */}
            <div className="feature-card" style={{
              width: '290px',
              height: '329px',
              background: '#ECF7FF',
              borderRadius: '15px',
              padding: '40px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ width: '80px', height: '80px', position: 'relative', marginBottom: '20px' }}>
                <Image
                  src="/images/ssgaming.png"
                  alt="Fun Games"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '27px',
                lineHeight: '32px',
                color: '#0F85E7',
                marginBottom: '15px'
              }}>
                Fun Games
              </h4>
              <p style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '29px',
                color: '#696984'
              }}>
                One powerful online software suite that combines
              </p>
            </div>
          </div>

          {/* Video Section with Enhanced Design - Video Always Visible */}
          <div className="video-container" style={{
            position: 'absolute',
            width: '75%',
            maxWidth: '1632px',
            height: '541px',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '1450px',
            borderRadius: '65px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Main Video Element */}
            <video
              id="main-video"
              autoPlay
              muted
              loop
              controls
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '65px',
                zIndex: 1
              }}
            >
              <source src="/videos/ssmed.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Bottom Gradient Overlay with Text - Always Visible */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '150px',
              background: 'linear-gradient(180deg, rgba(42, 165, 241, 0) 0%, rgba(42, 165, 241, 0.8) 50%, rgba(15, 133, 231, 0.9) 100%)',
              backdropFilter: 'blur(0px)',
              borderRadius: '0 0 65px 65px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2
            }}>
              <h2 style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '36px',
                lineHeight: '45px',
                color: '#FFFFFF',
                margin: 0,
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                padding: '0 40px'
              }}>
                " Because Your Mind Matters – Always"
              </h2>
            </div>
          </div>

          <h2 className="chatbot-title" style={{
            position: 'absolute',
            width: '80%',
            maxWidth: '1200px',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '2050px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '54px',
            lineHeight: '65px',
            color: '#0F85E7',
            textAlign: 'center'
          }}>
            The SereinSoul chatbot is your safe, friendly companion
          </h2>

          {/* Blue Background Section */}
          <div className="blue-bg" style={{
            position: 'absolute',
            width: '85%',
            maxWidth: '1632px',
            height: '280px',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '2250px',
            background: '#A0D2FB',
            borderRadius: '128px 0px'
          }} />

          {/* Description Text */}
          <p className="description-text" style={{
            position: 'absolute',
            width: '75%',
            maxWidth: '1400px',
            height: '196px',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '2300px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '32px',
            lineHeight: '42px',
            color: '#60676C',
            textAlign: 'center'
          }}>
            It engages in natural, human-like conversations so users feel they're talking to a caring friend, not a machine. This builds trust, encourages honest sharing, and helps relieve emotional stress. When needed, the chatbot seamlessly connects users to qualified doctors and mental health experts, ensuring that support goes beyond conversation to real professional help.
          </p>

          {/* Expert Section Container */}
          <div className="expert-container" style={{
            position: 'absolute',
            width: '85%',
            maxWidth: '1632px',
            height: '600px',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '2650px',
            display: 'flex',
            alignItems: 'center',
            gap: '100px'
          }}>
            {/* Therapist Image */}
            <div className="therapist-image" style={{
              width: '600px',
              height: '600px',
              flexShrink: 0
            }}>
              <div style={{ width: '600px', height: '600px', position: 'relative' }}>
                <Image
                  src="/images/sswomen.png"
                  alt="Woman therapist with clipboard"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '20px' }}
                />
              </div>
            </div>

            {/* Expert Section Text */}
            <div className="expert-text" style={{
              flex: 1,
              textAlign: 'center',
              padding: '50px'
            }}>
              <h2 className="expert-title" style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '47px',
                lineHeight: '140%',
                color: '#2171B0',
                marginBottom: '30px'
              }}>
                Built for You, Backed by Experts
              </h2>

              <p className="expert-description" style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '28px',
                lineHeight: '42px',
                color: '#082649',
                marginBottom: '40px'
              }}>
                Whether you're a student, working professional, caregiver or leader —Sereinsoul.ai is for anyone who wants to be more present, resilient and balanced.
              </p>

              {/* CTA Button */}
              <div className="cta-button"
              onClick={() => window.open('https://www.sereinsoul.com', '_blank')}
               style={{
                width: '498px',
                height: '82px',
                background: 'linear-gradient(90deg, #0A7BFF 0%, #064A99 100%)',
                borderRadius: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                cursor: 'pointer'
              }}>
                <span style={{
                  fontFamily: 'poppins',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '31px',
                  lineHeight: '140%',
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}>
                  Visit Sereinsoul.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Responsive Styles */}
      <style jsx>{`
        /* Large Desktop Styles - 1921px and above */
        @media (min-width: 1921px) {
          .hero-section {
            max-width: 2560px !important;
            margin: 0 auto !important;
          }
          
          .white-section {
            max-width: 2560px !important;
            margin: 0 auto !important;
          }
        }

        /* Desktop Large - 1440px to 1600px */
        @media (max-width: 1600px) and (min-width: 1441px) {
          .hero-title {
            font-size: 65px !important;
            line-height: 80px !important;
          }

          .hero-subtitle {
            font-size: 38px !important;
            line-height: 48px !important;
          }

          .ai-companion-header {
            font-size: 48px !important;
            line-height: 58px !important;
          }

          .phone-title {
            font-size: 46px !important;
            line-height: 52px !important;
          }

          .phone-description {
            font-size: 24px !important;
            line-height: 36px !important;
          }
        }

        /* Desktop Medium - 1200px to 1440px */
        @media (max-width: 1440px) and (min-width: 1201px) {
          .hero-title {
            font-size: 55px !important;
            line-height: 70px !important;
          }

          .hero-subtitle {
            font-size: 35px !important;
            line-height: 45px !important;
          }

          .character-image {
            width: 400px !important;
            height: 600px !important;
          }

          .character-image > div {
            width: 400px !important;
            height: 560px !important;
          }

          .ai-companion-header {
            font-size: 45px !important;
            line-height: 55px !important;
          }

          .phone-title {
            font-size: 42px !important;
            line-height: 48px !important;
            width: 600px !important;
          }

          .phone-description {
            font-size: 22px !important;
            line-height: 32px !important;
            width: 550px !important;
          }
        }

        /* Desktop Small - 1024px to 1200px */
        @media (max-width: 1200px) and (min-width: 1025px) {
          .hero-title {
            font-size: 45px !important;
            line-height: 55px !important;
            width: 650px !important;
          }

          .hero-subtitle {
            font-size: 28px !important;
            line-height: 35px !important;
            width: 700px !important;
          }

          .character-image {
            width: 350px !important;
            height: 500px !important;
          }

          .character-image > div {
            width: 350px !important;
            height: 490px !important;
          }

          .ai-companion-header {
            font-size: 38px !important;
            line-height: 45px !important;
            width: 900px !important;
          }

          .phone-title {
            font-size: 38px !important;
            line-height: 45px !important;
            width: 500px !important;
          }

          .phone-description {
            font-size: 20px !important;
            line-height: 28px !important;
            width: 450px !important;
          }
        }

        /* Large Tablet - 900px to 1024px */
        @media (max-width: 1024px) and (min-width: 901px) {
          .hero-title {
            font-size: 40px !important;
            line-height: 50px !important;
            width: 80% !important;
          }

          .hero-subtitle {
            font-size: 24px !important;
            line-height: 32px !important;
            width: 85% !important;
          }

          .character-image {
            width: 300px !important;
            height: 450px !important;
          }

          .character-image > div {
            width: 300px !important;
            height: 420px !important;
          }

          .ai-companion-header {
            font-size: 34px !important;
            line-height: 42px !important;
            width: 85% !important;
          }

          .ai-companion-subtitle {
            font-size: 26px !important;
            line-height: 32px !important;
            width: 90% !important;
          }

          .phone-image {
            width: 280px !important;
            height: 346px !important;
          }

          .phone-image > div {
            width: 280px !important;
            height: 346px !important;
          }
        }

        /* Medium Tablet - 768px to 900px */
        @media (max-width: 900px) and (min-width: 769px) {
          .hero-title {
            font-size: 36px !important;
            line-height: 45px !important;
            width: 85% !important;
          }

          .hero-subtitle {
            font-size: 25px !important;
            line-height: 30px !important;
            width: 90% !important;
          }

          .character-image {
            width: 280px !important;
            height: 420px !important;
          }

          .character-image > div {
            width: 280px !important;
            height: 392px !important;
          }

          .ai-companion-header {
            font-size: 30px !important;
            line-height: 38px !important;
            width: 90% !important;
          }

          .ai-companion-subtitle {
            font-size: 22px !important;
            line-height: 28px !important;
            width: 95% !important;
          }

          .phone-bg {
            height: 450px !important;
            padding: 35px 25px !important;
          }

          .phone-image {
            top: 30px !important;
            width: 200px !important;
            height: 247px !important;
          }

          .phone-image > div {
            
            width: 200px !important;
            height: 247px !important;
          }

          .phone-title {
            font-size: 22px !important;
            line-height: 28px !important;
          }

          .phone-description {
            font-size: 16px !important;
            line-height: 22px !important;
          }
        }

        /* Mobile - 768px and below */
        @media (max-width: 768px) {
          /* Hero Section Mobile Adjustments */
          .hero-section {
            height: 600px !important;
            padding: 0 20px !important;
          }

          .logo-container {
            position: relative !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            top: 30px !important;
            width: 300px !important;
            height: 60px !important;
            margin-bottom: 20px !important;
          }

          .logo-container > div {
            width: 250px !important;
            height: 250px !important;
          }

          .hero-title {
            position: relative !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            top: 30px !important;
            width: 90% !important;
            height: auto !important;
            font-size: 32px !important;
            line-height: 40px !important;
            text-align: center !important;
            margin-bottom: 20px !important;
          }

          .hero-subtitle {
            position: relative !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            top: 40px !important;
            width: 90% !important;
            height: auto !important;
            font-size: 20px !important;
            line-height: 24px !important;
            text-align: center !important;
            margin-bottom: 30px !important;
          }

          .character-image {
            position: relative !important;
            right: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            top: 0 !important;
            width: 250px !important;
            height: 375px !important;
            margin: 0 auto !important;
          }

          .character-image > div {
            width: 250px !important;
            height: 350px !important;
          }

          .circular-icon {
            display: none !important;
          }

          /* White Section Mobile Adjustments */
          .white-section {
            height: 3500px !important;
            padding: 20px !important;
          }

          .ai-companion-header {
            position: relative !important;
            left: 0 !important;
            transform: none !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            font-size: 28px !important;
            line-height: 35px !important;
            margin-bottom: 20px !important;
            padding: 0 10px !important;
          }

          .ai-companion-subtitle {
            position: relative !important;
            left: 0 !important;
            transform: none !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            font-size: 20px !important;
            line-height: 26px !important;
            margin-bottom: 40px !important;
            padding: 0 10px !important;
          }

          /* Phone Section Mobile */
          .phone-bg {
            position: relative !important;
            left: 0 !important;
            transform: none !important;
            top: 0 !important;
            width: 100% !important;
            height: 300px !important;
            min-height: 400px !important;
            margin: 0 0 60px 0 !important;
            padding: 30px 20px !important;
            box-sizing: border-box !important;
            border-radius: 30px !important;
            background: #E4F4FF !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }

          /* Hide decorative circles on mobile */
          .bg-circle-1, .bg-circle-2, .bg-circle-3,
          .feature-circle-1, .feature-circle-2, .feature-circle-3,
          .feature-circle-4, .feature-circle-5 {
            display: none !important;
          }

          .phone-image {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            transform: none !important;
            width: 200px !important;
            height: 247px !important;
            margin: 0 auto 20px !important;
          }

          .phone-image > div {
            top:-410px;
            margin-left: -200px;
            width: 200px !important;
            height: 400px !important;
          }

          .phone-text-container {
           
            margin: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .phone-title {
            position: relative !important;
            left: 90px !important;
            transform: none !important;
            top:-650px !important;
            width: 100% !important;
            height: auto !important;
            font-size: 22px !important;
            line-height: 26px !important;
            margin: 0 0 15px 0 !important;
            padding: 0 10px !important;
            text-align: center !important;
            color: #0F85E7 !important;
            font-family: 'Poppins' !important;
            font-weight: 700 !important;
          }

          .phone-description {
            position: relative !important;
           left: 100px !important;
            transform: none !important;
            top:-650px !important;
            width: 60% !important;
            height: auto !important;
            font-size: 18px !important;
            line-height: 30px !important;
            text-align: justify !important;
            margin: 0 !important;
            padding: 0 10px !important;
            color: #60676C !important;
            font-family: 'Poppins' !important;
            font-weight: 600 !important;
          }

          /* Love Section Mobile */
          .love-section {
            position: relative !important;
            left: 0 !important;
            top: -450px !important;
            width: 100% !important;
            margin: 40px 0 !important;
            padding: 0 10px !important;
          }

          .love-section span:first-child {
            font-size: 24px !important;
            line-height: 30px !important;
            display: block !important;
            margin-bottom: 10px !important;
          }

          .love-section span:last-child {
            font-size: 36px !important;
            line-height: 45px !important;
            display: block !important;
          }

          /* Feature Cards Mobile */
          .feature-cards-container {
            position: relative !important;
            left: 0 !important;
            top: -450px !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 20px !important;
            padding: 0 10px !important;
            margin-bottom: 40px !important;
          }

          .feature-card {
            width: 280px !important;
            height: 280px !important;
            padding: 20px !important;
            margin: 0 auto !important;
          }

          .feature-card > div {
            width: 60px !important;
            height: 60px !important;
          }

          .feature-card h4 {
            font-size: 22px !important;
            line-height: 28px !important;
            margin-bottom: 10px !important;
          }

          .feature-card p {
            font-size: 16px !important;
            line-height: 22px !important;
          }

          /* Video Container Mobile */
          .video-container {
            position: relative !important;
            left: 0 !important;
            transform: none !important;
            top: -400px !important;
            width: 100% !important;
            height: 300px !important;
            margin: 40px 0 !important;
            border-radius: 25px !important;
          }

          .video-container video {
            width :100%;
            height: 300px !important;
            border-radius: 25px !important;
          }

          .video-container h2 {
            font-size: 18px !important;
            line-height: 24px !important;
            padding: 0 20px !important;
          }

          .video-container div:last-child {
            border-radius: 0 0 25px 25px !important;
          }

          .chatbot-title {
            position: relative !important;
            left: 0 !important;
            transform: none !important;
            top: -400px !important;
            width: 100% !important;
            font-size: 28px !important;
            line-height: 35px !important;
            margin: 40px 0 30px 0 !important;
            padding: 0 10px !important;
          }

          /* Blue Section Mobile */
          .blue-bg {
            display: none !important;
          }

          .description-text {
            position: relative !important;
            left: 0 !important;
            transform: none !important;
            top: -460px !important;
            width: 100% !important;
            height: auto !important;
            font-size: 18px !important;
            line-height: 26px !important;
            margin: 0 0 40px 0 !important;
            padding: 20px !important;
            background: #A0D2FB !important;
            border-radius: 50px 0px !important;
            box-sizing: border-box !important;
          }

          /* Expert Section Mobile */
          .expert-container {
            position: relative !important;
            left: 0 !important;
            transform: none !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            gap: 30px !important;
            padding: 20px !important;
          }

          .therapist-image {
            width: 100% !important;
            max-width: 400px !important;
            height: 400px !important;
            margin: 0 auto !important;
          }

          .therapist-image > div {
            top: 0 !important;
            width: 100% !important;
            height: 400px !important;
          }

          .expert-text {
            padding: 0 !important;
          }

          .expert-title {
            font-size: 28px !important;
            line-height: 35px !important;
            margin-bottom: 20px !important;
          }

          .expert-description {
            font-size: 18px !important;
            line-height: 26px !important;
            margin-bottom: 50px !important;
          }

          .cta-button {
            width: 100% !important;
            max-width: 350px !important;
            height: 60px !important;
          }

          .cta-button span {
            font-size: 20px !important;
          }
        }

        /* Large Mobile - 540px to 640px */
        @media (max-width: 640px) and (min-width: 541px) {
          .hero-title {
            font-size: 30px !important;
            line-height: 38px !important;
          }

          .hero-subtitle {
            font-size: 17px !important;
            line-height: 23px !important;
          }

          .character-image {
            width: 230px !important;
            height: 345px !important;
          }

          .character-image > div {
            width: 230px !important;
            height: 322px !important;
          }

          .ai-companion-header {
            font-size: 26px !important;
            line-height: 32px !important;
          }

          .ai-companion-subtitle {
            font-size: 19px !important;
            line-height: 25px !important;
          }

          .phone-bg {
            min-height: 380px !important;
            padding: 28px 18px !important;
          }

          .phone-image {
            width: 180px !important;
            height: 222px !important;
          }

          .phone-image > div {
            width: 180px !important;
            height: 222px !important;
          }

          .phone-title {
            font-size: 19px !important;
            line-height: 25px !important;
          }

          .phone-description {
            font-size: 15px !important;
            line-height: 21px !important;
          }
        }

        /* Medium Mobile - 480px to 540px */
        @media (max-width: 540px) and (min-width: 481px) {
          .hero-title {
            font-size: 28px !important;
            line-height: 35px !important;
          }

          .hero-subtitle {
            font-size: 16px !important;
            line-height: 22px !important;
          }

          .character-image {
            width: 220px !important;
            height: 330px !important;
          }

          .character-image > div {
            width: 220px !important;
            height: 308px !important;
          }

          .ai-companion-header {
            font-size: 25px !important;
            line-height: 31px !important;
          }

          .ai-companion-subtitle {
            font-size: 18px !important;
            line-height: 24px !important;
          }

          .phone-bg {
            min-height: 370px !important;
            padding: 26px 16px !important;
          }

          .phone-image {
            width: 170px !important;
            height: 210px !important;
          }

          .phone-image > div {
            width: 170px !important;
            height: 210px !important;
          }

          .phone-title {
            font-size: 18px !important;
            line-height: 24px !important;
          }

          .phone-description {
            font-size: 14px !important;
            line-height: 20px !important;
          }

          .feature-card {
            width: 260px !important;
            height: 260px !important;
          }

          .feature-card > div {
            width: 50px !important;
            height: 50px !important;
          }
        }

        /* Small Mobile - 480px and below */
        @media (max-width: 480px) {
          .hero-title {
            font-size: 25px !important;
            line-height: 32px !important;
          }

          .hero-subtitle {
            font-size: 16px !important;
            line-height: 22px !important;
          }

          .character-image {
            width: 200px !important;
            height: 300px !important;
          }

          .character-image > div {
            width: 200px !important;
            height: 280px !important;
          }

          .ai-companion-header {
            font-size: 24px !important;
            line-height: 30px !important;
          }

          .ai-companion-subtitle {
            font-size: 18px !important;
            line-height: 24px !important;
          }

          .phone-bg {
            min-height: 350px !important;
            padding: 25px 15px !important;
            border-radius: 25px !important;
          }

          .phone-image {
            left: 120px !important;
            width: 150px !important;
            height: 250px !important;
            margin: 0 auto 15px !important;
          }

          .phone-image > div {
           left: -10px !important;
            top:-260px;
            width: 160px !important;
            height: 200px !important;
          }

          .phone-title {
            left: 10px !important;
            top:-620px !important;
            font-size: 20px !important;
            line-height: 25px !important;
            margin-bottom: 12px !important;
          }

          .phone-description {
            
            top:-600px !important;
            left: 70px !important;
            font-size: 13px !important;
            line-height: 18px !important;
          }

          .feature-card {
            width: 260px !important;
            height: 260px !important;
          }

          .feature-card > div {
            width: 50px !important;
            height: 50px !important;
          }

          .video-container {
            height: 280px !important;
            border-radius: 20px !important;
          }

          .video-container video {
            height: 280px !important;
            border-radius: 20px !important;
          }

          .video-container h2 {
            font-size: 16px !important;
            line-height: 20px !important;
          }

          .chatbot-title {
            font-size: 24px !important;
            line-height: 30px !important;
          }
          .blue-bg { display: none !important; }
          .description-text {
            top: -440px !important;
            font-size: 15px !important;
            line-height: 20px !important;
            padding: 16px !important;
            background: #A0D2FB !important;
            border-radius: 40px 0px !important;
          }

          .expert-title {
            font-size: 24px !important;
            line-height: 30px !important;
          }

          .therapist-image {
            max-width: 350px !important;
            height: 350px !important;
          }

          .therapist-image > div {
            top: 0 !important;
            width: 100% !important;
            height: 350px !important;
          }
            .cta-button {
            margin-bottom: 10px !important;
            height: 42px !important;
            max-width: 260px !important;
          }

        }

        

        /* iPhone 12/13/14 - 375px */
        @media (max-width: 375px){
          .hero-section {
            min-height: 520px !important;
            padding: 15px !important;
          }

          .logo-container {
            width: 260px !important;
            height: 55px !important;
            margin: 15px auto 10px auto !important;
          }

          .logo-container > div {
            width: 210px !important;
            height: 210px !important;
          }

          .hero-title {
            font-size: 24px !important;
            line-height: 30px !important;
            margin: 10px 0 !important;
          }

          .hero-subtitle {
            font-size: 14px !important;
            line-height: 20px !important;
            margin: 0 0 15px 0 !important;
          }

          .character-image {
            width: 190px !important;
            height: 285px !important;
          }

          .character-image > div {
            width: 190px !important;
            height: 266px !important;
          }

          .ai-companion-header {
            font-size: 22px !important;
            line-height: 28px !important;
            padding: 0 8px !important;
          }

          .ai-companion-subtitle {
            font-size: 16px !important;
            line-height: 22px !important;
            padding: 0 8px !important;
          }

          .phone-bg {
            min-height: 330px !important;
            padding: 22px 12px !important;
            border-radius: 22px !important;
          }

          .phone-image {
           top: 100px !important;
            width: 140px !important;
            height: 173px !important;
            margin: 0 auto 12px !important;
          }

          .phone-image > div {
            top:50px;
            width: 140px !important;
            height: 173px !important;
          }

          .phone-text-container {
            margin: 0 !important;
            text-align: center !important;
          }

          .phone-title {
            font-size: 16px !important;
            line-height: 22px !important;
            margin-bottom: 8px !important;
          }

          .phone-description {
            
            font-size: 12px !important;
            line-height: 18px !important;
          }

          .feature-card {
            width: 240px !important;
            height: 240px !important;
            padding: 12px !important;
          }

          .feature-card > div {
            width: 42px !important;
            height: 42px !important;
          }

          .feature-card h4 {
            font-size: 17px !important;
            line-height: 23px !important;
          }

          .feature-card p {
            font-size: 12px !important;
            line-height: 18px !important;
          }

          .love-section span:first-child {
            font-size: 20px !important;
            line-height: 26px !important;
          }

          .love-section span:last-child {
            font-size: 30px !important;
            line-height: 38px !important;
          }

          .video-container {
            height: 200px !important;
            border-radius: 18px !important;
          }

          .video-container video {
            height: 200px !important;
            border-radius: 18px !important;
          }

          .video-container h2 {
            font-size: 13px !important;
            line-height: 17px !important;
            padding: 0 8px !important;
          }

          .video-container div:last-child {
            border-radius: 0 0 18px 18px !important;
            height: 90px !important;
          }

          .chatbot-title {
            font-size: 25px !important;
            line-height: 28px !important;
            padding: 0 8px !important;
          }

          .description-text {
            font-size: 13px !important;
            line-height: 20px !important;
            padding: 12px !important;
          }

          .expert-title {
            font-size: 24px !important;
            line-height: 28px !important;
          }

          .expert-description {
            
            font-size: 15px !important;
            line-height: 20px !important;
          }

          .therapist-image {
            max-width: 300px !important;
            height: 300px !important;
          }

          .therapist-image > div {
            width: 100% !important;
            height: 300px !important;
          }

          .cta-button {
            height: 42px !important;
            max-width: 260px !important;
          }

          .cta-button span {
            font-size: 15px !important;
          }
        }

        /* Small Mobile - 360px */
        @media (max-width: 360px) {
          .hero-section {
            min-height: 500px !important;
            padding: 12px !important;
          }

          .logo-container {
            left: 37% !important;
            width: 240px !important;
            height: 50px !important;
            margin: 12px auto 8px auto !important;
          }

          .logo-container > div {
            width: 200px !important;
            height: 200px !important;
          }

          .hero-title {
            top: 50px !important;
            font-size: 22px !important;
            line-height: 28px !important;
            margin: 8px 0 !important;
          }

          .hero-subtitle {
            top: 70px !important;
            font-size: 14px !important;
            line-height: 20px !important;
            margin: 0 0 12px 0 !important;
          }

          .character-image {
            width: 180px !important;
            height: 270px !important;
          }

          .character-image > div {
            top: 100px;
            width: 180px !important;
            height: 252px !important;
          }

          .white-section{
          height :3200px !important;}
          .ai-companion-header {
            font-size: 22px !important;
            line-height: 28px !important;
            padding: 0 8px !important;
          }

          .ai-companion-subtitle {
            font-size: 16px !important;
            line-height: 22px !important;
            padding: 0 8px !important;
          }

          .phone-bg {
            min-height: 320px !important;
            padding: 20px 10px !important;
            border-radius: 15px !important;
          }

          .phone-image {
            width: 140px !important;
            height: 173px !important;
            margin: 0 auto 10px !important;
          }

          .phone-image > div {
            
            left: -10px !important;
            top: -345px !important;
            width: 140px !important;
            height: 183px !important;
          }

          .phone-title {
            top: -540px !important;
            left: 5px !important;
            font-size: 17px !important;
            line-height: 22px !important;
            margin-bottom: 10px !important;
          }

          .phone-description {
            top: -530px !important;
            left: 45px !important;
            font-size: 12px !important;
            line-height: 20px !important;
          }

          .feature-card {
          
            width: 240px !important;
            height: 240px !important;
          }

          .feature-card > div {
            width: 42px !important;
            height: 42px !important;
          }
            .love-section{
             top: -450px !important;
            }

          .love-section span:first-child {
            top: -480px !important;
            font-size: 20px !important;
            line-height: 26px !important;
          }

          .love-section span:last-child {
            
            font-size: 30px !important;
            line-height: 38px !important;
          }

          .video-container {
            height: 200px !important;
            border-radius: 18px !important;
          }

          .video-container video {
            height: 200px !important;
            border-radius: 18px !important;
          }

          .video-container h2 {
            font-size: 13px !important;
            line-height: 17px !important;
          }

          .chatbot-title {
            font-size: 22px !important;
            line-height: 28px !important;
          }

          .description-text {
            top: -420px !important;
            font-size: 13px !important;
            line-height: 22px !important;
            background: #A0D2FB !important;
            border-radius: 36px 0px !important;
          }

          .expert-title {
            top: -50px !important;
            font-size: 25px !important;
            line-height: 29px !important;
          }

          

          .therapist-image {
            max-width: 280px !important;
            height: 280px !important;
          }

          .therapist-image > div {
            top: -90px !important;
            width: 100% !important;
            height: 350px !important;
          }
            .expert-title {
            top: -500px !important;
            
            font-size: 25px !important;
            line-height: 29px !important;
          }

            .expert-description {
            top: -500px !important;
            font-size: 14px !important;
            line-height: 20px !important;
          }

        }

        /* Very Small Mobile - 320px */
        @media (max-width: 320px) {
          .hero-section {
            min-height: 480px !important;
            padding: 12px !important;
          }

          .white-section{
          height :2900px !important;
          }
          .logo-container {
            width: 220px !important;
            height: 50px !important;
            margin: 12px auto 8px auto !important;
          }

          .logo-container > div {
            width: 180px !important;
            height: 180px !important;
          }

          .hero-title {
            font-size: 20px !important;
            line-height: 26px !important;
            margin: 8px 0 !important;
          }

          .hero-subtitle {
            font-size: 12px !important;
            line-height: 18px !important;
            margin: 0 0 12px 0 !important;
          }

          .character-image {
            width: 160px !important;
            height: 240px !important;
          }

          .character-image > div {
            width: 160px !important;
            height: 224px !important;
          }

          .ai-companion-header {
            font-size: 20px !important;
            line-height: 26px !important;
            padding: 0 6px !important;
          }

          .ai-companion-subtitle {
            font-size: 14px !important;
            line-height: 20px !important;
            padding: 0 6px !important;
          }

          .phone-bg {
            min-height: 300px !important;
            padding: 18px 8px !important;
            border-radius: 18px !important;
          }

          .phone-image {
            width: 130px !important;
            height: 160px !important;
            margin: 0 auto 10px !important;
          }

          .phone-image > div {
            left:10px !important; 
            top:-320px !important; 
            width: 130px !important;  
            height: 160px !important;
          }


          .phone-title {
            top:-505px !important; 
            font-size: 14px !important;
            line-height: 20px !important;
            margin-bottom: 6px !important;
          }

          .phone-description {
            top:-490px !important; 
            font-size: 11px !important;
            line-height: 16px !important;
          }

          .love-section
          {
              top:-420px !important; 
              }


          .feature-card {
            top:-390px !important; 
            width: 220px !important;
            height: 220px !important;
            padding: 10px !important;
          }

          .feature-card > div {
            width: 38px !important;
            height: 38px !important;
          }

          .feature-card h4 {
            font-size: 15px !important;
            line-height: 21px !important;
          }

          .feature-card p {
            font-size: 11px !important;
            line-height: 16px !important;
          }

          .love-section {
            margin: 30px 0 !important;
          }

          .love-section span:first-child {
            font-size: 18px !important;
            line-height: 24px !important;
          }

          .love-section span:last-child {
            font-size: 26px !important;
            line-height: 34px !important;
          }

          .video-container {
            height: 180px !important;
            border-radius: 15px !important;
          }

          .video-container video {
            height: 180px !important;
            border-radius: 15px !important;
          }

          .video-container h2 {
            font-size: 12px !important;
            line-height: 16px !important;
            padding: 0 6px !important;
          }

          .video-container div:last-child {
            border-radius: 0 0 15px 15px !important;
            height: 80px !important;
          }

          .chatbot-title {
            font-size: 18px !important;
            line-height: 24px !important;
            padding: 0 6px !important;
          }

          .description-text {
            top:-650px !important;
            font-size: 12px !important;
            line-height: 18px !important;
            padding: 10px !important;
          }

          .expert-title {
            font-size: 18px !important;
            line-height: 24px !important;
          }

          .expert-description {
            font-size: 12px !important;
            line-height: 18px !important;
          }

          .therapist-image {
            top:-400px !important;
            max-width: 260px !important;
            height: 260px !important;
          }

          .therapist-image > div {
            top: 0 !important;
            width: 100% !important;
            height: 260px !important;
          }

          .cta-button {
            height: 38px !important;
            max-width: 220px !important;
          }

          .cta-button span {
            font-size: 13px !important;
          }
        }
      `}</style>
    </>
  );
};

export default SereinSoulPage;