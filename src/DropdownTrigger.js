import React from 'react';

const DropdownTrigger = (props) => (
  <button className="dropdown__trigger" onClick={props.toggleMenu}>
    {props.children}
  </button>
)

export default DropdownTrigger;
