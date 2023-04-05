import type { Component } from "solid-js";
import { Layout } from "./components/templates";
import { Contact, Extension, FAQ, Features, Hero, Navbar } from "./components/organisms";

const App: Component = () => {
  return (
    <Layout>
      <Navbar />
      <main class="flex flex-col gap-y-40 md:gap-y-24">
        <Hero />
        <Features />
        <Extension />
        <FAQ />
        <Contact />
      </main>
    </Layout>
  );
};

export default App;
