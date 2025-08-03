import React, { useState } from "react";
import "./index.css";

const DemoPage = () => {
  const [input, setInput] = useState("");
  const [showNotif, setShowNotif] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 font-mono bg-base text-default space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-primary">Cyberpunk UI Demo</h1>
        <p className="text-muted">Experience the neon theme in a real interface.</p>
      </header>

      {/* Notification Bar */}
      <div
        className={`
          transition-all duration-500 ease-out transform
          ${showNotif ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
          flex items-center font-bold rounded px-6 py-3 bg-linear-(--gradient-accent) 
          text-base shadow-lg-accent max-w-xl w-full
        `}
      >
        <span className="flex-1">Success! Your cyberpunk action was completed.</span>
        <button
          className="ml-4 text-xl font-bold bg-none border-none text-bg-base cursor-pointer"
          onClick={() => setShowNotif(false)}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>

      {/* Interactive Card */}
      <section
        className="
          rounded-xl p-8 max-w-xl bg-surface border-2 border-border-default 
          shadow-secondary hover:shadow-lg-accent
          space-y-6 text-center transition-shadow duration-300
        "
      >
        <h2 className="text-2xl font-semibold text-secondary">Interactive Card</h2>
        <p>This card demonstrates focus/hover/active styles on inputs and buttons.</p>

        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
            w-full px-4 py-2 rounded border-2 border-accent bg-base text-default shadow-input-accent
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-accent focus:shadow-lg-accent
            active:bg-surface
          "
        />

        <button
          className="
            w-full py-3 rounded font-bold text-lg cursor-pointer uppercase tracking-wider
            bg-linear-(--gradient-accent) text-bg-base shadow-primary border-none
            transition-all duration-300 ease-in-out transform
            hover:shadow-lg-accent hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-accent
            active:scale-95 active:shadow-inner
          "
          onClick={() => setShowNotif(true)}
        >
          Neon Action
        </button>
      </section>

      {/* Error Message */}
      <div className="rounded px-6 py-3 font-bold shadow-error max-w-md bg-error text-bg-base text-center">
        <span>Oops! This is an error message.</span>
      </div>
    </div>
  );
};

export default DemoPage;
