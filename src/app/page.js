"use client"
import React, { useState, useEffect } from "react"

export default function Page() {
  const [stage, setStage] = useState("button") 
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (stage === "loading") {
      let value = 0
      const interval = setInterval(() => {
        value += 4
        setProgress(value)

        if (value >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setStage("video")
          }, 300)
        }
      }, 80)

      return () => clearInterval(interval)
    }
  }, [stage])

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      fontFamily: "sans-serif",
      color: "white"
    }}>
      
      {stage === "button" && (
        <button 
          onClick={() => setStage("loading")}
          style={{
            padding: "18px 40px",
            fontSize: "22px",
            fontWeight: "600",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
            color: "white",
            boxShadow: "0 10px 25px rgba(255,75,43,0.5)",
            transition: "all 0.3s ease"
          }}
          onMouseOver={e => {
            e.target.style.transform = "scale(1.08)"
            e.target.style.boxShadow = "0 15px 35px rgba(255,75,43,0.7)"
          }}
          onMouseOut={e => {
            e.target.style.transform = "scale(1)"
            e.target.style.boxShadow = "0 10px 25px rgba(255,75,43,0.5)"
          }}
          onMouseDown={e => {
            e.target.style.transform = "scale(0.95)"
          }}
          onMouseUp={e => {
            e.target.style.transform = "scale(1.08)"
          }}
        >
          🎁 Click Me
        </button>
      )}

      {stage === "loading" && (
        <div style={{ width: "300px", textAlign: "center" }}>
          <p style={{ marginBottom: "10px" }}>
            Preparing something special... 🚀
          </p>

          <div style={{
            height: "20px",
            width: "100%",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "10px",
            overflow: "hidden"
          }}>
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #00c6ff, #0072ff)",
              transition: "width 0.1s"
            }}></div>
          </div>

          <p style={{ marginTop: "8px" }}>{progress}%</p>
        </div>
      )}

      {stage === "video" && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Aq5WXmQQooo?autoplay=1"
          title="Rick Roll"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}

    </div>
  )
}