import React, { Component } from 'react';

class DropdownContent extends Component {
  render () {
    if (!this.props.isOpen) {
      return null;
    }
    return (
      <div className="dropdown__content">
        {this.props.children}
      </div>
    );
  }
}

export default DropdownContent;
