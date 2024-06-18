// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// ------------------------------------------------------------------------


import './App.css'

// --------------------------- import ---------------------------

// import Title from "./Title";
// import ProductTab from './ProductTab.jsx';
// import MsgBox from "./MsgBox(Activity).jsx"

import ProductTab from './ProductTab(Amazon).jsx';
import Button from './Button.jsx';


function App() {
  return(
    <>
      {/* <MsgBox userName = "Sounak" textColor = "royalblue"/>
      <MsgBox userName = "Rahul" textColor = "tomato"/>
      <ProductTab/> */}
      <h2>Blockbuster Deals | Shop Now</h2>
      <ProductTab />
      <Button />
    </>
  );
}

export default App;
