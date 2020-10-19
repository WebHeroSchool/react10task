import React from 'react';
import styles from "./Footer.module.css"

const Footer = ({count}) => (
  <div className={styles.count}>
    Важных дел осталось : {count}
  </div>
);

export default Footer;