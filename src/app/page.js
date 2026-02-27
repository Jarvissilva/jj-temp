"use client";

import { useEffect, useRef, useState } from "react";

export default function Observed() {
  const startTime = useRef(Date.now());
  const lastMove = useRef(Date.now());
  const clicks = useRef(0);
  const moves = useRef(0);
  const idleTimer = useRef(null);

  const [message, setMessage] = useState("We are observing.");
  const [ended, setEnded] = useState(false);
  const [ending, setEnding] = useState(null);

  useEffect(() => {
    const onMove = () => {
      moves.current++;
      lastMove.current = Date.now();
    };

    const onClick = () => {
      clicks.current++;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    idleTimer.current = setInterval(checkState, 1500);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      clearInterval(idleTimer.current);
    };
  }, []);

  function checkState() {
    if (ended) return;

    const now = Date.now();
    const idleTime = now - lastMove.current;
    const totalTime = now - startTime.current;

    // Idle behavior
    if (idleTime > 7000) {
      setMessage("Waiting won’t help.");
    }

    // Rage clicking
    if (clicks.current > 15 && totalTime < 20000) {
      finish("THE PANICKER", "You tried to force control.");
    }

    // Calm observer
    if (totalTime > 30000 && clicks.current < 5 && moves.current < 50) {
      finish("THE OBSERVER", "You stayed calm under observation.");
    }

    // Chaos behavior
    if (moves.current > 300 && clicks.current > 10) {
      finish("THE REBEL", "You tried to confuse the system.");
    }

    // Escape
    if (totalTime > 45000 && clicks.current === 0) {
      finish("THE ESCAPE ARTIST", "You refused to play.");
    }

    // Subtle psychological nudges
    if (totalTime > 10000 && !ended) {
      setMessage(randomThought());
    }
  }

  function finish(type, description) {
    setEnded(true);
    setEnding({ type, description });
    setMessage("Analysis complete.");
  }

  function randomThought() {
    const thoughts = [
      "Why are you still here?",
      "You hesitate more than most.",
      "You are aware of yourself.",
      "You think there is a trick.",
      "There is no goal.",
      "Your behavior is noted.",
    ];
    return thoughts[Math.floor(Math.random() * thoughts.length)];
  }

  return (
    <main className="container">
      {!ended ? (
        <>
          <h1>{message}</h1>
          <p className="hint">(There are no instructions.)</p>
        </>
      ) : (
        <>
          <h1>{ending.type}</h1>
          <p>{ending.description}</p>
          <p className="small">
            Time observed: {Math.floor((Date.now() - startTime.current) / 1000)}
            s
          </p>
        </>
      )}

      <style jsx>{`
        .container {
          height: 100vh;
          background: radial-gradient(circle at center, #111, #000);
          color: #eaeaea;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          user-select: none;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 12px;
          letter-spacing: 0.04em;
        }

        p {
          opacity: 0.75;
          max-width: 420px;
        }

        .hint {
          font-size: 0.85rem;
          opacity: 0.4;
        }

        .small {
          font-size: 0.8rem;
          margin-top: 20px;
          opacity: 0.5;
        }
      `}</style>
    </main>
  );
}
