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

    handleAddRecipe = (recipe) => {
        if (!recipe) {
            return 'Enter valid value to add recipe.';
        } else if (this.state.recipes.indexOf(recipe) > -1) {
            return 'This recipe already exists.';
        }

        this.setState((prevState) => ({
            recipes: [...prevState, recipe]
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.AddRecipe(this.state);
    };

    handleChange = ({ target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };

    render() {
        const appTitle = 'Recipe Box Application';
        const appSubTitle = 'Your Recipes List';

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
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                />
            </div>
            
        );
    }
}

export default RecipeApp;