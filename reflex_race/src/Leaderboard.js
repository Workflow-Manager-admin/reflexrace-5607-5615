import React from "react";

/**
 * PUBLIC_INTERFACE
 * Leaderboard component for ReflexRace
 * Displays a list of top players and their best reaction times.
 * Uses mock/placeholder data.
 */
const MOCK_LEADERBOARD = [
  { name: "LightningJoe", time: 175 },
  { name: "SpeedySue", time: 182 },
  { name: "QuickNick", time: 192 },
  { name: "RapidRita", time: 204 },
  { name: "TurboTom", time: 209 },
  { name: "FlashFinn", time: 214 },
  { name: "SnappySal", time: 225 },
  { name: "SwiftSam", time: 229 },
  { name: "ZippyZoe", time: 233 },
  { name: "ReflexRex", time: 240 }
];

// PUBLIC_INTERFACE
function Leaderboard() {
  return (
    <div>
      <h3 style={{ marginTop: 0, color: "var(--kavia-orange)", marginBottom: 12, fontWeight: 600 }}>
        🏆 Leaderboard
      </h3>
      <ol style={{ paddingLeft: 18, margin: 0, color: "var(--text-secondary)", fontSize: "1.08rem" }}>
        {MOCK_LEADERBOARD.map((entry, idx) => (
          <li key={entry.name} style={{
            padding: "4px 0",
            fontWeight: idx === 0 ? 700 : 400,
            color: idx === 0 ? "var(--kavia-orange)" : "var(--text-secondary)",
            letterSpacing: "0.5px"
          }}>
            <span style={{ minWidth: 100, display: "inline-block" }}>
              {entry.name}
            </span>
            <span style={{
              fontFamily: "monospace",
              marginLeft: 6,
              color: "#fff",
              background: idx === 0 ? "rgba(232, 122, 65, 0.18)" : "transparent",
              borderRadius: 4,
              padding: "2px 6px",
              fontWeight: 600,
            }}>
              {entry.time} ms
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
