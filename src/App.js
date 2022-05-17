import "./styles/Global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import styles from "./styles/App.module.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className={styles.main}>
        <Hero />
        <Cards />
      </div>
    </div>
  );
}

export default App;
