import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'

const productData = [
  {
    id: 1,
    name: 'Product 1',
    height: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    height: 150,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    height: 200,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Product 4',
    height: 120,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Product 5',
    height: 180,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Product 6',
    height: 130,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Product 7',
    height: 170,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Product 8',
    height: 140,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Product 9',
    height: 160,
    image: 'https://via.placeholder.com/150',
  },
]

const ProductItem = ({ name, height, image }) => {
  return (
    <View style={[styles.item, { height }]}>
      <Image
        style={styles.image}
        source={{ uri: image }}
      />
      <Text>{name}</Text>
    </View>
  )
}

const ProductLista = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productData}
        renderItem={({ item }) => (
          <ProductItem
            name={item.name}
            height={item.height}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f9c2ff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
})

export default ProductLista
