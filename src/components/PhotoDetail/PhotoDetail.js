import Button from "../Button/Button";
import "../API/API.scss";
export default function PhotoDetail({ item }) {
  return (
    <div className="pictureOfTheDay__container">
      <h2 className="pictureOfTheDay__title">{item.title}</h2>
      <p className="pictureOfTheDay__explanation">{item.explanation}</p>
      <p className="pictureOfTheDay__date">{item.date}</p>
      <Button />
    </div>
  );
}
