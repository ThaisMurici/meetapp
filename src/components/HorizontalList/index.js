import React from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';

// import { Container } from './styles';

import MeetupCard from '~/components/MeetupCard';

const HorizontalList = ({ data }) => (
  <FlatList
    horizontal
    data={data}
    renderItem={({ item }) => <MeetupCard item={item} />}
    keyExtractor={item => item.id.toString()}
  />
);

HorizontalList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HorizontalList;
