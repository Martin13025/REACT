import React, { useState } from 'react';
import './HomePage.css';
import './AboutPage.css';
import './ContactPage.css';

function App() {
  // Для HomePage
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "image1.jpg", // Замени на путь к изображению
    "image2.jpg",
    "image3.jpg"
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="App">
      {/* Шапка с навигацией */}
      <header className="header">
        <nav className="nav-bar">
          <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>
      </header>

      {/* Главная страница (HomePage) */}
      <section id="home" className="home-page">
        <h1>Добро пожаловать на Главную</h1>
        <p>Это главная страница сайта.</p>

        <div className="carousel">
          <button className="carousel-button prev" onClick={handlePrev}>←</button>
          <div className="carousel-track">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Картинка ${index + 1}`}
                className={`carousel-image ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
          <button className="carousel-button next" onClick={handleNext}>→</button>
        </div>
      </section>

      {/* О нас (AboutPage) */}
      <section id="about" className="about-page">
        <h1>О нас</h1>
        <p>Здесь информация о нашей компании.</p>
      </section>

      {/* Контакты (ContactPage) */}
      <section id="contact" className="contact-page">
        <h1>Контакты</h1>
        <form>
          <label>Ваше имя:</label><br />
          <input type="text" name="name" /><br /><br />
          <label>Ваш email:</label><br />
          <input type="email" name="email" /><br /><br />
          <button type="submit">Отправить</button>
        </form>
      </section>

      {/* Футер */}
      <footer className="footer">
        <p>© 2024 Ваш сайт. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;

