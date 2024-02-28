import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* alert will be displayed only when the button is clicked */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Submission Completed!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Submit</Button>
    </div>
  );
}

export default App;
