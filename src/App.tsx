import { Trans } from "react-i18next";
import './App.css';
import * as React from 'react';

function App() {
  const links = ['1', '2', '3', '4'];

    return (
      <div className="App">
        <header className="App-header">
          <Trans i18nKey="listmap" count={links.length}>
            Task running:
              <div>
              {links.map((link) => (
                      <a key={link} href={link}>{link}</a>
              ))}
                 </div>
          </Trans>
        </header>
      </div>
  );
}

export default App;