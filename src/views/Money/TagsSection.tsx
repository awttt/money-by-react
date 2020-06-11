import styled from 'styled-components';
import React, {useState} from 'react';

const TagsSection:React.FunctionComponent = (props) => {
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTags,setSelectedTags]=useState<string[]>([])
  const onAddTag=()=>{
  const tagName= window.prompt('新标签的名称为')
    if(tagName!==null){
      setTags([...tags,tagName])
    }
  }
  const onToggleTag=(tag:string)=>{
  const index = selectedTags.indexOf(tag)
    if(index>=0){
    setSelectedTags(selectedTags.filter(t=>t!==tag))
      //如果tag已经被选中，就复制所有没有被选中的tag,作为新的 selectedTag
    }else {
      setSelectedTags([...selectedTags,tag])
    }
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=><li key={tag} onClick={()=>onToggleTag(tag)}
        className={selectedTags.indexOf(tag)>=0?'selected':''}
        >{tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};


const Wrapper = styled.section`
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
&.selected{
background: grey;
}
}
}
`;


export default TagsSection;