import React, { useState } from 'react';
import './styles.scss';

const NavItem = (props) => {
    const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
        <a href={props.link ? props.link : "#"} className="icon-button" onClick={() => setOpen(!open)}>
            { props.icon }
        </a>
        {open && props.children}
    </li>
  );
};

export default NavItem;

