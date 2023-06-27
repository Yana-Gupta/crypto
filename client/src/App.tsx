import {
  Navbar,
  Welcome,
  Footer,
  Transaction,
  Service,
  Loader,
} from "./components";

import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Loader />
      <p className="font-bold text-4xl">I am Yana</p>
      <Footer />
    </div>
  );
}

export default App;
