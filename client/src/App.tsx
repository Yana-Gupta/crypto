import { Navbar, Welcome, Footer, Transaction, Service } from './components';

import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Service />
      <Transaction />
      <Footer />
    </div>
  );
}

export default App;
