import Layout from '../components/Layout';
import React, {useState} from 'react';
import NumberPadSection from './Money/NumberPadSection';
import CategorySection from './Money/CategorySection';
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
import useRecords from '../hooks/useRecords';



type Category = '-'|'+'

const defaultFormData={

}

function Money() {
  const [selected,setSelected] = useState({
    tagIds:[] as number[],
    note:'',
    category:'-' as Category,
    amount:0
  })

   const {records,addRecords} = useRecords()

  const onChange=(obj:Partial<typeof selected>)=>{
    setSelected({...selected,...obj})
  }
  const submit=()=>{
addRecords(selected);
    alert('添加成功')
  }
  return (
    <Layout>
      {JSON.stringify(selected)}
      <hr/>
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
    </Layout>
  );

}

export default Money;