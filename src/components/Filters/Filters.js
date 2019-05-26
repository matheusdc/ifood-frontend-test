import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Switch from 'antd/lib/switch';
import 'antd/lib/switch/style/css';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';

import { getFilters } from '../../services/FilterApi';
import createFilterComponents from './filterComponents';

import { getPlaylists } from '../../actions';

const { Search } = Input;

class Filters extends Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
  }

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
    const { filters } = this.props;
    console.log(filters);

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
        {advancedSearch && createFilterComponents(filterFields)}
        <button type="button" onClick={() => getPlaylists(filters)}>search</button>
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({
  filters,
});

export default connect(mapStateToProps)(Filters);
