// C неё все начинается

import React from 'react'; // импорт библиотек
import ReactDOM from 'react-dom/client'; // импорт библиотеки отдельной 'react-dom/client'
import './index.css';  // импорт стилей
import App from './App.js';  // импорт js

// Создаем конейнер для реакт разметки 
const root = ReactDOM.createRoot(document.getElementById('root')); 

// Рендерим react приложение внутри контейнера
root.render(<App />);

