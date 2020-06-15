import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
flex-direction: column;
>.output{
background: white;
font-size: 36px;
line-height: 72px;
padding: 0 16px;
box-shadow: inset  0 -5px 5px -5px rgba(0,0,0,0.25),
            inset  0 5px 5px -5px rgba(0,0,0,0.25);
}
>.pad{

>button{
 float: left;
    width: 25%;
    height: 64px;
    background: white;
    font-size: 1.3em;
    outline: none;
    border-radius: 4px;
    border: 4px solid #FAFAFA;
&.ok{
height: 192px;
float: right;
}
&.zero{
width: 50%;
}
}
}
`;

export default Wrapper