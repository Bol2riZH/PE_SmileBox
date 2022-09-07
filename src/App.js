import React from "react";

import Modal from "./components/UI/Modal";
import Header from "./components/Layout/Header";
import AddSmile from "./components/Smiles/AddSmile";
import SmilesList from "./components/Smiles/SmilesList";

function App() {
  return (
    <>
      <Modal />
      <Header />
      <AddSmile />
      <main>
        <SmilesList />
      </main>
    </>
  );
}

export default App;
