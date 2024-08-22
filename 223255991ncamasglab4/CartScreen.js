import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from './Cartcontext';

const CartScreen = () => {
  const { cartItems, removeItemFromCart, getTotalPrice, clearCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.total}>Total: ${getTotalPrice().toFixed(2)}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={clearCart}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
     backgroundColor: 'red',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center'
  },
  checkoutText:{
    fontWeight:'bold'
  },
  checkoutButton:{
     backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  }
  
});

export default CartScreen;