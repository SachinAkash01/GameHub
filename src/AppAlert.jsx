import Alert from "./components/Alert";

function App() {
  return (
    <div>
      {/* passing values as children to a component */}
      <Alert>
        {/* passing html content inside a component */}
        Hello <span>Sachin!</span>
      </Alert>
    </div>
  );
}

export default App;
