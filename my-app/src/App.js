import React from 'react';
import './App.css';

const posts = [
  {
    title: "The best fish tacos in Toronto",
    date: "May 31, 2024",
    author: "Sajjad Kazmi",
    image: "https://www.howsweeteats.com/wp-content/uploads/2023/08/grilled-fish-tacos-20.jpg",
    body: `The best fish tacos in Toronto encourage diners to grab their food with both hands, ignore their
    surroundings, and devour each crisp, tangy, chewy bite. Fish tacos are a classic dish that combines
    warm tortillas, fried fish, slaw, and a creamy, slightly spicy sauce. Food that beckons, regardless
    of season or time of day.`
  },
  {
    title: "The hottest new bars in Toronto",
    date: "May 30, 2024",
    author: "Ameen",
    image: "https://pixabay.com/get/gb1ca10376029c5f1b88eadbc7c530fdab4f25256746cfe1f9b96d4ef0734223247b463e5fa1b13417da461d3b743ca88a8af664551444b9b40097b1318382816_1280.jpg",
    body: `The hottest new bars in Toronto serve craft cocktails, snacks, and laughs in swanky, sultry
    settings.Whether it's a date night, after-work drinks, or a night out, these spots will lift (and
    serve) your spirits.`
  },
  {
    title: "50 Essential live music",
    date: "May 30, 2024",
    author: "Hammad Ul Hassan",
    image: "https://pixabay.com/get/g9bd2440142a52c02f8027d52249c63abbf2d26f27443d0895a09e8920a444d58c08d9df83c998f861258af13aa4d95773cfa7d3d1dce5e0dd8a8df1d2b5dbd1f_1280.jpg",
    body: `Live music is thriving in Toronto, and these venues demonstrate that concert venues aren't going away
    anytime soon. While many reports over the years have painted a picture of doom and gloom, there is
    no reason to despair just yet. These live music venues are still going strong.`
  }
];

const TopBar = ({ logo, links }) => {
  return (
    <header className="top-bar">
      <div className="logo">{logo}</div>
      <nav className="nav-links">
        {links.map((link, index) => (
          <a key={index} href={link.href}>{link.text}</a>
        ))}
      </nav>
    </header>
  );
};

const BlogPost = ({ title, date, author, image, body }) => {
  return (
    <article className="blog-post">
      <h2 className="post-title">{title}</h2>
      <p className="post-meta">
        Published on <span className="post-date">{date}</span> by <span className="post-author">{author}</span>
      </p>
      <img className="post-image" src={image} alt="Descriptive" />
      <div className="post-body">
        <p>{body}</p>
      </div>
      <hr />
    </article>
  );
};

function App() {
  const links = [
    { href: "#", text: "Home" },
    { href: "#", text: "About" },
    { href: "#", text: "Contact" }
  ];

  return (
    <div className="App">
      <TopBar logo="My Blog" links={links} />
      <main className="blog-posts">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            date={post.date}
            author={post.author}
            image={post.image}
            body={post.body}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
