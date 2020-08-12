import React from "react";


function SearchResults(props) {
  return (
    <ul className="list-group list-group-horiztonal">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <h4>{result.firstName}</h4>
          <h4>{result.lastName}</h4>
          <h4>{result.phoneNumber}</h4>
          <h4>{result.email}</h4>
        </li>
        
      ))}
    </ul>
  );
}

export default SearchResults;


