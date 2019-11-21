import React, { Component } from 'react';
import nextId from 'react-id-generator';


class AddFolder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: {
                value: "",
                touched: false
            },
            id: {
                value: "",
                touched: false
            }
        }
    }

    settingStateFromFormInput = (name) => {
        
        this.setState({
            name: {
                value: name
            },
            id: {
                value: nextId()
            }
        });

    }

    readyInputForAPI = (e) => {
        e.preventDefault();
        const input = {
            'name': `${this.state.name.value}`,
            'id': `${this.state.id.value}`
        };
        this.createNewFolderAPI(input);
    }
    
    createNewFolderAPI = (input) => {

        const newUrl = `http://localhost:9090/folders/`;
        const inputValue = JSON.stringify(input);
        console.log(inputValue);
        return (
            fetch(newUrl, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: inputValue
            })
        )
    }

    render() {

        return(
            <form 
                className="add-folder" 
                onSubmit={(e) => {this.readyInputForAPI(e);
                    this.props.history.push('/')}}>
                <label htmlFor="new-folder">Folder Name
                    <input 
                        type="text" 
                        name="folder" 
                        id="new-folder" 
                        onChange={e => this.settingStateFromFormInput(e.target.value)}
                    />
                </label>
                <button 
                    type="submit" 
                    className="submit-button"

                >
                    Submit</button>
            </form>
        )
    }
}

export default AddFolder;