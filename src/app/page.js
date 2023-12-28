import Courses from '@/components/Courses';
import HeroBanner from '@/components/HeroBanner';
import Welcome from '@/components/Welcome';
import styles from '../styles/page.module.scss';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Welcome />
      <div className="box">
        <h1 className="heading">Courses</h1>
        <article className={styles.courseGallery}>
          <Courses />
        </article>
      </div>
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
