import styles from "./footer.module.scss";
import "../../style/global.scss";
import Text from "../_shared/Text/Text";
import Icon from "../_shared/Icon/Icon";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <span id="iletisim" class="anchor"></span>
      <hr className={styles.divider} />
      <div className={styles.content}>
        <Text headline>İletişim</Text>

        <div className={"grid-3 " + styles.grid}>
          <div className={"flex"}>
            <Icon
              className={styles.icon}
              style={{ color: "rgb(66, 133, 244)" }}
            >
              phone
            </Icon>
            <div>
              <Text as="a" href="tel:02125454940">
                Tel: 0212 545 49 40 (Pbx)
              </Text>
              <Text>Fax: 0212 545 12 51</Text>
            </div>
          </div>

          <div className={"flex"}>
            <Icon className={styles.icon} style={{ color: "rgb(219, 68, 55)" }}>
              room
            </Icon>
            <Text as="address">
              Rami Meydanı, Talimhane Cad., Topçulardeğirmeni Sk., Numara:14/A,
              Rami, Eyüp/İstanbul (Eyüp Trafik Şubesi ve İtfaiye Karşı Sokağı)
            </Text>
          </div>

          <div className={"flex"}>
            <Icon className={styles.icon} style={{ color: "rgb(244, 180, 0)" }}>
              mail
            </Icon>
            <Text as="a" href="mailto:rami.trafik@hotmail.com.tr">
              rami.trafik@hotmail.com.tr
            </Text>
          </div>

          <div className={"gi-2 flex"}>
            <Icon
              className={styles.icon}
              style={{ color: "rgb(37, 211, 102)" }}
            >
              whatsapp
            </Icon>
            <Text
              as="a"
              href="https://api.whatsapp.com/send?phone=+905327357272&text=Merhaba,%20"
            >
              Whatsapp Destek Hattı <br /> 0532 735 72 72
            </Text>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          width="100%"
          height="500"
          id="gmap_canvas"
          title="Google Map"
          src="https://maps.google.com/maps?q=Rami%20Numara&t=&z=14&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div className={styles.lowerBar}>
        <hr className={styles.divider} />
        <Text caption disableGutters>
          Rami Plaka Basım © {new Date().getUTCFullYear()}.
        </Text>
      </div>
    </footer>
  );
}
