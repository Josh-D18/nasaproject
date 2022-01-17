import "./API.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import SearchData from "../SearchData/SearchData";
const api_key = process.env.REACT_APP_api_key;

export default function API() {
  const [info, setInfo] = useState();
  const [search, setSearch] = useState(false);

  const getData = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=3`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checker = () => {
    let check = search;
    check = true;
    setSearch(check);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <article className="API">
      <>
        <h1>Photo Of The Day</h1>
        {search ? (
          <SearchData setInfo={setInfo} />
        ) : (
          <button onClick={checker}>Search For Photos</button>
        )}
        {info &&
          info.map((item, i) => (
            <div className="pictureOfTheDay" key={i}>
              <img
                className="pictureOfTheDay__image"
                src={item.hdurl}
                alt="space themed"
              />
              <div className="pictureOfTheDay__container">
                <h2 className="pictureOfTheDay__title" key={i}>
                  {item.title}
                </h2>
                <p className="pictureOfTheDay__explanation">
                  {item.explanation}
                </p>
                <p className="pictureOfTheDay__date">{item.date}</p>
                <Button />
              </div>
            </div>
          ))}
      </>
    </article>
  );
}
