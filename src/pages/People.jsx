import { useEffect, useState } from "react";
import PeopleCard from "../components/MovieCard/PeopleCard";

const People = () => {
  
  const [people, setPeople] = useState([]);
  const peopleApi = "https://api.themoviedb.org/3/person/popular/?";
  const apikey = "3498868cb8e86dcb1617c1912abc216d";

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

