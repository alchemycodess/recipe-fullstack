import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Subscribe } from "./components/Subscribe";

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
