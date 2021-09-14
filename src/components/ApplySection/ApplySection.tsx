import s from "./apply-section.module.scss";
import Button from "../_shared/Button/Button";
import Text from "../_shared/Text/Text";

const ApplySection = (props) => {
  return (
    <section className={s.root}>
      <Text heading className={s.text}>
        Rami Numara'ya başvuru nasıl yapılır?
      </Text>
      <a href="/basvuru">
        <Button className={s.button}>TIKLAYINIZ</Button>
      </a>
    </section>
  );
};

export default ApplySection;
