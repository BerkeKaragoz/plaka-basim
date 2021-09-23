import Paper from "../_shared/Paper/Paper";
import s from "./paper-section.module.scss";

type PaperSectionProps = {
  children: any;
};

export const PaperSection = (props: PaperSectionProps) => {
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

export default PaperSection;
