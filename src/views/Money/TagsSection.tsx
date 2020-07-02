import styled from 'styled-components';
import React from 'react';
import useTags from '../../hooks/useTags';
import creatId from '../../lib/creatId';


type Props = {
  selected:number[]
  onChange:(selected:number[])=>void
}
const TagsSection:React.FunctionComponent<Props> = (props) => {
  const {tags,setTags} = useTags()
  const selectedTagIds = props.selected;

  const onAddTag=()=>{
  const tagName= window.prompt('新标签的名称为')
    if(tagName!==null){
      setTags([...tags,{id:creatId(),name:tagName}])
    }
  }
  const onToggleTag=(tagId:number)=>{
  const index = selectedTagIds.indexOf(tagId)
    if(index>=0){
    props.onChange(selectedTagIds.filter(t=>t!==tagId))
      //如果tag已经被选中，就复制所有没有被选中的tag,作为新的 selectedTag
    }else {
      props.onChange([...selectedTagIds,tagId])
    }
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=><li key={tag.id} onClick={()=>onToggleTag(tag.id)}
        className={selectedTagIds.indexOf(tag.id)>=0?'selected':''}
        >{tag.name}</li>)}
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