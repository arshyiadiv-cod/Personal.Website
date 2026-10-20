import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";
import "../component.css/App.css";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
