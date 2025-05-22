import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReactionTestGame from "./ReactionTestGame";
import Leaderboard from "./Leaderboard";

// Global styles with new vibrant palette and improved font
const GlobalStyle = createGlobalStyle`
  :root {
    --cool-blue: #28C7FA;
    --vivid-indigo: #5B4BFF;
    --turquoise: #00F2C3;
    --deep-purple: #5433FF;
    --hot-pink: #FF54B6;
    --dark-bg: #101527;
    --card-bg: rgba(40, 199, 250, 0.12);
    --text-primary: #ffffff;
    --text-secondary: rgba(255,255,255,0.78);
    --border-color: rgba(89,158,194,0.16);
    --glow: 0 0 24px 2px var(--cool-blue);
  }

  body {
    background: linear-gradient(135deg, var(--deep-purple) 0%, var(--cool-blue) 60%, var(--turquoise) 100%);
    background-attachment: fixed;
    color: var(--text-primary);
    min-height: 100vh;
    font-family: 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }
`;

const MainBackground = styled.div`
  min-height: 100vh;
  background: none;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModernNavbar = styled.nav`
  background: linear-gradient(90deg, var(--deep-purple), var(--vivid-indigo));
  box-shadow: 0 2px 12px -2px #19197085;
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
  background: linear-gradient(135deg, var(--card-bg), rgba(91, 75, 255, 0.22) 90%);
  border-radius: 20px;
  padding: 32px 24px;
  box-shadow: 0 8px 32px -8px #28C7FA30;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  border: 1.5px solid var(--border-color);
  transition: box-shadow 0.2s;

  &:hover, &:focus-within {
    box-shadow: 0 12px 56px -10px #5B4BFF80, 0 0 0 3px var(--hot-pink, #FF54B6)22;
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
  background: linear-gradient(112deg, rgba(0,242,195,0.14), var(--card-bg) 68%);
  padding: 18px;
  border-radius: 14px;
  min-height: 140px;
  box-shadow: 0 1px 18px -4px #5433FF30, 0 0 8px #28C7FA24 inset;
  border: 1.3px solid var(--border-color);
  margin-bottom: 8px;
  transition: transform 0.18s;
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 28px -6px #00F2C3AA;
  }
`;

const PerformancePlaceholder = styled(StylishCard)`
  min-height: 115px;
`;

const PerfHeading = styled.h3`
  margin-top: 0;
  color: var(--turquoise);
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
