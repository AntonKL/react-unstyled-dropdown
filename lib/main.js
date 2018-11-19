'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ReactDOM = _interopDefault(require('react-dom'));
var React = require('react');
var React__default = _interopDefault(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var DropdownContent =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownContent, _Component);

  function DropdownContent() {
    _classCallCheck(this, DropdownContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownContent).apply(this, arguments));
  }

  _createClass(DropdownContent, [{
    key: "render",
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      return React__default.createElement("div", {
        className: "dropdown__content"
      }, this.props.children);
    }
  }]);

  return DropdownContent;
}(React.Component);

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    var _this;

    _classCallCheck(this, DropdownMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).call(this, props));
    _this.toggleMenu = _this.toggleMenu.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick, false);
      document.addEventListener('touchend', this.handleDocumentClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      document.removeEventListener('click', this.handleDocumentClick, false);
      document.removeEventListener('touchend', this.handleDocumentClick, false);
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(event) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        if (this.state.isOpen) {
          this.setState({
            isOpen: false
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var isOpen = this.state.isOpen;
      var childrenWithProps = React__default.Children.map(children, function (child) {
        return React__default.cloneElement(child, {
          toggleMenu: _this2.toggleMenu,
          isOpen: isOpen
        });
      });
      return React__default.createElement("div", {
        className: "dropdown"
      }, childrenWithProps);
    }
  }]);

  return DropdownMenu;
}(React__default.Component);

var DropdownTrigger = function DropdownTrigger(props) {
  return React__default.createElement("button", {
    className: "dropdown__trigger",
    onClick: props.toggleMenu
  }, props.children);
};

exports.DropdownContent = DropdownContent;
exports.DropdownMenu = DropdownMenu;
exports.DropdownTrigger = DropdownTrigger;
