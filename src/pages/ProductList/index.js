import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ProductItem from './ProductItem';

import { Container, SearchBar, PageCard } from './styles';

const OrderList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const data = [
    { key: 'A' },
    { key: 'B' },
    { key: 'C' },
    { key: 'D' },
    { key: 'E' },
    { key: 'F' },
    { key: 'G' },
    { key: 'H' },
  ];

  function onChangeSearch(query) {
    setSearchQuery(query);
  }

  return (
    <Container>
      <PageCard>
        <FlatList
          ListHeaderComponent={
            <SearchBar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          }
          numColumns={2}
          data={data}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={(e) => e.key}
        />
      </PageCard>
    </Container>
  );
};

export default OrderList;
