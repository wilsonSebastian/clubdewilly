import React from 'react';
import Navbar from './components/Navbar';
import EpisodeCard from './components/EpisodeCard';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section className="episodes">
          <h2>Episodes</h2>
          <div className="episodes-grid">
            <EpisodeCard image="link_a_la_imagen" title="Del crepúsculo al amanecer" episode="3x10" />
            <EpisodeCard image="link_a_la_imagen" title="Shadowhunters" episode="3x22" />
            <EpisodeCard image="link_a_la_imagen" title="Samurai 7" episode="1x1" />
            <EpisodeCard image="link_a_la_imagen" title="Haikyuu!!" episode="2x25" />
          </div>
        </section>
        <section className="movies">
          <h2>Películas Online</h2>
          <div className="movies-grid">
            <MovieCard image="link_a_la_imagen" title="Tiempo" year="2021" />
            <MovieCard image="link_a_la_imagen" title="Breaking and Re-entering" year="2024" />
            <MovieCard image="link_a_la_imagen" title="Gabriel's Rapture: Part III" year="2022" />
            <MovieCard image="link_a_la_imagen" title="Yolo" year="2024" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
