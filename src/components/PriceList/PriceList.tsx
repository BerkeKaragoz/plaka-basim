import s from "./price-list.module.scss";

export const LandingHero = () => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>2021 Yılı Fiyat Listesi</th>
          <th>Şase</th>
          <th>Motor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Otomobil, Minibüs, Kamyonet, Özel Amaçlı Taşıt, Arazi Taşıtı, Römork
            ve Yarı Römork
          </td>
          <td>₺237</td>
          <td>₺343</td>
        </tr>
        <tr>
          <td>Traktör (Römorklu, Römorksuz), Motosiklet ve Motorlu Bisiklet</td>
          <td>₺237</td>
          <td>₺343</td>
        </tr>
        <tr>
          <td>Otobüs, Kamyon, Çekici ve Tanker</td>
          <td>₺343</td>
          <td>₺387</td>
        </tr>
      </tbody>
    </table>
  );
};

export default LandingHero;
