import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { List, Card, Row, Breadcrumb, Button } from 'antd';
import axios from 'axios';



interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const apiKey = '93f32b4f79d44eed872bff0c101d5323';
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          apiKey: apiKey,
          q: 'berita', 
          sortBy: 'publishedAt',
          language: 'id', 
        }
      });
      setArticles(response.data.articles);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <Breadcrumb
      className='breadcrumb'
        separator=">"
        items={[
          {
            title: 'Berita',
            href: '/',
          },
        ]}
      />

      <Row justify={'center'} style={{ margin: '0 16px' }}>
      <h1>List Berita Baru</h1>
      <List
        grid={{ gutter: 6, column: 4 }}
        dataSource={articles}
        renderItem={(article, index) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt={article.title} src={article.urlToImage} />}
            >
              <Link to={`/article/${index}`}>{article.title}</Link>
              <p>{article.description}</p>
              <Link to={`/article/${index}`}>
                <Button type="primary">
                Baca Berita
                </Button>
              </Link>
            </Card>
          </List.Item>
        )}
      />
      </Row>
    </div>
  );
};

export default ArticleList;



// return (
//     <div>
//       <h1>Article List</h1>
//       {articles.map((article, index) => (
//         <div key={index}>
//           <img src={article.urlToImage} alt={article.title} />
//           <h2><Link to={`/article/${index}`}>{article.title}</Link></h2>
//           <p>{article.description}</p>
//         </div>
//       ))}
//     </div>
//   );