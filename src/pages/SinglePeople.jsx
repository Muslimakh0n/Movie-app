import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SinglePeople = () => {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/person/${id}`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setMovieInfo({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setMovieInfo({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(movieInfo);
  return (
    <div>
      {movieInfo.isFetched ? (
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.data.profile_path}`}
            alt=""
          />
          <h2>{movieInfo.data.name}</h2>
          <p>{movieInfo.data.birthday}</p>
          <p>{movieInfo.data.biography}</p>

        </div>
      ) : (
        <h1>Wait....</h1>
      )}
    </div>
  );
};

export default SinglePeople;
