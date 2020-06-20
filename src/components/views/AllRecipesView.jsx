import React from "react";

const AllRecipesView = (props) => {
  const { handleLogout } = props;
  return (
    <div className="all-recipes">
      <h1>
        <button onClick={handleLogout}>Logout</button>
      </h1>
      {props.recipes.map((recipe) => (
        <div key={props.recipe.id}>
          <h3>{props.recipe.title}</h3>
          <ul>
            <li>ReadyInMinutes: {props.recipe.readyInMinutes}</li>
            <li>Servings: {props.recipe.servings}</li>
            <li>Recipe Link: {props.recipe.sourceURL}</li>
            <li>
              img src={props.recipe.image} style=
              {{
                width: "300px",
                height: "300px",
                objectFit: "fit",
                display: "block",
                boxShadow: "0 10px 10px rgba(0,0,0,.7)",
                padding: "5px",
              }}
            </li>
          </ul>
          <br></br>
          <button>Add</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AllRecipesView;
