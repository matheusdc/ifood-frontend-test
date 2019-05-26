import React from 'react';

import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';

import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import { setFilters } from '../../actions';

const { Option } = Select;
const { Item } = Form;

const onChange = (id, value) => {
  setFilters({ [id]: value });
};

const SelectComponent = ({ id, name, values }) => (
  <Col sm={24} xl={6} key={id}>
    <Item label={name}>
      <Select id={id} onChange={value => onChange(id, value)} style={{ width: '100%' }} placeholder={name}>
        {values.map(({ name, value }) => <Option value={value}>{name}</Option>)}
      </Select>
    </Item>
  </Col>
);

const InputNumberComponent = ({
  id, name,
}) => (
    <Col sm={24} xl={6} key={id}>
      <Item label={name}>
        <InputNumber id={id} onChange={value => onChange(id, value)} placeholder={name} style={{ width: '100%' }} />
      </Item>
    </Col>
  );

const DatePickerComponent = ({
  id, name,
}) => (
    <Col sm={24} xl={6} key={id}>
      <Item label={name}>
        <DatePicker showTime onChange={value => onChange(id, value.toISOString())} id={id} placeholder={name} style={{ width: '100%' }} />
      </Item>
    </Col>
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

export default filters => (
  <Row gutter={8}>
    {filters.map(createFilterComponent)}
  </Row>
);
