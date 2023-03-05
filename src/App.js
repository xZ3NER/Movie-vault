import React from "react";

import "./App.css";
import Logo from "./components/Icons/Logo";
import Menu from "./components/Icons/Menu";
import User from "./components/Icons/User";

import styles from "./components/Header/Header.module.css";

const App = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.menu}>
          <Menu fill="#fff" height='5em' width='5em' />
          <Logo height='5em' width='5em' />
        </div>
        <div className={styles.user}>
          <div className={styles.auth}>
            <h2>Username</h2>
            <p>Login/Register</p>
          </div>
          <User fill="#fff" height='5em' width='5em' />
        </div>
      </header>
      <main>
        <p>sss</p>
      </main>
    </React.Fragment>
  );
};

export default App;
