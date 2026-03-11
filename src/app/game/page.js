"use client";
import { useEffect, useRef } from "react";

export default function Page() {
  const snake = useRef();

  document.addEventListener

  useEffect(() => {
    const snakeElement = snake.current;
    console.log(snakeElement);
  }


);

  return (
    <main className="bg-white text-black flex items-center justify-center h-screen">
      <div className="relative w-90 h-90 border mx-auto">
        <span
          ref={snake}
          id="snake"
          className="absolute bg-green-500 p-5 rounded-md "
        >
          @
        </span>
      </div>
    </main>
  );
}
