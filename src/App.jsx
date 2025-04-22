// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import EmotionChart from "./pages/EmotionChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div className="p-8 text-slate-700 text-lg">
                👉 왼쪽 메뉴에서 감정 카테고리를 선택해 BGM을 추천받아보세요.
              </div>
            }
          />
          <Route path="/chart/:emotion" element={<EmotionChart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
