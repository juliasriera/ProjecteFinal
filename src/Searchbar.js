import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Searchbar extends React.Component {

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <div className='contaniner'>
                <form onSubmit={this.handleSubmit} className="form-group">
                <h3>Buscador</h3>
                <input onChange={this.handleChange} className="form-control" type="search" placeholder="Buscar"/>
                </form>
            </div>
        )
    }
}
export default Searchbar;
