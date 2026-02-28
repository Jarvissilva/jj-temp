"use client"
import React, { useState } from "react"

export default function Page() {
  const [play, setPlay] = useState(false)

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh" 
    }}>
      
      {!play ? (
        <button 
          onClick={() => setPlay(true)}
          style={{
            padding: "15px 30px",
            fontSize: "20px",
            cursor: "pointer"
          }}
        >
          Click Me 👀
        </button>
      ) : (
        <>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Aq5WXmQQooo?autoplay=1"
          title="Rick Roll"
          allow="autoplay; encrypted-media"
          allowFullScreen
          ></iframe>
          <h1 className="mt-2">HE HE rick roolled</h1>
          </>
      )}

    </div>
  )
}