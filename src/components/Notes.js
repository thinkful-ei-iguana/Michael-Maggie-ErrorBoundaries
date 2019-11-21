import React from "react";
import Note from "./Note";
import Context from "../Context";

export default class Notes extends React.Component {
  static contextType = Context;
  render() {
    let filteredNotes;
    const selectedFolderId = this.props.match.params.folderId;
    if (!selectedFolderId) {
      filteredNotes = this.context.notes;
    } else {
      filteredNotes = this.context.notes.filter(
        note => note.folderId === selectedFolderId
      );
    }
    return (
      <div>
        {filteredNotes.map(note => {
          return (
            <div className="note">
              <Note
                key={note.id}
                id={note.id}
                name={note.name}
                modified={note.modified}
                history={this.props.history}
                match={this.props.match}
              />
              <button
                id={note.id}
                onClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  this.context.delete(event.target.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button>Add new note</button>
      </div>
    );
  }
}
