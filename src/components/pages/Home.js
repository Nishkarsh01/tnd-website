import React from 'react';
import styles from './Home.module.css';
import Post from '../common/Post';

const posts = [
    {
      title: 'New Posts Coming Soon',
      date: 'JUNE 7, 2024',
      content: 'Exciting news! New posts are on the way. Stay tuned for fresh and engaging content. Thank you for your support!',
    },
];


const Home = () => (
  <div className={styles.mainContent}>
    <h2>Latest Posts</h2>
    {posts.map((post, index) => (
      <Post key={index} title={post.title} date={post.date} content={post.content} />
    ))}
  </div>
);

export default Home;
