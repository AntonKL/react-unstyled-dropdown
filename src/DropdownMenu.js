import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({isOpen: !this.state.isOpen})
  }

  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }

  componentWillUnmount () {
    this.mounted = false
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  handleDocumentClick (event) {
    if (!ReactDOM.findDOMNode(this).contains(event.target)) {
      if (this.state.isOpen) {
        this.setState({ isOpen: false })
      }
    }
  }

  render() {
    const { children, className } = this.props;
    const { isOpen } = this.state;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        toggleMenu: this.toggleMenu,
        isOpen: isOpen
      })
    );

    return (
      <div className={className}>
        {childrenWithProps}
      </div>
    );
  }

  static propTypes = {
    className: PropTypes.string
  };
  
  static defaultProps = {
    className: 'dropdown'
  };
}

export default DropdownMenu;
