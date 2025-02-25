import React, { lazy, Suspense } from "react";
import { useTheme } from "./hooks/useOptimizedContext";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
      <div
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1>Advanced React Patterns</h1>

        <nav>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px" }}>About</Link>
        </nav>

        <button onClick={toggleTheme}>Toggle Theme</button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<p>Loading About Page...</p>}>
                <About />
              </Suspense>
            }
          />
        </Routes>
      </div>
  );
};

export default App;
