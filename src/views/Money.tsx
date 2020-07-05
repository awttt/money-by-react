import Layout from '../components/Layout';
import React, {useState} from 'react';
import NumberPadSection from './Money/NumberPadSection';
import CategorySection from './Money/CategorySection';
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
import useRecords from '../hooks/useRecords';
import styled from 'styled-components';



type Category = '-'|'+'

const MyLayout = styled(Layout)`
 display:flex;
flex-direction: column;
`;

function Money() {
  const [selected,setSelected] = useState({
    tagIds:[] as number[],
    note:'',
    category:'-' as Category,
    amount:0
  })
   const {addRecords} = useRecords()
  const onChange=(obj:Partial<typeof selected>)=>{
    setSelected({...selected,...obj})
  }
  const submit=()=>{
addRecords(selected);
    alert('添加成功')
  }
  return (

    <MyLayout>

      <CategorySection value={selected.category}
                       onChange={category =>onChange({category})}
        />
      <TagsSection selected={selected.tagIds}
                   onChange={tagIds =>onChange({tagIds})}
      />
      <NotesSection value={selected.note}
                    onChange={note =>onChange({note})}
      />
      <NumberPadSection value={selected.amount}
                        onChange={amount =>onChange({amount})}
      onok={submit}
      />

    </MyLayout>

  );

}

export default Money;