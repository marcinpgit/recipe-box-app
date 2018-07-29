import React from 'react';

const RecipeListItem = (props) => (
    <div>
        <h3>Your Recipes List</h3>

        { props.recipes.length === 0 && <p>Please add a recipe!</p> }

        
    </div>
);

export default RecipeListItem;