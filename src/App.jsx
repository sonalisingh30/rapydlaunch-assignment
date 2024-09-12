import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllResutPage from "./pages/AllResutPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Routes>
          <Route path="/results" element={<AllResutPage />} />
          <Route path="/" element={<SearchPage />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
