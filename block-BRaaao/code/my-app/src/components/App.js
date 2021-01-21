import {data} from "../data/data.js"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="header">
        <div className="container flex-between">
          <a href="./index.html" className="logo">
            <h2>LOGO</h2>
          </a>
          <nav className="navbar">
            <ul className="flex-between">
              <li><a href="./index.html">Home</a></li>
              <li><a href="./index.html">About</a></li>
              <li><a href="./index.html">Contact</a></li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-sec">
      <div className="flex-between container">
        <h1 className="hero-text">
          Let's Have Some Fun
        </h1>
        <img src="./logo512.png" alt="react pic"></img>
      </div>
    </section>
  )
}

function Articles() {
  return (
    <section className="article-sec container">
      <h2 className="article-heading">Articles</h2>
      <div className="articles">
      {data.map((article, i) => {
          return <Article key={i} {...article}/>
        })}
      </div>
    </section>
  )
}

function Article(props) {
  return (
    <article className="article">
      <div className="article-wrapper">
          <div className="image-wrapper">
              <img src={props.urlToImage} alt="random"/>
              <p className="article-author">{props.author}</p>
          </div>
          <div className="article-text">
              <h2 className="article-title">{props.title}</h2>
              <p className="description">{props.description}</p>
              <p className="content">{props.content}</p>
              <a href={props.url} rel="noreferrer" target="_blank" className="article-button">Read more</a>
          </div>
      </div>
    </article>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container flex-between">
        <small>&copy; All rights reserved</small>
        <nav className="footer-nav">
          <ul className="flex-between">
            <li>
              <a href="https://twitter.com">
                📩
              </a>
            </li>
            <li>
              <a href="https://github.com">
                📩
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                📩
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default App;
