import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReactionTestGame from "./ReactionTestGame";
import Leaderboard from "./Leaderboard";

/* PUBLIC_INTERFACE
 * MainContainer: Luminous, cool, supergradient UI styling ♒️
 */
const GlobalStyle = createGlobalStyle`
  :root {
    --cool-blue: #72dbf8;
    --turquoise: #7fffd4;
    --mint: #adffe7;
    --sky: #b2e6fb;
    --soft-violet: #b0bbff;
    --teal: #51e0c5;
    --azure: #89f1fe;
    --lilac: #c9bfff;
    --gradient-blue-cyan: linear-gradient(130deg, #aaf1ff 0%, #89f1fe 47%, #b7ffe5 100%);
    --gradient-violet-sky: linear-gradient(110deg, #d5e2ff 0%, #b0bbff 54%, #adffe7 100%);
    --gradient-mint-teal: linear-gradient(107deg, #7fffd4 9%, #51e0c5 58%, #b2e6fb 100%);
    --text-primary: #263140;
    --text-secondary: #42647d;
    --border-color: #e4faff;
    --card-bg: linear-gradient(130deg, #fafdff 0%, #c6f9f2 100%);
    --glow: 0 0 16px 2px #89f1fe80;
  }

  body {
    background: var(--gradient-blue-cyan);
    background-attachment: fixed;
    color: var(--text-primary);
    min-height: 100vh;
    font-family: 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }
`;

const MainBackground = styled.div`
  min-height: 100vh;
  /* No dark backgrounds; radiant, airy look */
  background: var(--gradient-blue-cyan);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModernNavbar = styled.nav`
  background: var(--gradient-violet-sky);
  box-shadow: 0 2px 12px -2px #d3f8ff56;
  padding: 20px 0;
  display: flex;
  align-items: center;
  width: 100vw;
  border-bottom: 1.5px solid var(--border-color);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  min-height: 64px;
`;

const NavbarContent = styled.div`
  max-width: 1070px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 34px;
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  letter-spacing: 1px;

  .logo-symbol {
    color: var(--cool-blue);
    font-size: 2rem;
    filter: drop-shadow(0 0 10px #28C7FA99);
    font-family: monospace;
  }
`;

const NavbarButton = styled.button`
  background: linear-gradient(92deg, var(--hot-pink) 0%, var(--cool-blue) 100%);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 8px 26px;
  font-size: 1.02rem;
  font-weight: 600;
  box-shadow: 0 2px 16px -4px #28C7FAA9;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, background 0.18s;
  &:hover, &:focus {
    background: linear-gradient(100deg, var(--vivid-indigo) 10%, var(--cool-blue) 86%);
    transform: translateY(-2px) scale(1.045);
    box-shadow: 0 6px 24px -6px #28C7FAA9;
    outline: none;
  }
`;

const MainContent = styled.main`
  width: 100%;
  min-height: 650px;
  margin-top: 90px;
  max-width: 1100px;
  display: flex;
  gap: 32px;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 110px;
  }
`;

const GameCardSection = styled.section`
  flex: 2;
  min-width: 320px;
  min-height: 340px;
  background: var(--gradient-mint-teal);
  border-radius: 24px;
  padding: 34px 24px;
  box-shadow: 0 8px 32px -8px #72dbf823;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  border: 1.7px solid var(--border-color);
  transition: box-shadow 0.2s;
  &:hover, &:focus-within {
    box-shadow: 0 16px 56px -10px #b0bbff62, 0 0 0 3px #7fffd441;
  }
`;

const Sidebar = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 250px;
`;

const StylishCard = styled.div`
  background: var(--gradient-violet-sky);
  padding: 22px;
  border-radius: 17px;
  min-height: 140px;
  box-shadow: 0 1px 18px -4px #b2e6fb38, 0 0 16px #b0bbff16 inset;
  border: 1.3px solid var(--border-color);
  margin-bottom: 8px;
  transition: transform 0.18s;
  &:hover {
    transform: translateY(-2.5px) scale(1.026);
    box-shadow: 0 8px 28px -6px #aceeeebb;
  }
`;

const PerformancePlaceholder = styled(StylishCard)`
  min-height: 115px;
  background: var(--gradient-blue-cyan);
`;

const PerfHeading = styled.h3`
  margin-top: 0;
  color: #51e0c5;
  letter-spacing: 1.5px;
`;

const PerfText = styled.div`
  color: var(--text-secondary);
  font-style: italic;
`;

function MainContainer() {
  return (
    <>
      <GlobalStyle />
      <MainBackground>
        <ModernNavbar>
          <NavbarContent>
            <Logo>
              <span className="logo-symbol">★</span> ReflexRace
            </Logo>
            <NavbarButton>Info</NavbarButton>
          </NavbarContent>
        </ModernNavbar>

        <MainContent>
          <GameCardSection aria-label="Game Area">
            <ReactionTestGame />
          </GameCardSection>

          <Sidebar aria-label="Leaderboard and Performance">
            <StylishCard>
              <Leaderboard />
            </StylishCard>
            <PerformancePlaceholder>
              <PerfHeading>📊 Performance</PerfHeading>
              <PerfText>Your game stats and performance tracking coming soon.</PerfText>
            </PerformancePlaceholder>
          </Sidebar>
        </MainContent>
      </MainBackground>
    </>
  );
}

export default MainContainer;
