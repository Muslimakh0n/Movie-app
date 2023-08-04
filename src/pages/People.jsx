import { useEffect, useState } from "react";
import PeopleCard from "../components/MovieCard/PeopleCard";

const People = () => {
  
  const [people, setPeople] = useState([]);
  const peopleApi = "https://api.themoviedb.org/3/person/popular";
  const apikey = "4b7feb4a7688c3c46324165839ad0ffd";

  useEffect ( () => {
fetch(`${peopleApi}?api_key=${apikey}`)
 .then((res) => res.json())
.then((data) => setPeople(data))

  },[])

 

    return (
  <>
  <div className="cards">
      {people.results &&
        people.results.map((val, i) => (
          <div className="">
            <PeopleCard key={i}
            title={val.name}
            rating={val.vote_average}
            imgLink={`https://image.tmdb.org/t/p/w500/${val.poster_path}`}
          />
          </div>
           
        ))}
    </div>
  </>
  )
}

export default People

