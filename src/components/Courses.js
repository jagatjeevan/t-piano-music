import Image from 'next/image';
import styles from '../styles/page.module.scss';

const courses = [
  {
    id: 1,
    img: '/courses/guitar.jpeg',
    alt: 'Learn Guitar',
    name: 'Guitar',
    description:
      'Learn how to play Guitar from the master from beginner to advance level. The lessons are so well taught, the school has really changed the lives of millions of people all over the world, keep the good songs coming!',
  },
  {
    id: 2,
    img: '/courses/piano.jpeg',
    alt: 'Piano',
    name: 'Piano class',
    description:
      'The school has changed the mindset of millions. The institute has been very good in communicating and imparting knowledge to make great musician. Practice notes and chords interactively and receive instant feedback. All you need is the flowkey app and your piano or keyboard.',
  },
  {
    id: 3,
    img: '/courses/drums.jpeg',
    alt: 'Learn Drums',
    name: 'Drums',
    description:
      'The drums lie at the core of understanding music – beats and rhythms. We offer personalised training to identify your style as a drummer – from the basics to more advanced routines and grooves. Jazz, rock, pop, or metal, our classes will help you become a passionate drummer in the genre of your choice! We also expose our students to performance-based drumming and jam live with other instrumentalists and vocalists.',
  },
];

const Box = ({ item }) => {
  return (
    <div className={styles.coursesBox}>
      <Image src={item.img} alt={item.alt} width={100} height={100} />
      <h4>{item.name}</h4>
      <p>{item.description}</p>
    </div>
  );
};

const Courses = () => {
  return courses.map((course) => <Box key={course.id} item={course} />);
};

export default Courses;
