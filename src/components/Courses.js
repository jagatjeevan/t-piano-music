import Image from 'next/image';
import styles from '../styles/page.module.scss';

const courses = [
  {
    id: 1,
    img: '/courses/guitar.jpeg',
    alt: 'Learn Guitar',
    name: 'Guitar',
    description:
      'Learn how to play Guitar from the master from beginner to advance level. The lessons are so well taught, the school has really changed the lives of millions of people all over the world, keep the good songs coming! Bassists are essential to holding the groove of a song together. Learn the techniques of many great bassist with Rockschool Bass Grades. We’ve hand-picked tunes from some of the world’s biggest artists across a diverse range of genres to provide students with an expansive song choice to use in their exam and for their own enjoyment. Learn your favourite styles of music with Rockschool Electric Guitar.',
  },
  {
    id: 2,
    img: '/courses/piano.jpeg',
    alt: 'Piano',
    name: 'Piano class',
    description:
      "If you're looking to become a remarkable keyboardist, the Rockschool Keys syllabus will support you on your musical journey today. The school has changed the mindset of millions. The institute has been very good in communicating and imparting knowledge to make great musician. Practice notes and chords interactively and receive instant feedback. All you need is the flowkey app and your piano or keyboard. Created with the modern musician in mind, Rockschool Piano grades gives all aspiring pianists the knowledge needed to become a dynamic contemporary performer.",
  },
  {
    id: 3,
    img: '/courses/drums.jpeg',
    alt: 'Learn Drums',
    name: 'Drums',
    description:
      'The drummer is the driving force, backbone and foundation of the entire band dynamic. Learn the fundamentals to becoming an awesome drummer with Rockschool Drum grades. The drums lie at the core of understanding music – beats and rhythms. We offer personalised training to identify your style as a drummer – from the basics to more advanced routines and grooves. Jazz, rock, pop, or metal, our classes will help you become a passionate drummer in the genre of your choice! We also expose our students to performance-based drumming and jam live with other instrumentalists and vocalists.',
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
