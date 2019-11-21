import React from "react";
import Folder from "./Folder";
import Context from "../Context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class Folders extends React.Component {
  static contextType = Context;
  render() {
    return (
      <div className="Folders">
        {this.context.folders.map(folder => {
          return (
            <Folder
              key={folder.id}
              id={folder.id}
              name={folder.name}
              history={this.props.history}
              match={this.props.match}
            />
          );
        })}
        <Link to="/AddFolder">
          <button>Add Folder</button>
        </Link>
      </div>
    );
  }
}
Folders.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
