import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ale.jpeg"
          alt="An image showing Ale"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Ale</h1>
      <p>I blog about web dev.</p>
    </div>
  );
}

export default Hero;
