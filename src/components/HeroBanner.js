'use client';

import Image from 'next/image';
import styles from '../styles/HeroBanner.module.scss';
import { useEffect, useState } from 'react';

const images = [
  {
    id: 1,
    imgSrc: '/gallery/piano.jpg',
    description: 'Welcome to the world of Music.',
  },
  {
    id: 2,
    imgSrc: '/gallery/piano1.jpg',
    description: 'Enjoy your passion flowing in through the keyboard',
  },
  {
    id: 2,
    imgSrc: '/gallery/drums.jpg',
    description: 'Play your favorite song hitting the drums',
  },
];
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
        src={images[count].imgSrc}
        width={1200}
        height={300}
        alt="Music school"
        className={styles.banner}
      />
      <figcaption className={styles.caption}>{images[count].description}</figcaption>
    </figure>
  );
};

export default HeroBanner;
