import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { Register } from "./pages/register/Register";

import { AuthContext } from "./context/AuthContext"
import { useContext } from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route exact path="/"
          element={user ? <Home /> : <Login />}
        />

        <Route exact path="/login"
          element={user ? <Home /> : <Login />}
        />

        <Route exact path="/register"
          element={user ? <Home /> : <Register />}
        />

        <Route exact path="/profile/:username"
          element={<Profile />}
        />
      </Routes>
    </Router>
  );
}

export default App;
