import React, { Component } from 'react';

import Switch from 'antd/lib/switch';
import 'antd/lib/switch/style/css';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';

import { getFilters } from '../../services/FilterApi';
import createFilterComponents from './filterComponents';

import { getPlaylists } from '../../actions';

const { Search } = Input;
const { Item } = Form;

class Filters extends Component {
  state = {
    filterFields: [],
    advancedSearch: false,
    loadingAdvancedFilters: true,
  }

  async componentDidMount() {
    const { data: { filters } } = await getFilters();

    this.setState({ filterFields: filters, loadingAdvancedFilters: false });
  }

  render() {
    const { filterFields, loadingAdvancedFilters, advancedSearch } = this.state;

    return (
      <div>
        <Row gutter={8}>
          <Col sm={24} xl={18}>
            <Item label="Search">
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
              />
            </Item>
          </Col>
          <Col sm={24} xl={6}>
            <Item label="Advanced Filters">
              <Switch
                loading={loadingAdvancedFilters}
                onChange={() => this.setState({ advancedSearch: !advancedSearch })}
              />
            </Item>
          </Col>
        </Row>
        {advancedSearch && createFilterComponents(filterFields)}
      </div>
    );
  }
}


export default Filters;
