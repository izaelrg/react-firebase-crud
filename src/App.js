import './App.css';

import Links from "./components/Links";
import LinkForm from "./components/LinkForm";

function App() {
  return (
    <div className="container p-4">
      <h1>Whit Firebase!</h1>
      <div className="row">
        <LinkForm />
      </div>
      <Links />
    </div>
  );
}

export default App;
