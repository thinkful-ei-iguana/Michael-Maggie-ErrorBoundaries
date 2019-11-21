import React from "react";

const Context = React.createContext({
  folders: [],
  notes: [],
  delete: function() {}
});

export default Context;
