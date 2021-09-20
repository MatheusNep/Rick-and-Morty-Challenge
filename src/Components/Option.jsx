import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const OptionSelect = (props) => {
    const option  = props.option
  return (
        <Option value={option.id}>{option.name}</Option>
  )
}

export default OptionSelect;
