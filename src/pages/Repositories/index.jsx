import React, { useState, useEffect } from "react";
import "./repositories.scss";
import API from "../../API/API";

const index = () => {
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(false);

  const Repos = async () => {
    const res = await API.getRepos();
    setReposData(res.data);
    setLoading(true);
  };

  useEffect(() => {
    Repos();
  }, []);

  return (
    <>
      <div className="repositories">
        <div className="repositories__wrap__first">
          <input
            type="text"
            className="repositories__wrap__first__input"
            placeholder="Find a repository..."
          />

          <select className="repositories__wrap__first__select__first">
            <option disabled>Select type</option>
            <option>Type</option>
            <option>All</option>
            <option>Public</option>
            <option>Private</option>
            <option>Sources</option>
            <option>Forks</option>
            <option>Archived</option>
            <option>Mirrors</option>
            <option>Templates</option>
          </select>

          <select className="repositories__wrap__first__select__second">
            <option disabled>Select language</option>
            <option>Language</option>
            <option>All</option>
            <option>Javascript</option>
            <option>CSS</option>
            <option>HTML</option>
            <option>SCSS</option>
          </select>

          <select className="repositories__wrap__first__select__third">
            <option disabled>Select order</option>
            <option>Sort</option>
            <option>Last updates</option>
            <option>Name</option>
            <option>Stars</option>
          </select>
          <button className="repositories__wrap__first__button">New</button>
        </div>

        {loading ? (
          reposData.map((e) => {
            return (
              <div key={e.id} className="repositories__wrap__second">
                <div className="repositories__wrap__third">
                  <div className="repositories__wrap__third__line__first"></div>
                  <a
                    href={e.html_url}
                    className="repositories__wrap__third__link"
                  >
                    {e.name}
                  </a>
                  <button className="repositories__wrap__third__button">
                    Public
                  </button>
                  <div className="repositories__wrap__third__circle"></div>
                  <p className="repositories__wrap__third__text__first">
                    {e.language}
                  </p>
                  <p className="repositories__wrap__third__text__second">
                    {e.updated_at}
                  </p>
                  <button className="repositories__wrap__third__button__second">
                    Star
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h2>LOADING....</h2>
        )}
      </div>
    </>
  );
};

export default index;
