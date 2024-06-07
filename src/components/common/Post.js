import React from 'react';
import styles from './Post.module.css';

const Post = ({ title, date, content }) => {
  return (
    <div className={styles.post} >
      <h3>{title}</h3>
      <p className={styles.postDate}>{date}</p>
      <p className={styles.space}>{content}</p>
      <button className={styles.readMore}>READ MORE</button>
    </div>
  );
};

export default Post;
