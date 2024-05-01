import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';


const Header = ({ onDarkModeClick }) => {
  return (
    <header>
      <h1>My Website</h1>
      <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);

  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <div className="content">
        {/* Other content of your app */}
        <ShoppingList items={itemData} />
      </div>
    </div>
  );
};

export default App;
