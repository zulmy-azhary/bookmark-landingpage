import type { Component } from "solid-js";
import { Layout } from "./components/templates";
import { Hero, Navbar } from "./components/organisms";

const App: Component = () => {
  return (
    <Layout>
      <Navbar />
      <main>
        <Hero />
      </main>
    </Layout>
  );
};

export default App;
