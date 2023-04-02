import Footer from "./component/Footer";
import Header from "./component/Header";
import SongState from "./context/songState";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <SongState>
        <Header />
        <Home />
        <Footer />
      </SongState>
    </>
  );
}

export default App;
