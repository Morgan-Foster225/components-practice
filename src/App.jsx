
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
      <PersonCard name="Alice Wonderland" age={25} occupation="Explorer" />
      <PersonCard name="Bob Smith" age={30} occupation="Developer" />
      <PersonCard name="Charlie Brown" age={28} occupation="Designer" />

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