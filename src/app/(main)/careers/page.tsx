"use client";
import { Heading, Text, Button, Column, RevealFx } from "@once-ui-system/core";
import React from "react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import JobCard from "@/components/JobCard";
import ViewMoreButton from "@/components/ViewMoreButton";

export default function Careers() {
  const { isMobile, isTablet } = useDeviceDetect();
  const jobListings = [
    {
      title: "AI Research Engineer (PhD / PhD Pursuing)",
      description: "ZenturioTech is seeking a highly motivated AI Research Engineer with a strong research background, ideally holding or currently pursuing a PhD in Artificial Intelligence, Machine Learning, or related disciplines. This role involves cutting-edge research, development and optimization of AI models for real-time, embedded and edge platforms. You will work on advanced AI projects that integrate deep learning with hardware platforms such as NVIDIA Jetson, STM32 and other embedded devices.",
      link: "https://technopark.in/job-details/21700?job=AI%20Research%20Engineer"
    },
    {
      title: "Junior AI Engineer",
      description: "ZenturioTech is looking for a passionate and self-driven Junior AI Engineer to support the development and optimization of AI models for real-time embedded platforms. This is an excellent opportunity to work hands-on with cutting-edge AI frameworks and edge devices while learning from experienced professionals.",
      link: "https://technopark.in/job-details/21293?job=Junior%20AI%20Engineer"
    }
  ];

  return (
    <>
    <div style={{ minHeight: "100vh", width: "100%", background: "transparent" }}>
      {/* TOP HERO SECTION - Girl with Laptop Overlapping Box */}
      <div style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        marginTop: 30,
        marginBottom: 40,
        minHeight: 380,
      }}>
        {/* Large white 'Careers' heading */}
        <div style={{
          textAlign: "center",
          fontSize: 64,
          fontWeight: 400,
          color: "#fff",
          marginBottom: 18,
          letterSpacing: 0.5,
        }}>
          Careers
        </div>
        {/* Blue rounded box with image inside on the left */}
        <div className="careers-hero-box" style={{
          background: "rgba(62, 90, 122, 0.84)",
          borderRadius: "2.2rem",
          boxShadow: "0 8px 40px 0 rgba(7, 37, 73, 0.5), 0 0 0 2pxrgba(25, 118, 210, 0) inset",
          minHeight: 260,
          maxHeight: 400,
          display: "flex",
          alignItems: "center",
          position: "relative",
          marginBottom: 100,
          zIndex: 1,
          overflow: "visible",
        }}>
          {/* Girl with Laptop - inside the box, left side, vertically centered */}
          <img
            src="/images/girllap.png"
            alt="Careers Hero"
            className="careers-hero-img"
            style={{
              height: 620,
              width: "auto",
              objectFit: "contain",
              borderRadius: "2rem",
              marginRight: -35,
              flexShrink: 0,
              paddingBottom: 108,
              paddingLeft: 0,
            }}
          />
          {/* Text Content */}
          <div className="careers-hero-text" style={{ color: "#fff", maxWidth: 800, fontSize: 17, lineHeight: 1.7, wordBreak: "break-word", whiteSpace: "pre-line", marginLeft: 0 ,marginRight: 50}}>
            <div style={{ fontSize: 35, fontWeight: 500, marginBottom: 12, color: "#fff" }}>
              Why work at <span style={{ color: "#60a5fa" }}>Zenturiotech?</span>
            </div>
            <div style={{ fontSize: 20, opacity: 0.97, lineHeight: 1.7, textAlign: "justify" }}>
            At ZenturioTech, we're building more than products- we're building a movement. A movement led by passion, powered by a go-getter attitude and sustained by a team that thrives on purpose, creativity and impact.
            </div>
            <div style={{ fontSize: 20, opacity: 0.97, lineHeight: 1.7, textAlign: "justify" }}>
            Here, every challenge is an opportunity and every voice truly matters. We believe in problem-solvers over titles and in cultivating a growth mindset that fuels both personal and professional evolution.
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION 2 - Two Girls as Background, Text Overlay */}
      <div className="careers-hero-section-2" style={{
        width: "100%",
        maxWidth: 1200,
        top: -50,
        margin: "0 auto 2.5rem auto",
        minHeight: 450,
        borderRadius: "2.2rem",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 32px 0 rgba(7,37,73,0.18)",
        display: "flex",
        alignItems: "center",
        background: "none",
        marginBottom: 5,
      }}>
        {/* Background image with dark overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 2,
          width: "100%",
          height: "100%",
          zIndex: 1,
          borderRadius: "2.2rem",
          overflow: "hidden",
        }}>
          <img
            src="/images/car.jpeg"
            alt="Teamwork"
            style={{
              width: "100%",
              height: "170%",
              objectFit: "cover",
              objectPosition: "center 30%",
              borderRadius: "2.2rem",
              display: "block",
            }}
          />
          {/* Dark overlay for contrast */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(10,44,82,0.28)",
            borderRadius: "2.2rem",
          }} />
        </div>
        
        {/* Text Content (without glass card styling) */}
        <div style={{
          position: "relative",
          zIndex: 2,
          marginLeft: "auto",
          marginRight: 20,
          width: 520,
          maxWidth: "90%",
          color: "#000",
          padding: "2.2rem",
        }}>
         <div style={{ fontSize: 'clamp(22px, 4vw, 26px)', fontWeight: 600, marginBottom: 25, textAlign: "center" }}>
            What makes us different?
          </div>
          <div style={{ fontSize: 'clamp(15px, 3vw, 17px)', textAlign: "left" ,marginBottom: 20}}>
          • Self-motivated individuals who take ownership
          </div>
          <div style={{ fontSize: 'clamp(15px, 3vw, 17px)', textAlign: "left",marginBottom: 20 }}>
          • Collaborative spirits who believe in the power of team
          </div>
          <div style={{ fontSize: 'clamp(15px, 3vw, 17px)', textAlign: "left" ,marginBottom: 20}}>
          • Courageous thinkers who speak up and stand out
          </div>
          <div style={{ fontSize: 'clamp(15px, 3vw, 17px)', textAlign: "left", marginBottom: 20 }}>
          With global collaborations, cutting-edge projects and a culture that celebrates ideas, ZenturioTech is where your ambition meets its playground.
          </div>
          <div style={{ fontSize: 'clamp(15px, 3vw, 17px)', textAlign: "left", marginBottom: 20 }}>
          Bring your energy. Find your voice. Shape the future with us.
          </div>
        </div>
      </div>

      {/* CURRENT OPENINGS - Moved up with reduced top margin */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2vw" }}>
        <div style={{ fontSize: 38, fontWeight: 500, color: "#fff", margin: "0rem 0 1.5rem 0" }}>
          Current Openings
        </div>
        {/* Job Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {jobListings.map((job, index) => (
            <div key={index} style={{
              maxWidth: "100%",
              backgroundColor: "rgba(70, 90, 122, 0.25)",
              borderRadius: "1.5rem",
              padding: "2rem",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
            }}>
              <a 
                href={job.link} 
                className="job-title-link"
                style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "#fff",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "1rem"
                }}
              >
                • {job.title}
              </a>
              <p style={{ color: "#e5e7eb", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                {job.description}
              </p>
              <a 
                href={job.link}
                style={{
                  display: "inline-block",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "background-color 0.2s"
                }}
              >
                View Openings
              </a>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
          <ViewMoreButton />
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 1070px) {
        .careers-hero-box {
          flex-direction: column !important;
          align-items: center !important;
          max-height: none !important;
          padding: 1.2rem 1.2rem 1.2rem 1.2rem !important;
          margin-left: 1.2rem !important;
          margin-right: 1.2rem !important;
        }
        .careers-hero-img {
          height: 180px !important;
          width: 100% !important;
          max-width: 320px !important;
          margin: 0 auto 18px auto !important;
          display: block !important;
          padding-bottom: 0 !important;
        }
        .careers-hero-text {
          margin: 0 !important;
          max-width: 100% !important;
          font-size: 15px !important;
          text-align: center !important;
        }
        .careers-hero-section-2 {
          flex-direction: column !important;
          min-height: 220px !important;
          margin-bottom: 48px !important;
          margin-left: 1.5rem !important;
          margin-right: 1.5rem !important;
          width: calc(100% - 3rem) !important;
          box-sizing: border-box !important; 
        }
        .careers-openings {
          padding: 0 1vw !important;
        }
        .careers-job-card {
          font-size: 15px !important;
          padding: 1rem !important;
        }
      }

      @media (max-width: 480px) {
        .careers-glass-card {
          padding: 1.2rem !important;
        }
      }
      
      /* Hover effect for job titles */
      .job-title-link {
        transition: color 0.2s ease, text-decoration 0.2s ease;
      }
    `}</style>
    </>
  );
}