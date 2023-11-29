import { useEffect, useState } from "react";

const Cover = () => {
  const [apiData, setApiData] = useState([]);
  const fetchRepos = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const url = await fetch(
          "https://api.github.com/users/shubham-pawar9/repos"
        );
        const urlData = url.json();
        resolve(urlData);
      } catch (error) {
        reject(error);
      }
    });
  };
  useEffect(() => {
    fetchRepos()
      .then((res) =>
        setApiData(() =>
          res.filter((item) => {
            return [
              "elevator-2-lifts",
              "ai-tool-shunu",
              "employee-task-list",
              "news-application",
              "piano",
              "shopping-cart",
              "virtual-smart-watch",
              "my-portfolio",
            ].includes(item.name);
          })
        )
      )
      .catch((err) => console.error(err));
  }, []);
  const handleRepoEvent = (details) => {
    console.log(details);
  };

  return (
    <>
      <div className="cover-div">
        <div className="options-div">
          {apiData &&
            apiData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`circle${index + 1}`}
                  onClick={() => handleRepoEvent(item)}
                >
                  <img
                    src={process.env.PUBLIC_URL + `/images/${item.name}.png`}
                  />
                </div>
              );
            })}
        </div>
        <div className="middle-circle"></div>
      </div>
    </>
  );
};
export default Cover;
