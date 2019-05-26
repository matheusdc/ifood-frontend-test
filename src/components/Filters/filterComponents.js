import React from 'react';

import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';

import { setFilters } from '../../actions';

const { Option } = Select;

const onChange = (id, value) => {
  setFilters({ [id]: value });
};

const SelectComponent = ({ id, name, values }) => (
  <Select id={id} onChange={value => onChange(id, value)}>
    {values.map(({ name, value }) => <Option value={value}>{name}</Option>)}
  </Select>
);

const InputNumberComponent = ({
  id, name,
}) => (
  <InputNumber id={id} onChange={value => onChange(id, value)} placeholder={name} />
);

const DatePickerComponent = ({
  id, name,
}) => (
  <DatePicker showTime onChange={value => onChange(id, value.toISOString())} id={id} placeholder={name} />
);

const createFilterComponent = (filter) => {
  const filterKeys = Object.keys(filter);

  const isSelectComponent = filterKeys.includes('values');
  if (isSelectComponent) {
    return SelectComponent(filter);
  }

  const isDateComponent = filter.validation.primitiveType === 'STRING';
  if (isDateComponent) {
    return DatePickerComponent(filter);
  }

  const isNumberComponent = filter.validation.primitiveType === 'INTEGER';
  if (isNumberComponent) {
    return InputNumberComponent(filter);
  }

  return <div />; // TODO: throw error for unexpected component
};

export default filters => filters.map(createFilterComponent);
