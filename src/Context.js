import React from "react";

const Context = React.createContext({
  folders: [],
  notes: [],
  delete: function() {},
  fetchFolders: function() {},
  fetchNotes: function() {},
  changeAppFolders: function() {}
});

export default Context;
