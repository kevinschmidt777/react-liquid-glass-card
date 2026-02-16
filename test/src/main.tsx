import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LiquidGlassCard } from "../../src";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      style={{
        height: "1080px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(https://picsum.photos/seed/picsum/1920/1080)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "50%",
        }}
      >
        <LiquidGlassCard>
          <h1>Liquid Glass Card</h1>
          <p>This is a liquid glass card component.</p>
        </LiquidGlassCard>
      </div>
    </div>
  </StrictMode>,
);
