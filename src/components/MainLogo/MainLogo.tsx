import styles from "./main-logo.module.scss";

const RamiNumaraLogo = () => {
  return (
    <div className={styles.root}>
      <a href={"/"} className={styles.link}>
        <h3>Rami Plaka</h3>
      </a>
    </div>
  );
};

export default RamiNumaraLogo;
