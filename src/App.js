import "./App.css";
import Maincontent from "./Maincontent";
import Header from "./Header";
import Footer from "./Footer";


function App() {
  return (
    
    <div className="app">
      <Header className="header" />
      <hr />

      <Maincontent />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
