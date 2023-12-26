import Image from 'next/image';
import styles from '../styles/page.module.scss';
import { pt_sans_narrow } from '@/components/Logo';

const courses = [
  {
    id: 1,
    img: '/courses/guitar.jpeg',
    alt: 'Learn Guitar',
    name: 'Guitar class',
    description:
      'Learn Guitar from the master. Lorem ipsum dolor sit amet, no vix possit pertinacia. Velit quaeque has ut, amet commodo ad per, no alia impedit invenire his. Ex eum habeo audire, quo quod impetus postulant et. Cu vim mucius integre ocurreret. No mei detracto persecuti mnesarchum, agam fugit an eum. Te solet sanctus repudiare mea.',
  },
  {
    id: 2,
    img: '/courses/piano.jpeg',
    alt: 'Learn Piano',
    name: 'Piano class',
    description:
      'Lorem  commodo ad per, no alia impedit invenire his. Ex eum hamucius integre ocurreret. No mei detracto persecuti mnesarchum, agam fugit an eum. Te solet sanctus repudiare mea.',
  },
  {
    id: 3,
    img: '/courses/cello.jpeg',
    alt: 'Learn Cello',
    name: 'Cello class',
    description:
      'Detracto persecuti mnesarchum, agam fugit an eum. Te solet sanctus repudiare mea. Lorem  commodo ad per, no alia impedit invenire his. Ex eum hamucius integre ocurreret. No mei',
  },
];

const Box = ({ item }) => {
  return (
    <div className={styles.coursesBox}>
      <Image src={item.img} alt={item.alt} width={100} height={100} />
      <h4 className={pt_sans_narrow.className}>{item.name}</h4>
      <p>{item.description}</p>
    </div>
  );
};

const Home = () => {
  const getCourses = () => courses.map((course) => <Box key={course.id} item={course} />);

  return (
    <>
      <Image
        src="/gallery/bg1.jpeg"
        width={1200}
        height={300}
        alt="Music school"
        className={styles.banner}
      />
      <article className={styles.courseGallery}>{getCourses()}</article>
    </>
  );
};

export default Home;
