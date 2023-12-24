import Image from "next/image";
import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <>
      <Image
        src="https://picsum.photos/1200/300"
        width={1200}
        height={300}
        alt="Music school"
        className={styles.banner}
      />
      <article className="box">Here goes the content</article>
    </>
  );
}
