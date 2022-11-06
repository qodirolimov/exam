import React, { useState, useEffect } from "react";
import "./overview.scss";
import API from "../../API/API";

const index = () => {
  const [dataSecond, setDataSecond] = useState([]);
  const [loadSecond, setLoadSecond] = useState(false);

  const ReposSecond = async () => {
    const res = await API.getRepos();

    setDataSecond(res.data);
    setLoadSecond(true);
  };

  useEffect(() => {
    ReposSecond();
  }, []);

  return (
    <>
      <div className="main__container">
        <div className="section__second__wrap">
          <h2 className="section__second__wrap__title">Popular repositories</h2>
          <p className="section__second__wrap__text">Customize your pins</p>
        </div>

        <div className="section__third__wrap__first">
          {loadSecond ? (
            dataSecond.map((e) => {
              return (
                <div key={e.id} className="section__third__wrap__second">
                  <a
                    href={e.html_url}
                    className="section__third__wrap__second__title"
                  >
                    {e.name}
                  </a>
                  <p className="section__third__wrap__second__text__first">
                    Public
                  </p>
                  <div className="section__third__wrap__second__circle"></div>
                  <p className="section__third__wrap__second__text__second">
                    {e.language}
                  </p>
                </div>
              );
            })
          ) : (
            <h2>LOADING....</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default index;
