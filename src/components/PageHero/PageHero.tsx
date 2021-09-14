import s from "./page-hero.module.scss";

type PageHeroProps = {
  title: string;
};

export const LandingHero = (props: PageHeroProps) => {
  const { title } = props;

  return (
    <section className={s.container}>
      <div className={s.imageContainer}>
        <div className={s.image} />
      </div>
      <div className={s.content}>
        <h1 className={s.contentText}>{title}</h1>
      </div>
    </section>
  );
};

export default LandingHero;
