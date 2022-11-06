import React, { useState, useEffect } from "react";
import "./profile.scss";
import { Link } from "react-router-dom";
import API from "../../API/API";

const index = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const Data = async () => {
    const res = await API.getUser();
    
    setData(res);

    setLoad(true);
  };

  useEffect(() => {
    Data();
  }, []);

  return (
    <>
      {load ? (
        <>
          <div className="profile">
            <div className="profile__circle">
              <img
                src={data.avatar_url}
                alt="image"
                className="profile__circle__image"
              />
            </div>
            <h2 className="profile__title">{data.name}</h2>
            <p className="profile__text">{data.login}</p>
            <button className="profile__button">Follow</button>
            <Link to="/followers" className="profile__text__second">
              followers
            </Link>
            <Link to="/following" className="profile__text__third">
              following
            </Link>
          </div>
        </>
      ) : (
        <h2>LOADING....</h2>
      )}
    </>
  );
};

export default index;
