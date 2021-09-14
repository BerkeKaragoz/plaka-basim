import s from "./sponsor-gallery.module.scss";

const logos = [
  {
    img: "/img/makine32.png",
    url: "https://www.mmo.org.tr/",
    text: "Makine Mühendisleri Odası",
  },
  {
    img: "/img/İSTANBUL_TEKNİK_ÜNİVERSİTESİ_İTÜ_LOGO_TRANSPARAN_VEKTÖR_PNG.png",
    url: "https://www.itu.edu.tr/",
    text: "İstanbul Teknik Üniversitesi",
  },
  {
    img: "/img/ytu_new_logo.png",
    url: "https://www.yildiz.edu.tr/",
    text: "Yıldız Teknik Üniversitesi",
  },
  {
    img: "/img/TNB_LOGO_Transparan.png",
    url: "https://portal.tnb.org.tr/",
    text: "Türkiye Noterler Birliği",
  },
  {
    img: "/img/Trafik-Tescil.png",
    url: "https://www.egm.gov.tr",
    text: "Trafik Tescil Şube Müdürlüğü",
  },
  {
    img: "/img/Kriminal.png",
    url: "https://www.egm.gov.tr/kriminal",
    text: "Kriminal Polis Labaratuvarı",
  },
  {
    img: "/img/gumruk.png",
    url: "https://raminumara.com",
    text: "T.C. Gümrük ve Ticaret Bakanlığı",
  },
  {
    img: "/img/Tse_logo.jpg",
    url: "https://ticaret.gov.tr/",
    text: "Türk Standartları Enstitüsü",
  },
  {
    img: "/img/sanayib.jpg",
    url: "https://www.sanayi.gov.tr",
    text: "T.C. Bilim, Sanayi ve Teknoloji Bakanlığı",
  },
  {
    img: "/img/trf-mus.jpg",
    url: "https://www.istesob.org.tr",
    text: "İstanbul Trafik Müşavirleri Odası",
  },
];

/* TODO fix: do not activate onhover when the text is too long
 *  where the cursor is on the inactive item
 */
const SponsorGallery = (props) => {
  return (
    <section className={s.gridContainer}>
      {logos.map((i) => (
        <div className={s.gridItem}>
          <a href={i.url}>
            <img className={s.image} src={i.img} alt={i.text} />
            <div className={s.hoverDisplay}>
              <h5 className={s.text}>{i.text}</h5>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
};

export default SponsorGallery;
