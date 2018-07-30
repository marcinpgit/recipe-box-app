import React from 'react';

import RecipeItem from './RecipeItem';

const RecipeListItem = (props) => (
    <div>
        <h3>{ props.appSubtitle }</h3>

        { props.recipes.length === 0 && <p>Please add a recipe!</p> }

        {
            props.recipes.map( (recipe, index) => (
                <RecipeItem 
                    key={ recipe.id }
                    id={ recipe.id }
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