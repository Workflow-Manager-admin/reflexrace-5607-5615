import React, { useState, useRef } from "react";
import styles from "./ReactionTestGame.module.css";

/**
 * PUBLIC_INTERFACE
 * ReactionTestGame
 * A self-contained component for the ReflexRace reaction test game.
 * Allows users to start, wait for a random visual cue, stop the timer, and view results.
 */
function getRandomDelay(msMin = 1200, msMax = 3200) {
  // Returns a random delay between msMin and msMax ms
  return Math.floor(Math.random() * (msMax - msMin + 1)) + msMin;
}

const STAGES = {
  READY: "ready",      // Initial state, user can start the test
  WAITING: "waiting",  // Waiting for the cue (random time)
  REACT: "react",      // Show cue, user must react fast!
  RESULT: "result",    // Result shown
};

export default function ReactionTestGame() {
  const [stage, setStage] = useState(STAGES.READY);
  const [waitingMsg, setWaitingMsg] = useState("");
  const [resultMs, setResultMs] = useState(null); // Last result in ms
  const [history, setHistory] = useState([]);     // List of past results
  const timerRef = useRef(null);                  // Ref to hold timeouts & timestamps
  const startTimestamp = useRef(null);

  // PUBLIC_INTERFACE
  function startTest() {
    setStage(STAGES.WAITING);
    setWaitingMsg("");
    setResultMs(null);
    timerRef.current && clearTimeout(timerRef.current);
    // Random delay before cue
    const delay = getRandomDelay();
    timerRef.current = setTimeout(() => {
      setStage(STAGES.REACT);
      startTimestamp.current = Date.now();
    }, delay);
    setWaitingMsg("Wait for the vibrant signal...");
  }

  // PUBLIC_INTERFACE
  function handleUserTap() {
    if (stage === STAGES.WAITING) {
      // User clicked too soon!
      timerRef.current && clearTimeout(timerRef.current);
      setStage(STAGES.RESULT);
      setResultMs("too soon");
      setHistory(["too soon", ...history.slice(0, 9)]);
      return;
    }
    if (stage === STAGES.REACT) {
      // Measure reaction time
      const reactionTime = Date.now() - startTimestamp.current;
      setResultMs(reactionTime);
      setHistory([reactionTime, ...history.slice(0, 9)]);
      setStage(STAGES.RESULT);
    }
  }

  // PUBLIC_INTERFACE
  function resetTest() {
    timerRef.current && clearTimeout(timerRef.current);
    setStage(STAGES.READY);
    setResultMs(null);
    setWaitingMsg("");
    startTimestamp.current = null;
  }

  // Render logic depending on stage
  let mainContent;
  if (stage === STAGES.READY) {
    mainContent = (
      <>
        <div className={styles.description}>
          Test your reflexes! Tap <b>Start</b>, wait for the vibrant signal, then tap as fast as you can!
        </div>
        <button className={`${styles.coolBtn} ${styles.largeBtn}`} onClick={startTest}>
          Start Reaction Test
        </button>
      </>
    );
  } else if (stage === STAGES.WAITING) {
    mainContent = (
      <button
        className={`${styles.coolBtn} ${styles.largeBtn} ${styles.waitingBtn}`}
        onClick={handleUserTap}
        autoFocus
      >
        {waitingMsg}
      </button>
    );
  } else if (stage === STAGES.REACT) {
    mainContent = (
      <button
        className={`${styles.coolBtn} ${styles.largeBtn} ${styles.activeCueBtn}`}
        onClick={handleUserTap}
        autoFocus
      >
        TAP NOW!
      </button>
    );
  } else if (stage === STAGES.RESULT) {
    mainContent = (
      <>
        <div className={styles.resultLabel}>
          {resultMs === "too soon" ? "🚫 Too Soon!" : <>⏱️ {resultMs} ms</>}
        </div>
        <div className={styles.resultDescription}>
          {resultMs === "too soon"
            ? "You tapped before the signal appeared. Try again!"
            : "Your reaction time!"}
        </div>
        <button
          className={`${styles.coolBtn} ${styles.largeBtn}`}
          onClick={resetTest}
          style={{ marginRight: 12 }}
        >
          {resultMs === "too soon" ? "Try Again" : "Restart"}
        </button>
      </>
    );
  }

  return (
    <div className={styles.gameAreaCard}>
      <h2 className={styles.heading}>⚡ Reaction Test</h2>
      <div style={{ marginBottom: 30 }}>{mainContent}</div>
      <div>
        <h4 className={styles.pastResultsTitle}>Past Results</h4>
        <ul className={styles.resultsList}>
          {history.length === 0 ? (
            <li className={styles.resultsNone}>No results yet.</li>
          ) : (
            history.map((entry, idx) => (
              <li
                key={idx}
                className={
                  entry === "too soon" ? styles.resultBad : styles.resultGood
                }
              >
                {entry === "too soon"
                  ? "🚫 Too Soon!"
                  : entry + " ms"}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
