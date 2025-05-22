import React from "react";
import "./App.css";
import ReactionTestGame from "./ReactionTestGame";
import Leaderboard from "./Leaderboard";

/**
 * PUBLIC_INTERFACE
 * MainContainer for ReflexRace
 * The primary container that organizes the ReflexRace web application layout.
 * Features: Dedicated spaces for the game area, leaderboard, and performance tracking.
 * This is an extensible foundation for future enhancements and integration.
 */
function MainContainer() {
  return (
    <div className="reflexrace-main-container" style={{
      minHeight: "100vh",
      paddingTop: "96px",
      background: "var(--kavia-dark)",
      color: "var(--text-color)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {/* NAV */}
      <nav className="navbar">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div className="logo">
            <span className="logo-symbol">*</span> ReflexRace
          </div>
          <div>
            {/* Placeholder for possible future controls */}
            <button className="btn">Info</button>
          </div>
        </div>
      </nav>

      {/* CORE LAYOUT */}
      <main className="container" style={{ width: "100%", maxWidth: 1000, marginTop: 40, display: "flex", gap: 32 }}>
        {/* GAME SECTION */}
        <section
          aria-label="Game Area"
          style={{
            flex: 2,
            minHeight: 340,
            background: "rgba(255,255,255,0.03)",
            borderRadius: 12,
            padding: 24,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReactionTestGame />
        </section>

        {/* SIDEBAR: Leaderboard and Performance */}
        <aside
          aria-label="Leaderboard and Performance"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Leaderboard Placeholder */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              padding: 18,
              borderRadius: 10,
              minHeight: 150,
              boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
              marginBottom: 8,
            }}
          >
            <h3 style={{ marginTop: 0, color: "var(--kavia-orange)" }}>🏆 Leaderboard</h3>
            <div style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
              Leaderboard will be shown here.<br />
              (Feature coming soon)
            </div>
          </div>
          {/* Performance Tracking Placeholder */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              padding: 18,
              borderRadius: 10,
              minHeight: 100,
              boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
            }}
          >
            <h3 style={{ marginTop: 0, color: "var(--kavia-orange)" }}>📊 Performance</h3>
            <div style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
              Your game stats and performance tracking coming soon.
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default MainContainer;
