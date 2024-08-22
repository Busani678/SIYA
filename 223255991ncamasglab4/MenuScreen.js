import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from './Cartcontext';

const MenuScreen = () => {
  const { addItemToCart } = useContext(CartContext);
  const foodItems = [
    { id: 1, name: 'Burger', description: 'Juicy beef burger', price: 8.99,image:'https://simplehomeedit.com/recipe/homemade-beef-burger/' },
    { id: 2, name: 'Pizza', description: 'Cheesy pizza', price: 10.99, image: 'https://www.foodandwine.com/recipes/classic-cheese-pizza' },
    
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addItemToCart(item)}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={foodItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};


const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  itemContainer: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MenuScreen;



