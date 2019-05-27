import React, { Component } from 'react';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';

import Collapse from 'antd/lib/collapse';
import 'antd/lib/collapse/style/css';

import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';

import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/css';

import { getFilters } from '../../services/FilterApi';
import DynamicFilters from './DynamicFilters';

import { setFilters } from '../../actions';

const { Search } = Input;
const { Item } = Form;
const { Panel } = Collapse;

class Filters extends Component {
  state = {
    filterFields: [],
    loadingAdvancedFilters: true,
  }

  async componentDidMount() {
    const { data: { filters } } = await getFilters();

    this.setState({ filterFields: filters, loadingAdvancedFilters: false });
  }

  render() {
    const { filterFields, loadingAdvancedFilters } = this.state;

    return (
      <div>
        <Item label="Buscar playlists">
          <Search
            id="search"
            size="large"
            placeholder="Busque suas playlists aqui!"
            onChange={event => setFilters({ keyword: event.target.value })}
          />
        </Item>

        <Spin spinning={loadingAdvancedFilters} style={{ height: 50 }}>
          <Collapse bordered={false}>
            <Panel header="Filtros Avançados" key="1">
              <DynamicFilters filterFields={filterFields} />
            </Panel>
          </Collapse>
        </Spin>
      </div>
    );
  }
}


export default Filters;
