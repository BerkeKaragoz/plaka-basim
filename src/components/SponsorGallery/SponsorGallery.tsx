import s from "./sponsor-gallery.module.scss";

const logos = [];

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
