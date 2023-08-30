import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from 'antd';
import { Row, Card, Breadcrumb, Button } from 'antd';
import axios from 'axios';
import '../App.css';

interface Article {
  title: string;
  description: string;
  content: string; 
  urlToImage: string;
}

const { Title, Paragraph } = Typography;

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      const apiKey = '93f32b4f79d44eed872bff0c101d5323';
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          apiKey: apiKey,
          q: 'berita', 
          sortBy: 'publishedAt',
          language: 'id', 
          page: 1, 
        }
      });
      setArticle(response.data.articles[Number(id)]); 
    }

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  
  return (
    <div>
        <Breadcrumb className='breadcrumb'
        separator=">"
        items={[
        {
        title: 'Berita',
        href: '/',
        },
        {
        title: 'Artikel Detail',
        href: '#',
        },
        ]}
        />
        
        <Row justify="center" style={{ marginTop: '5px', marginBottom: '20px' }}>
        <h1>List Berita Baru</h1>
        </Row>
        <Row className='rowdetail' justify={'center'}>
        <Card className='carddetail' style={{ width: 800 }}
        hoverable cover={<img alt={article.title} src={article.urlToImage} />}
        >
        <Title>{article.title}</Title>
        <Paragraph>{article.content}</Paragraph>
          <Button href='/' type="primary">
            Kembali
          </Button>
        </Card>
        </Row>
    </div>
  );
};

export default ArticleDetail;
