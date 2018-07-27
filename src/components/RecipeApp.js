import React from 'react';

import Header from './Header';

class RecipeApp extends React.Component {
    state = {
        recipes: [
            {
                title: 'Zupa',
                createBy: 'Alex',
                description: 'Pyszna zupa dla glodnego',
                ingredients: ['cebula', 'woda'],
                directions: 'gotowac wode do 99 stopni'
            }
        ]
    };

    render() {
        const appTitle = 'Recipe Box Application';

        return (
            <div>
                <Header appTitle = { appTitle }/>
                <div>
                    My recipes:
                </div>
            </div>
            
        );
    }
}

export default RecipeApp;