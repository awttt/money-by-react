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
>a{
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

          <Link to="/tags">
            <Icon name="icon_label"/>
            标签
          </Link>
        </li>
        <li>

          <Link to="/money">
            <Icon name="money"/>
            记账
          </Link>
        </li>
        <li>

          <Link to="/statistics">
            <Icon name="chart"/>
            统计
          </Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;