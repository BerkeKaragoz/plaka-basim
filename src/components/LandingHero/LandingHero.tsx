import s from "./landing-hero.module.scss";

export const LandingHero = (props) => {
  return (
    <section className={s.container}>
      <div className={s.imageContainer}>
        <div className={s.image} />
      </div>
      <div className={s.content}>
        <h1 className={s.contentSubtitle}>Rami</h1>
        <h1 className={s.contentText}>Plaka Bastırma</h1>
      </div>
    </section>
  );
};

export default LandingHero;
