import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Icon from './Icon';



const NavWrapper = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
position: relative;
  background-color: #fff;
  display: flex;
  border-radius: 0px 0px 90px 90px;
  overflow: hidden;
  border: 20px solid white;
>li{

>a{
&.selected{
color: #4298e7;
.icon{
fill:#4298e7;
}
}
display: flex;
flex-direction: column;
align-items: center;
padding: 4px 0;
}
width: 33.33333%;
text-align: center;
}

`

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="icon_label" />
            <span>
              标签
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            <span>
              记账
            </span>
          </NavLink>
        </li>
        <li >
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart" />
            <span>
              统计
            </span>
          </NavLink>
        </li>
      </ul>


    </NavWrapper>
  )
}

export default Nav;