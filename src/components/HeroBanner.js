'use client';

import Image from 'next/image';
import styles from '../styles/HeroBanner.module.scss';
import { useEffect, useState } from 'react';

const images = ['/gallery/bg1.jpeg', '/gallery/bg2.jpeg', '/gallery/bg3.jpeg'];
let timer;
let timeInterval = 3500;

const HeroBanner = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    let counter = count > images.length - 2 ? 0 : count + 1;
    setCount(counter);
  };

  useEffect(() => {
    timer = setTimeout(updateCount, timeInterval);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    clearTimeout(timer);
    timer = setTimeout(updateCount, timeInterval);
  }, [count]);

  return (
    <figure className={styles.heroBanner}>
      <Image
        src={images[count]}
        width={1200}
        height={300}
        alt="Music school"
        className={styles.banner}
      />
      <figcaption className={styles.caption}>Welcome to the world of Music.</figcaption>
    </figure>
  );
};

export default HeroBanner;
