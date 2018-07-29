import React from 'react';

const RecipeItem = (props) => (
    <div>
        <p>{props.ind}. { props.recipeTitle }</p>
    </div>
);

export default RecipeItem;