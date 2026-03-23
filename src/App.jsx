
import PersonCard from "./components/PersonCard";
import Button from "./components/Button";
import WelcomeMessage from "./components/Greeting";

function App() {

  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <div>
      <h1>My React App</h1>

      {/* PersonCard Components */}
      <PersonCard name="Alice " age={2} occupation="Explorer" />
      <PersonCard name="Morgan " age={23} occupation="Developer" />
      <PersonCard name="Anthony" age={27} occupation="Designer" />

      {/* Button Components */}
      <Button text="Click Me" onClick={handleClick} />
      <Button text="Second Button" onClick={handleClick} />

      {/* Render Another Component Multiple Times */}
      <WelcomeMessage message="Welcome to the app!" />
      <WelcomeMessage message="Enjoy learning React!" />
    </div>
  );
}

export default App;