import React from 'react';
import ItemList from './pages/ItemList/ItemList';

import css from './App.module.css';

function App() {
  return (
    <>
      <section className={css.container}>
        <ItemList />
      </section>
    </>
  );
}

export default App;
