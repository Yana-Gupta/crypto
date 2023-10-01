import { Navbar, Welcome, Footer, Transaction, Service } from './components';

import './index.css';

function App() {
  return (
    <>

      <div className="min-h-screen">

        <div className="gradient-bg-welcome sm:px-8 md:px-0 ">
          <div className=' sticky top-0 z-[9999] backdrop-blur-sm'>
            <Navbar />
          </div>
          <Welcome />
        </div>
          <Service />
          <Transaction />
          <Footer />
      </div>
    </>
  );
}

export default App;
