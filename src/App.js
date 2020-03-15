import React from 'react';
import './App.scss';

const articles = [
  { title: 'Art one', desc: 'Lorem Ipsum One', url: '/artOne' },
  { title: 'Art two', desc: 'Lorem Ipsum Two', url: '/artTwo' },
];

const Header = () => (
  <header className="App_header">
    <ul className="App_header_list">
      <li className="App_header_link">
        <a href="/">Home</a>
      </li>
      <li className="App_header_link">
        <a href="/">About</a>
      </li>
      <li className="App_header_link">
        <a href="/">Contact</a>
      </li>
    </ul>
  </header>
);

const SidePanel = () => (
  <aside className="App_side-panel">
    <ul className="App_side-panel_list">
      <li className="App_side-panel_link">
        <a href="/">Articles</a>
      </li>
      <li className="App_side-panel_link">
        <a href="/">Contact</a>
      </li>
      <li className="App_side-panel_link">
        <a href="/">Footer</a>
      </li>
    </ul>
  </aside>
);

const Articles = ({ arts }) => (
  <section className="App_content_articles">
    <h1>Articles:</h1>
    {arts.map(({ title, desc, url }) => (
      <article className="App_content_article">
        <a href={url}>{title}</a>
        <p>{desc}</p>
      </article>
    ))}
  </section>
);

const Contact = () => (
  <section className="App_content_contact">
    <h2>Contact:</h2>
    <form className="form" onSubmit={e => e.preventDefault()}>
      <label>
        Please provide your name:
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        <input type="checkbox" name="terms" />
        Do you accept T&C?
      </label>
      <button type="submit">Contact Us</button>
    </form>
  </section>
);

const Content = () => (
  <main className="App_content">
    <Articles arts={articles} />
    <Contact />
  </main>
);

const Footer = () => (
  <footer className="App_footer">
    <a href="https://bedekodzic.pl">
      © {new Date().getFullYear()} Bedekodzic.pl
    </a>
  </footer>
);

const App = () => {
  return (
    <div className="App">
      <Header />
      <SidePanel />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
