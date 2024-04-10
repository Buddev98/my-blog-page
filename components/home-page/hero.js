import classes from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={'/images/site/PassportPhoto.jpg'}
          alt="author image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Shanmuganand</h1>
      <p>
        I'm a blogger who writes blog posts on web development - especialy on the
        front end development
      </p>
    </section>
  );
}
