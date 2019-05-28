import React, { useEffect, useState } from 'react';

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

const Filters = () => {
  const [filterFields, setFilterFields] = useState([]);
  const [loadingAdvancedFilters, setLoadingAdvancedFilters] = useState(true);

  useEffect(() => {
    getFilters().then(({ data: { filters } }) => {
      setLoadingAdvancedFilters(false);
      setFilterFields(filters);
    });
  }, []);

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
          <Panel header="Filtros Avançados">
            <DynamicFilters filterFields={filterFields} />
          </Panel>
        </Collapse>
      </Spin>
    </div>
  );
};


export default Filters;
