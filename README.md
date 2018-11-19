# react-unstyled-dropdown
An unstyled, unopinionated dropdown component for React. It gives you functionality to open/close a dropdonw menu on click. Nothing more, nothing less. You write the styling you prefer.

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
```