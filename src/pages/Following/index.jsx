import React, { useState, useEffect } from "react";
import "./following.scss";
import API from "../../API/API";

const index = () => {
  const [dataThird, setDataThird] = useState([]);
  const [loadThird, setLoadThird] = useState(false);

  const Following = async () => {
    const res = await API.getFollowing();
    setDataThird(res.data);
    setLoadThird(true);
  };

  useEffect(() => {
    Following();
  }, []);

  return (
    <>
      {loadThird ? (
        <>
          <div className="following">
            <img
              src={dataThird[0].avatar_url}
              alt="image"
              className="following__image"
            />
            <h2 className="following__title">Mukhriddin Khodiev</h2>
            <a href={dataThird[0].html_url} className="following__text">
              mukhriddin-dev
            </a>
            <p className="following__text__second">
              @mukhriddin_web Javascript developer!!!
            </p>
            <ul className="following__ul__list">
              <li className="following__ul__list__li__item">NAJOT TA'LIM</li>
              <li className="following__ul__list__li__item">OLCHA.UZ</li>
              <li className="following__ul__list__li__item">SERIUS AGENCY</li>
              <li className="following__ul__list__li__item">EFFECT.UZ</li>
            </ul>

            <p className="following__text__third">Toshkent</p>
          </div>
        </>
      ) : (
        <h2>LOADING....</h2>
      )}
    </>
  );
};

export default index;
