import React from 'react';

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
        <span>Turn on / off</span>
        <p>Current Temperature: XXX</p>
      </header>
  );
}

function Content() {
  return (
    // Code for Content
    // <Content />
    <div id="temperature">
    <Temperature />
    </div>
  );
}

function Temperature() {
  const temperature = 80;
  return (
    // Code for Temperature
    // <Temperature />
    <div><span>{ temperature } Oc</span></div>
  );
}

function Footer() {
  return (
  <footer>
    <button>Up</button>
    <button>Down</button>
  </footer>
  );
}

export default App;
