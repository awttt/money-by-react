import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';



const NavWrapper = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
display: flex;
>li{
>a{
&.selected{
color: red;
.icon{
fill:red;
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
}
`

const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>

          <NavLink to="/tags" activeClassName="selected">
            <Icon name="icon_label"/>
            标签
          </NavLink>
        </li>
        <li>

          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>

          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;