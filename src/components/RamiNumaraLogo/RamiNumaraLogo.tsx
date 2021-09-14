import styles from "./rami-numara-logo.module.scss";

const RamiNumaraLogo = () => {
  return (
    <div className={styles.root}>
      <a href={"/"} className={styles.link}>
        <h3>Rami Numara</h3>
      </a>
    </div>
  );
};

export default RamiNumaraLogo;
