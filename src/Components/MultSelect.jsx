import React, {  useRef } from 'react';
import {Select} from 'antd';

const { Option } = Select;
const MultSelect = (props) => {
  const SelectedOption = useRef();
  
  return (
    <Select mode="multiple" placeholder={props.placeholder} ref={SelectedOption} onChange={props.onChange}>
        {props.options.map((option) => (
            <Option ref={SelectedOption} key={option.id} value={option.id}>{option.name}</Option>            
        ))}
    </Select>
  )
}

export default MultSelect;

