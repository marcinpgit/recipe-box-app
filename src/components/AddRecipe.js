import React from 'react';

class AddRecipe extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.handleAddRecipe(this.state);
    };

    render() {
        return (
            <div>
                <form>
                    <input />
                    <button>
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default AddRecipe;