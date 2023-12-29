import Courses from '@/components/Courses';
import HeroBanner from '@/components/HeroBanner';
import Welcome from '@/components/Welcome';
import styles from '../styles/page.module.scss';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Welcome />
      <div className="box">
        <h1 className="heading">Courses we offer</h1>
        <article className={styles.courseGallery}>
          <Courses />
        </article>
      </div>
      <Contact />
    </>
  );
};

export default Home;
