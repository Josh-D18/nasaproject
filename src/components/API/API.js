import "./API.scss";
import axios from "axios";
import { useState, useEffect } from "react";
const api_key = process.env.REACT_APP_api_key;

export default function API() {
  const [info, setInfo] = useState();
  const getData = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
      .then((res) => {
        setInfo(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <article className="API">
      <>
        {info &&
          [info].map((item, i) => (
            <div className="pictureOfTheDay" key={i}>
              <img className="pictureOfTheDay__image" src={item.hdurl} alt="" />
              <div className="pictureOfTheDay__container">
                <h2 className="pictureOfTheDay__title" key={i}>
                  {item.title}
                </h2>
                <p className="pictureOfTheDay__explanation">
                  {item.explanation}
                </p>
                <p className="pictureOfTheDay__date">{item.date}</p>
                <button className="pictureOfTheDay__btn">Like</button>
              </div>
            </div>
          ))}
      </>
    </article>
  );
}
