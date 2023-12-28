import styles from '../styles/Welcome.module.scss';

const Welcome = () => {
  return (
    <div className="box">
      <h1 className="heading">Welcome</h1>
      <article className={styles.description}>
        <p>
          Welcome to T&apos; Music School! We offer music education for individuals of just about
          every age and skill level. We believe music education is not only about acquiring
          knowledge, it&apos;s about igniting a lifelong passion and fostering creativity. With a
          deep commitment to quality education and a holistic approach to learning, we have
          established ourselves as a premier destination for music education.
        </p>
        <p>
          Unleash Your Musical Talent with Expert Guidance in Drums, Guitar, Piano, and More!
          Explore several art forms as your child builds creativity and confidence in our new visual
          arts classes for ages 2-5.
        </p>
        <p>
          Dive into various genres and styles, from classical to contemporary, Indian music to
          Western beats. Learn from the finest musicians with years of performing and teaching
          experience.
        </p>
        <p>
          Choose from in-person or online classes to fit your schedule. Practice in fully equipped
          music studios and rehearsal spaces. Access to advanced degree programs in future. You can
          improve your musical skills like our students below by enrolling in our specialized
          classes.
        </p>
      </article>
    </div>
  );
};

export default Welcome;
