import React from 'react';

import Header from './Header';
import RecipeListItem from './RecipeListItem';
import AddRecipe from './AddRecipe';

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
        const appSubTitle = 'Your Recipes List';
        console.log(this.state.recipes);

        return (
            <div>
                <Header 
                    appTitle={ appTitle }
                />
                <RecipeListItem
                    appSubtitle={ appSubTitle } 
                    recipes={ this.state.recipes }
                    handleDeleteRecipe={ this.handleDeleteRecipe }
                />
                <AddRecipe 
                    handleAddRecipe={ this.handleAddRecipe }
                />
            </div>
            
        );
    }
}

export default RecipeApp;