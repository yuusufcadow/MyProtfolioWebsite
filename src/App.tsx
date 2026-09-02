import {
  Route,
  Routes,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route
        element={
          <MainLayout />
        }
      >
        <Route
          path="/"
          element={
            <Home />
          }
        />

        <Route
          path="/about"
          element={
            <About />
          }
        />

        <Route
          path="/projects"
          element={
            <Projects />
          }
        />

        <Route
          path="/articles"
          element={
            <Articles />
          }
        />

        <Route
          path="/articles/:slug"
          element={
            <ArticleDetails />
          }
        />

        <Route
          path="/activities"
          element={
            <Activities />
          }
        />

        <Route
          path="/contact"
          element={
            <Contact />
          }
        />
      </Route>
    </Routes>
  );
}