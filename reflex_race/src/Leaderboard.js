import React from "react";
import styles from "./Leaderboard.module.css";

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
      <h3 className={styles.title}>
        🏆 Leaderboard
      </h3>
      <ol className={styles.leaderboardList}>
        {MOCK_LEADERBOARD.map((entry, idx) => (
          <li
            key={entry.name}
            className={idx === 0 ? styles.topScorer : styles.scorer}
            style={{
              animationDelay: `${idx * 55}ms`
            }}
          >
            <span className={styles.leaderName}>
              {entry.name}
            </span>
            <span className={styles.leaderTime}>
              {entry.time} ms
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
