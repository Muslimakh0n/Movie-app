import { useEffect, useState } from "react";
import "./page.scss"
import { Link, useParams } from "react-router-dom";

const People = () => {
  
  const [people, setPeople] = useState([]);
  const { id} = useParams() 
  console.log(id );
  const peopleApi = "api.themoviedb.org/3/person/popular";
  const apikey = "3498868cb8e86dcb1617c1912abc216d";

  useEffect ( () => {
fetch("https://api.themoviedb.org/3/person/popular/?api_key=3498868cb8e86dcb1617c1912abc216d")
// fetchni ichidagi url promise qaytaradi(lag'mon) , o'zroq kutib turish kk
.then((res)=> res.json() )
.then((data) => setPeople(data.results) )
  },[])

 console.log(people);

    return (
  <>
  <div className="cards">
   { people.map((person)=> (
    <div className="something" key={person.id}>
          <Link to={`/single-person/${person.id}`}>

        <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} className="meaningfull" alt="pic" />

       <h1>{person.name}</h1>
       <h1  >{person.original_title}</h1>
    
    </Link>
    </div>

    ) )

   }
    </div>
  </>
  )
}

export default People
// gapirurin, divni ichidagilarni orab tursnmi asaabb, hop nma qili, bilmasaaaaam, uraaaaaaaaaaaaaa, ha
