import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import Profile from '../../shared/Profile';

const FavoritesPage = () => {
    const title = 'المفضلة'
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/80',
    },
  ]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
        <Profile title={title} />
      <ScrollView>
        {favorites.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage source={{ uri: product.image }} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
            </ProductInfo>
            <HeartIcon name="heart" />
          </ProductItem>
        ))}
      </ScrollView>
    </View>
  );
};

export default FavoritesPage;

const HeartIcon = styled(AntDesign)`
  color: red;
  font-size: 24px;
`;

const ProductItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  margin-right: 10px;
`;

const ProductInfo = styled.View`
  flex: 1;
`;

const ProductName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
