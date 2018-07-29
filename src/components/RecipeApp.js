import React from 'react';

import Header from './Header';
import RecipeListItem from './RecipeListItem';

class RecipeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    id: 1,
                    title: 'Zupa',
                    createBy: 'Alex',
                    description: 'Pyszna zupa dla glodnego',
                    ingredients: ['cebula', 'woda'],
                    directions: 'gotowac wode do 99 stopni'
                },
                {
                    id: 2,
                    title: 'Placki',
                    createBy: 'Tom',
                    description: 'Super placki smazone w glebokim oleju',
                    ingredients: ['ziemniaki', 'maka'],
                    directions: 'smazyc placki do 999 stopni'
                }
            ]
        };
    }

    handleDeleteRecipe = recipeId => {
        this.setState({
            recipes: this.state.recipes.filter(recipe => recipe.id !== recipeId)
        });
    };

    handleAddRecipe = () => {

    };

    render() {
        const appTitle = 'Recipe Box Application';

        return (
            <div>
                <Header appTitle = { appTitle }/>
                <div>
                    My recipes:
                </div>
                <RecipeListItem 
                    recipes={ this.state.recipes }
                    handleDeleteRecipe={ this.handleDeleteRecipe }
                />
            </div>
            
        );
    }
}

export default RecipeApp;