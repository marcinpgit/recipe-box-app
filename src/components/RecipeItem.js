import React from 'react';

const RecipeItem = (props) => (
    <div>
        <p>{ props.ind }. { props.recipeTitle }</p>
        <p>{ props.recipeDescription }</p>
        <button>Edit Recipe</button>
        <button
        onClick={ e => {
            props.handleDeleteRecipe();
        }}
        >Remove Recipe</button>
    </div>
);

export default RecipeItem;