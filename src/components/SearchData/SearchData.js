import axios from "axios";
import { useState } from "react/cjs/react.development";
import "../API/API.scss";
const api_key = process.env.REACT_APP_api_key;

export default function SearchData({ setInfo }) {
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "endDate") {
      setEndDate(enddate);
    }
    if (e.target.name === "startDate") {
      setStartDate(startdate);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${startdate}&end_date=${enddate}`
      )
      .then((res) => {
        setInfo([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h3>Please Enter Dates In This Format: YYYY-MM-DD (Year, Month, Day)</h3>
      <form className="search__form" onSubmit={handleSubmit}>
        <label>Start Date</label>
        <input
          className="search__input"
          onChange={handleChange}
          name="startDate"
          placeholder="Start Date"
        />

        <label>End Date</label>
        <input
          className="search__input"
          name="endDate"
          onChange={handleChange}
          placeholder="End Date"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
