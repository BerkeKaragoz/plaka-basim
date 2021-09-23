import s from "./apply-section.module.scss";
import Button from "../_shared/Button/Button";
import Text from "../_shared/Text/Text";

const ApplySection = (props) => {
  return (
    <section className={s.root}>
      <Text heading className={s.text}>
        Rami Plaka Basım'a başvuru nasıl yapılır?
      </Text>
      <a href="/#iletisim">
        <Button className={s.button}>BİZE ULAŞIN</Button>
      </a>
    </section>
  );
};

export default ApplySection;
