"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const buttonRef = useRef(null);
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState("Don’t click the button.");

  const messages = [
    "You had ONE job.",
    "Bankai: Katen kyokotsu karamatsu shinjyuu",
    "Bankai: Zanka no tachi",
    "Bankai: Senbonzakura kageyoshi",
    "This is why bugs exist.",
    "Stop. Get some help.",
    "Are you proud of this?",
    "I can do this all day.",
  ];

  useEffect(() => {
    moveButton();
  }, []);

  function moveButton() {
    if (!buttonRef.current) return;

    const btn = buttonRef.current;
    const maxX = window.innerWidth - 160;
    const maxY = window.innerHeight - 80;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  }

  function handleMouseEnter() {
    moveButton();
  }

  function handleClick() {
    setClicks((c) => c + 1);
    setMessage(messages[Math.floor(Math.random() * messages.length)]);

    document.body.classList.add("shake");
    document.body.style.background = `hsl(${Math.random() * 360}, 40%, 15%)`;

    setTimeout(() => {
      document.body.classList.remove("shake");
    }, 300);
  }

  return (
    <>
      <main className="container">
        <h1>🚫 Do Not Click</h1>
        <p>{message}</p>
        <p>
          Clicks: <strong>{clicks}</strong>
        </p>
      </main>

      <button
        ref={buttonRef}
        className="chaos-btn"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        DON’T CLICK
      </button>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          pointer-events: none;
        }

        h1 {
          margin-bottom: 8px;
        }

        p {
          opacity: 0.85;
        }

        .chaos-btn {
          position: fixed;
          padding: 16px 28px;
          font-size: 18px;
          border: none;
          border-radius: 14px;
          background: #ff4757;
          color: white;
          cursor: pointer;
          z-index: 10;
        }

        :global(.shake) {
          animation: shake 0.3s;
        }

        @keyframes shake {
          0% {
            transform: translate(0);
          }
          25% {
            transform: translate(-5px, 5px);
          }
          50% {
            transform: translate(5px, -5px);
          }
          75% {
            transform: translate(-5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </>
  );
}
