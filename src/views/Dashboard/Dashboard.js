import React, { useEffect, useState } from 'react';
import MainContainer from '../../layouts/MainContainer';
import { Image, Card, Flex } from 'antd';
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const { Meta } = Card;


export default function Dashboard() {
  const [latestNews, setLatestNews] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a62d3cbd9a34497abeb4870d4eadf56f');
        setLoading(true)
        if (response.ok) {
          const data = await response.json();
          setLatestNews(data.articles);
          setLoading(false)
        } else {
          console.error('Error fetching news:', response.statusText);
          setLoading(false)
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchLatestNews();
  }, []);

  console.log({ latestNews })

  return (
    <MainContainer>
      {!loading ?
        <div className='dashboard-cards'>
          {latestNews.map(item => {
            return (
              <Card
                hoverable
                style={{
                  width: 350,
                }}
                cover={<Image alt="example" className='card-images' src={item.urlToImage == null ? 'No data available' : item.urlToImage} />}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            )
          })}
        </div>
        :
        <Flex align="center" gap="middle">
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 48,
                }}
                spin
              />
            }
          />
        </Flex>
      }
    </MainContainer>
  );
}
