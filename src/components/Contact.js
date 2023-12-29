import Image from 'next/image';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  return (
    <article className="box">
      <h1 className="heading">Contact Us</h1>
      <a
        href="https://www.google.com/maps/place/T's+Piano+Music+School+Cuttack./@20.4723269,85.8527326,17z/data=!4m14!1m7!3m6!1s0x3a1913be8a437633:0x3038494ac5cdc28c!2sT's+Piano+Music+School+Cuttack.!8m2!3d20.4723269!4d85.8553075!16s%2Fg%2F11swyr3398!3m5!1s0x3a1913be8a437633:0x3038494ac5cdc28c!8m2!3d20.4723269!4d85.8553075!16s%2Fg%2F11swyr3398?entry=ttu"
        target="_blank"
      >
        <Image src="/contact-us.png" width={1200} height={600} alt="Contact us" />
      </a>
      <ul className={styles.otherContacts}>
        <li>
          Phone : <a href="tel:09938273360">09938273360</a>
        </li>
        <li>
          Whatsapp : <a href="https://wa.me/09938273360">09938273360</a>
        </li>
      </ul>
    </article>
  );
};

export default Contact;
