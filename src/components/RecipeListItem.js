import React from 'react';

import RecipeItem from './RecipeItem';

const RecipeListItem = (props) => (
    <div>
        <h3>Your Recipes List</h3>

        { props.recipes.length === 0 && <p>Please add a recipe!</p> }

        {
            props.recipes.map( (recipe, index) => (
                <RecipeItem 
                    key={ recipe }
                    ind={ index + 1 }
                    recipeTitle={ recipe.title }
                    recipeDescription={ recipe.description }
                    handleDeleteRecipe={ props.handleDeleteRecipe }
                />
            ))
        }
    </div>
);

export default RecipeListItem;