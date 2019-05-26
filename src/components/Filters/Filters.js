import React, { Component } from 'react';

import Switch from 'antd/lib/switch';
import 'antd/lib/switch/style/css';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';

import { getFilters } from '../../services/FilterApi';
import createFilterComponents from './filterComponents';

const { Search } = Input;

export default class Filters extends Component {
  state = {
    filters: [],
    advancedSearch: false,
    loadingAdvancedFilters: true,
  }

  async componentDidMount() {
    const { data: { filters } } = await getFilters();

    this.setState({ filters, loadingAdvancedFilters: false });
  }

  render() {
    const { filters, loadingAdvancedFilters, advancedSearch } = this.state;

    return (
      <div>
        <div>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
          <Switch
            loading={loadingAdvancedFilters}
            onChange={() => this.setState({ advancedSearch: !advancedSearch })}
          />
          Advanced Filters
        </div>
        {advancedSearch && createFilterComponents(filters)}
      </div>
    );
  }
}
