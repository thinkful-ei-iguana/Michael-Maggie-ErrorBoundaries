import React, { Component } from 'react';
import Context from '../Context';
import nextId from "react-id-generator";

class AddNote extends Component {

    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            name: {
                value: "",
                touched: false
            },
            content: {
                value: "",
                touched: false
            },
            folderId: {
                value: "",
                touched: false
            },
            id: {
                value: "",
                touched: false
            },
            modified: {
                value: "",
                touched: false
            },
            error: null,
            baseURL: "http://localhost:9090/notes"

        }
    }

    setStateName = (name) => {
        this.setState({
            name: {
                value: name
            },
            id: {
                value: nextId()
            },
            modified: {
                value: new Date()
            }
        });
    }

    setStateContent = (content) => {
        this.setState({
            content: {
                value: content
            }
        });
    }

    setStateFolderId = (folderId) => {
        this.setState({
            folderId: {
                value: folderId
            }
        });
    }



    readyInputForAPI = e => {
        e.preventDefault();
        console.log(this.state);
        const input = {
            id: `${this.state.id.value}`,
            name: `${this.state.name.value}`,
            modified: `${this.state.modified.value}`,
            folderId: `${this.state.folderId.value}`,
            content: `${this.state.content.value}`,
        };
        this.createNoteAPI(input);

    };

    createNoteAPI = (input) => {
        const inputValue = JSON.stringify(input);

        return (
            this.context.fetchNotes(this.state.baseURL,
                {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: inputValue
                }
            )
        )
    }


    render() {
        return (
            <form
                className="add-note"
                onSubmit={e => {
                    this.readyInputForAPI(e);
                }}>
                <label htmlFor="note-name">Name this note:
                    <input type="text"
                        name="name"
                        id="note-name"
                        onChange={e => this.setStateName(e.target.value)} />
                </label>
                <label htmlFor="note-content">Note content:
                    <input type="text"
                        name="content"
                        id="note-content"
                        onChange={e => this.setStateContent(e.target.value)} />
                </label>
                <select onChange={(e) => this.setStateFolderId(e.target.value)}>Folder
                    {
                        this.context.folders.map(folder =>
                            <option value={folder.id}
                                name={folder.name}>{folder.name}</option>)
                    }
                </select>
                <button
                    type="button"
                    onClick={() => this.props.history.goBack()}>
                    Cancel
                </button>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>

        );

    }
}

export default AddNote;