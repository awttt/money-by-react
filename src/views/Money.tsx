import Layout from '../components/Layout';
import React from 'react';

import NumberPadSection from './Money/NumberPadSection';
import CategorySection from './Money/CategorySection';
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
function Money() {
  // @ts-ignore
  return (
    <Layout>
      <CategorySection>

      </CategorySection>

      <TagsSection>


      </TagsSection>

      <NotesSection>

      </NotesSection>


      <NumberPadSection>
        <div className="output">￥</div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="ok">确定</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>

          <button className="zero">0</button>

          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );

}

export default Money;