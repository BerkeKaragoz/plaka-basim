import { useState } from "preact/hooks";

import MainLogo from "../MainLogo/MainLogo";
import styles from "./header.module.scss";
import Icon from "../_shared/Icon/Icon";
import clsx from "clsx";
import Text from "../_shared/Text/Text";

const items: Array<NavigationItem> = [
  {
    text: "Anasayfa",
    link: "/",
    icon: `<HomeIcon />`,
  },
  {
    text: "Plaka Bastırma",
    link: "/plaka-bastirma",
    icon: `<DescriptionIcon />`,
  },
  {
    text: "Plaka Yenileme",
    link: "/plaka-yenileme",
    icon: `<InfoIcon />`,
  },
  {
    text: "Hakkımızda",
    link: "/#hakkimizda",
    icon: `<InfoIcon />`,
  },
];

interface NavigationItem {
  text: string;
  link: string;
  icon: any;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  return (
    <>
      <header className={styles.root}>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <MainLogo />
            <div>
              <Text
                as="h5"
                style={{
                  color: "#EED8AA",
                }}
              >
                <i>34. Yıl</i>
              </Text>
            </div>
          </div>
          <nav className={styles.nav}>
            {items.map((item, index) => (
              <a color="inherit" href={item.link} className={styles.a}>
                {item.text}
              </a>
            ))}
          </nav>
          <nav className={styles.mobileNav}>
            <Icon
              button
              className={styles.mobileButton}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              menu
            </Icon>
          </nav>
        </div>
      </header>

      <div className={styles.spacing} />

      <div
        className={clsx(styles.menu, {
          [styles.menuOpen]: isMenuOpen,
          [styles.menuClosed]: isMenuOpen === false,
        })}
      >
        {items.map((item, index) => (
          <a
            color="inherit"
            href={item.link}
            className={styles.menuItem}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {item.text}
          </a>
        ))}
      </div>

      <div
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        className={clsx({
          [styles.backdrop]: isMenuOpen,
        })}
      />
    </>
  );
};

export default Header;
