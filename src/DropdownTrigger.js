import React from 'react';
import PropTypes from 'prop-types';

const DropdownTrigger = (props) => {
  const { className, toggleMenu, children } = props;
  return (
    <button className={className} onClick={toggleMenu}>
      {children}
    </button>
  )
}

DropdownTrigger.propTypes = {
  toggleMenu: PropTypes.func,
  className: PropTypes.string
};

DropdownTrigger.defaultProps = {
  className: 'dropdown__trigger'
};


export default DropdownTrigger;
