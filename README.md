# react-unstyled-dropdown
An unstyled, unopinionated dropdown component for React. It gives you functionality to open/close a dropdown menu on click. Nothing more, nothing less. You write the styling you prefer.

```
<DropdownMenu>
  <DropdownTrigger>
    Click me to open menu
  </DropdownTrigger>
  <DropdownContent>
    <ul className="dropdown-items">
      <li className="dropdown-items__item">
        <a href="#" className="dropdown-items__link">I'm a menu item!</a>
      </li>
      <li className="dropdown-items__item">
        <a href="#" className="dropdown-items__link">I'm another menu item!</a>
      </li>
    </ul>
  </DropdownContent>
</DropdownMenu>

# Demo
[![Edit zry44nlxym](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zry44nlxym)

```
# PropTypes

```
DropdownContent.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string
};
DropdownContent.defaultProps = {
  className: 'dropdown__content'
};
```

```
DropdownTrigger.propTypes = {
  toggleMenu: PropTypes.func,
  className: PropTypes.string
};

DropdownTrigger.defaultProps = {
  className: 'dropdown__trigger'
};
```

```
DropdownMenu.propTypes = {
  className: PropTypes.string
};

DropdownMenu.defaultProps = {
  className: 'dropdown'
};
```

# Roadmap
- [x] Add configurable className
- [x] Add proptypes
- [x] Publish a clickable demo
- [ ] Add tests
- [ ] Add contribution guidelines
- [ ] Add linting