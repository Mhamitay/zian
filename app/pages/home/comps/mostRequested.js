import React from 'react'
import { FlatList, View } from 'react-native'
import Product from '../../product'

function MostRequested({ data }) {
  let newdata = getRandomItem(data)
  function getRandomItem(data) {
    let firstList = data

    // Create a new array to store the randomly selected items
    let newList = []

    // Generate random indices to select items from 'firstList'
    let randomIndex1 = Math.floor(Math.random() * firstList.length)
    let randomIndex2 = Math.floor(Math.random() * firstList.length)

    // Ensure that both random indices are different
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * firstList.length)
    }

    // Add the randomly selected items to 'newList'
    newList.push(firstList[randomIndex1])
    newList.push(firstList[randomIndex2])

    // 'newList' now contains the two randomly selected items from 'firstList'
    return newList
  }

  const renderItem = ({ item, i }) => {
    const StorefrontIcon = 'StorefrontIcon'

    return (
      <Product
        key={item.id}
        id={item.id}
        img={item.img}
      />
    )
  }
  return (
    <View>
      <FlatList
        onScroll={(e) => {
          //scrollY.setValue(e.nativeEvent.contentOffset.y)
        }}
        data={newdata}
        //numColumns={2}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item) => `key-${item._id}`}
        initialNumToRender={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default MostRequested
