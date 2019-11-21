import React from "react";
import { Link } from "react-router-dom";

export default function Folder(props) {
  return (
    <Link to={`/folder/${props.id}`}>
      <div className="Folder" id={props.id}>
        <h3 id={props.id}>{props.name}</h3>
      </div>
    </Link>
  );
}
