import { FC } from 'react';
import './App.scss';

type IArticle = {
  authorIconText: string;
  authorName: string;
  contentText: string;
};

const textLoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

const articles: IArticle[] = [
  { authorIconText: '🧑‍💻', authorName: 'Jack', contentText: textLoremIpsum },
  { authorIconText: '🐱', authorName: 'Mio', contentText: textLoremIpsum },
  { authorIconText: '🐶', authorName: 'Cody', contentText: textLoremIpsum },
  { authorIconText: '🧑‍💻', authorName: 'Jack', contentText: textLoremIpsum },
  { authorIconText: '🐱', authorName: 'Mio', contentText: textLoremIpsum },
  { authorIconText: '🐶', authorName: 'Cody', contentText: textLoremIpsum },
];

export const App: FC = () => {
  return (
    <main q="app">
      <div q="narrower">
        <div q="top-bar">
          <span q="icon">📝</span>
          <h1>Timeline UI Example</h1>
        </div>
        <div q="main-area">
          <div q="article-list">
            {articles.map((article, idx) => (
              <div q="article-card" key={idx}>
                <div q="header-row">
                  <div q="icon">{article.authorIconText}</div>
                  <div q="name">{article.authorName}</div>
                </div>
                <div q="content-row">{article.contentText}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
