import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { UserContext } from './UserContext';

const Form2Screen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!address) errors.address = 'Address is required';
    if (!city) errors.city = 'City is required';
    if (!state) errors.state = 'State is required';
    if (!zip || !/^\d{5}$/.test(zip)) errors.zip = 'Valid ZIP code is required';
    return errors;
  };

  const handleNext = () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setUser((prev) => ({ ...prev, address, city, state, zip }));
      navigation.navigate('Form3');
    } else {
      setErrors(errors);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      {errors.address && <Text style={styles.error}>{errors.address}</Text>}
      
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      {errors.city && <Text style={styles.error}>{errors.city}</Text>}
      
      <TextInput
        placeholder="State"
        value={state}
        onChangeText={setState}
        style={styles.input}
      />
      {errors.state && <Text style={styles.error}>{errors.state}</Text>}
      
      <TextInput
        placeholder="ZIP Code"
        value={zip}
        onChangeText={setZip}
        style={styles.input}
        keyboardType="numeric"
      />
      {errors.zip && <Text style={styles.error}>{errors.zip}</Text>}
      
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

export default Form2Screen;