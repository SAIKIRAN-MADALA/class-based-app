import React from "react";

export const SearchBox = ({placeholder,ChangeEvent}) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={ChangeEvent}
  />
);