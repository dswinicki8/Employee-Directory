import React from "react";


function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employees">Search Employees By:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employees"
          id="search"
        />
        
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
