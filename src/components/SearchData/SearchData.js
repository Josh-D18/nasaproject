import axios from "axios";
import { useState } from "react/cjs/react.development";
import "../API/API.scss";
const api_key = process.env.REACT_APP_api_key;

export default function SearchData({ setInfo }) {
  const [date, setDate] = useState();

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api_key}`
      )
      .then((res) => {
        console.log(res);
        setInfo([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form className="search__form" onSubmit={handleSubmit}>
        <h3 className="search__text">
          Please Enter The Date In This Format: YYYY-MM-DD (Year, Month, Day)
        </h3>
        <input
          className="search__input"
          onChange={handleChange}
          name="date"
          placeholder="Enter Date Here"
        />

        <button className="searchButton" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
