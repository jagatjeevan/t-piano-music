import Image from 'next/image';
import Courses from '@/components/Courses';
import styles from '../styles/page.module.scss';

const Home = () => {
  return (
    <>
      <Image
        src="/gallery/bg1.jpeg"
        width={1200}
        height={300}
        alt="Music school"
        className={styles.banner}
      />
      <article className={`box ${styles.description}`}>
        <p>We offer music education for individuals of just about every age and skill level.</p>
        <p>
          Explore several art forms as your child builds creativity and confidence in our new visual
          arts classes for ages 2-5.
        </p>
        <p>
          We have talented and very experienced instructors who teach piano, violin, guitar, cello,
          and other instruments.
        </p>
      </article>
      <article className={styles.courseGallery}>
        <Courses />
      </article>
      <article className="box">
        Locate us here :{' '}
        <a
          href="https://www.google.com/maps/place/T's+Piano+Music+School+Cuttack./@20.4723269,85.8527326,17z/data=!4m14!1m7!3m6!1s0x3a1913be8a437633:0x3038494ac5cdc28c!2sT's+Piano+Music+School+Cuttack.!8m2!3d20.4723269!4d85.8553075!16s%2Fg%2F11swyr3398!3m5!1s0x3a1913be8a437633:0x3038494ac5cdc28c!8m2!3d20.4723269!4d85.8553075!16s%2Fg%2F11swyr3398?entry=ttu"
          target="_blank"
        >
          here
        </a>{' '}
        or call us : <a href="tel:09938273360">09938273360</a>
      </article>
    </>
  );
};

export default Home;
