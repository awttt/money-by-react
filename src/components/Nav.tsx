import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';



const NavWrapper = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
display: flex;
>li{
width: 33.33333%;
text-align: center;
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
}
}
`

const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="icon_label"/>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name="money"/>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name="chart"/>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;