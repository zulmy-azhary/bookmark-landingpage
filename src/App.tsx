import type { Component } from "solid-js";
import { Layout } from "./components/templates";
import { Navbar } from "./components/organisms";

const App: Component = () => {
  return (
    <Layout>
      <Navbar />
    </Layout>
  );
};

export default App;
