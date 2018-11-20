import React from 'react';
import PropTypes from 'prop-types';

const DropdownContent = (props) => {
  const { isOpen, children, className } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <div className={className}>
      {children}
    </div>
  );
}

DropdownContent.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string
};

DropdownContent.defaultProps = {
  className: 'dropdown__content'
};

export default DropdownContent;
