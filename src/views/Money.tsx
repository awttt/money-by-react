import Layout from '../components/Layout';
import React, {useState} from 'react';
import NumberPadSection from './Money/NumberPadSection';
import CategorySection from './Money/CategorySection';
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';

type Category = '-'|'+'

function Money() {
  const [selected,setSelected] = useState({
    tags:[] as number[],
    note:'',
    category:'-' as Category,
    amount:0
  })
  const onChange=(obj:Partial<typeof selected>)=>{
    setSelected({...selected,...obj})
  }
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
                       onChange={category =>onChange({category})}
        />
      <TagsSection selected={selected.tags}
                   onChange={tags =>onChange({tags})}
      />
      <NotesSection value={selected.note}
                    onChange={note =>onChange({note})}
      />
      <NumberPadSection value={selected.amount}
                        onChange={amount =>onChange({amount})}
      onok={()=>{}}
      />
    </Layout>
  );

}

export default Money;