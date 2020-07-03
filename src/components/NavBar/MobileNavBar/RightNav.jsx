import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRing} from "@fortawesome/free-solid-svg-icons/faRing";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons/faCommentDots";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-left: 0;
  li {
    padding: 18px 10px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-top: 0;
    flex-flow: column nowrap;
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li a {
      color: #b3b3b3;
      transition: all 0.35s ease-in-out;
      font-weight: bold;
      letter-spacing: 1px;
    }
    li a:hover {
      cursor: pointer;
      color: #d83600;
    }
    .nav-link-icon {
      margin-right: 10px;
    }
  }
`;

const RightNav = ({open, setOpen}) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink
          exact to="/"
          activeStyle={{color: '#d83600'}}
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon className='nav-link-icon' icon={faRing}/>
          Wedding
        </NavLink>
      </li>
      <li>
        <NavLink
          exact to="/location"
          activeStyle={{color: '#d83600'}}
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon className='nav-link-icon' icon={faMapMarkedAlt}/>
          Location
        </NavLink>
      </li>
      <li>
        <NavLink
          exact to="/rsvp"
          activeStyle={{color: '#d83600'}}
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon className='nav-link-icon' icon={faCommentDots}/>
          RSVP
        </NavLink>
      </li>
    </Ul>
  )
}

export default RightNav;
