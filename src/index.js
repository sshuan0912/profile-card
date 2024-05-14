import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="证件照.jpeg" alt="Jessica" />;
}

function Intro() {
  return (
    <div>
      <h1> Shanshan Huan </h1>
      <p>
        Java Full Stack Developer. Georgia Tech graduate majoring in computer
        science. I like hiking, swimming and traveling to explore the world.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Java" emoji="💪🏻" color="blue" />
      <Skill name="JavaScript" emoji="💪🏻" color="yellow" />
      <Skill name="Python" emoji="💪🏻" color="red" />
      <Skill name="SQL" emoji="👋🏻" color="orange" />
      <Skill name="Spring Boot" emoji="👋🏻" color="green" />
      <Skill name="React" emoji="👋🏻" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
