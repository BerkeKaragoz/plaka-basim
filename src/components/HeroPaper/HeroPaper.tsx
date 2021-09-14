import Paper from "../_shared/Paper/Paper.tsx";
import s from "./hero-paper.module.scss";

type PageHeroProps = {
  children: any;
};

export const HeroPaper = (props: PageHeroProps) => {
  const { children } = props;

  return (
    <section className={s.root}>
      <div className={s.imageContainer}>
        <div className={s.image} />
      </div>
      <div className={s.content}>
        <Paper className={s.paper}>{children}</Paper>
      </div>
    </section>
  );
};

export default HeroPaper;
