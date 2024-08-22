
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartProvider from './Cartcontext'
import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import Form1Screen from './Form1Screen';
import Form2Screen from './Form2Screen';
import Form3Screen from './Form3Screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
       <CartProvider>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Form1" component={Form1Screen} />
        <Stack.Screen name="Form2" component={Form2Screen} />
        <Stack.Screen name="Form3" component={Form3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
        </CartProvider>

  );
};

export default App;

