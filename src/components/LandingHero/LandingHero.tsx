import s from "./landing-hero.module.scss";

export const LandingHero = (props) => {
  return (
    <section className={s.container}>
      <div className={s.imageContainer}>
        <div className={s.image} />
      </div>
      <div className={s.content}>
        <h2 className={s.contentSubtitle}>Şase / Motor</h2>
        <h1 className={s.contentText}>Numara Çakım Merkezi</h1>
      </div>
    </section>
  );
};

export default LandingHero;
