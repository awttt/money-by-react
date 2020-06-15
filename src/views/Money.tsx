import Layout from '../components/Layout';
import React, {useState} from 'react';

import NumberPadSection from './Money/NumberPadSection';
import CategorySection from './Money/CategorySection';
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';

type Category = '-'|'+'

function Money() {
  const [selected,setSelected] = useState({
    tags:[] as string[],
    note:'',
    category:'-' as Category,
    amount:0
  })
  return (
    <Layout>
      {selected.tags.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}

      <CategorySection value={selected.category}
                       onChange={(category)=>{
                       setSelected({
                         ...selected,
                         category: category
                       })}
                       }
        />
      <TagsSection selected={selected.tags}
      onChange={(tags)=>setSelected({
        ... selected,
        tags: tags})}
      />
      <NotesSection value={selected.note}
                    onChange={(note)=>{
                      setSelected({
                        ...selected,
                        note:note
                      })
                    }} />
      <NumberPadSection value={selected.amount}
      onChange={(amount)=>setSelected({
        ...selected,
        amount: amount
      })}
      onok={()=>{}}
      />
    </Layout>
  );

}

export default Money;