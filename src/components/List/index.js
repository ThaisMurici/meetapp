import React from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';

import MeetupCard from '~/components/MeetupCard';

const List = ({ data, horizontal }) => (
  <FlatList
    horizontal={horizontal}
    data={data}
    renderItem={({ item }) => <MeetupCard horizontal={horizontal} item={item} />}
    keyExtractor={item => item.id.toString()}
  />
);

List.defaultProps = {
  horizontal: false,
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  horizontal: PropTypes.bool,
};

export default List;
