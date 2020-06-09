import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
background: #ffffff;

padding: 12px 16px;
>button{
background: none;
border: none;
padding: 2px 4px;
border-bottom: 1px solid #333;
color: #666;
margin-top: 8px;
}
>ol{
margin: 0 -12px;
li{
background: #D9D9D9;
border-radius: 18px;
display: inline-block;
padding: 4px 16px;
font-size: 14px;
margin: 4px 12px;
}
}
`;

const NotesSection = styled.section`

`;

const CategorySection = styled.section`

`;

const NumberPadSection = styled.section`

`;



function Money() {
  return (
    <Layout>
      <CategorySection>
        <div>支出</div>
        <div>收入</div>
      </CategorySection>

      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>

      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NotesSection>


      <NumberPadSection>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );

}

export default Money;