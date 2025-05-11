import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Movies } from "./Components/Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Watchlist } from "./Components/Watchlist";
import { Provider } from "react-redux";
import store from "./Store/Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
