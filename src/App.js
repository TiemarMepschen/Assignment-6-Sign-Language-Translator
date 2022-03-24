import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./Views/LoginView";
import TranslationView from "./Views/TranslationView"
import RoutePrivate from "./Utils/RoutePrivate";
import ProfileView from "./Views/ProfileView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* helps to toggle between different routes */}
        <Routes>
          {/* add exact so that switch checks if the path matches '/  exactly*/}
          <Route path="/" exact element={<LoginView />} />
          <Route path="/translation" element={<RoutePrivate><TranslationView /></RoutePrivate>} />
          <Route path="/profile" element={<RoutePrivate><ProfileView /></RoutePrivate>} />
          <Route path="*" element={<LoginView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
