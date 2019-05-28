import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import moment from 'moment';

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

const DynamicFilters = ({ filters, filterFields }) => {
  const onChange = (id, value) => {
    setFilters({ [id]: value });
  };

  const SelectComponent = ({
    // eslint-disable-next-line react/prop-types
    id, name, values,
  }) => (
      <Col sm={24} xl={6} key={id}>
        <Item label={name}>
          <Select
            id={id}
            onChange={value => onChange(id, value)}
            value={filters[id]}
            style={{ width: '100%' }}
            placeholder={name}
          >
            {values.map(({ name: optionName, value }) => (
              <Option key={optionName} value={value}>{optionName}</Option>
            ))}
          </Select>
        </Item>
      </Col>
    );

  const InputNumberComponent = ({
    // eslint-disable-next-line react/prop-types
    id, name, validation: { min, max },
  }) => (
      <Col sm={24} xl={6} key={id}>
        <Item label={name}>
          <InputNumber
            id={id}
            value={filters[id]}
            min={min}
            max={max}
            onChange={value => onChange(id, value)}
            placeholder={name}
            style={{ width: '100%' }}
          />
        </Item>
      </Col>
    );

  const DatePickerComponent = ({
    // eslint-disable-next-line react/prop-types
    id, name,
  }) => (
      <Col sm={24} xl={6} key={id}>
        <Item label={name}>
          <DatePicker
            id={id}
            showTime
            onChange={value => onChange(id, value.toISOString())}
            value={moment(filters[id])}
            placeholder={name}
            style={{ width: '100%' }}
          />
        </Item>
      </Col>
    );

  const createFilterComponent = (filter) => {
    const filterKeys = Object.keys(filter);

    const isSelectComponent = filterKeys.includes('values');
    if (isSelectComponent) {
      return SelectComponent(filter);
    }

    const isDateComponent = (
      filter.validation.primitiveType === 'STRING'
      && filter.validation.entityType === 'DATE_TIME'
    );
    if (isDateComponent) {
      return DatePickerComponent(filter);
    }

    const isNumberComponent = filter.validation.primitiveType === 'INTEGER';
    if (isNumberComponent) {
      return InputNumberComponent(filter);
    }

    return null;
  };

  return (
    <Row gutter={8}>
      {filterFields.map(createFilterComponent)}
    </Row>
  );
};

DynamicFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  filterFields: PropTypes.array.isRequired,
};

const mapStateToProps = ({ filters }) => ({
  filters,
});

export default connect(mapStateToProps)(DynamicFilters);
