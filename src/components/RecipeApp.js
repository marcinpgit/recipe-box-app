import React from 'react';

import Header from './Header';
import RecipeListItem from './RecipeListItem';

class RecipeApp extends React.Component {
    state = {
        recipes: [
            {
                title: 'Zupa',
                createBy: 'Alex',
                description: 'Pyszna zupa dla glodnego',
                ingredients: ['cebula', 'woda'],
                directions: 'gotowac wode do 99 stopni'
            },
            {
                title: 'Placki',
                createBy: 'Tom',
                description: 'Super placki smazone w glebokim oleju',
                ingredients: ['ziemniaki', 'maka'],
                directions: 'smazyc placki do 999 stopni'
            }
        ]
    };

    handleDeleteRecipe = () => {
        this.setState(() => ({ recipes: [] }));
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