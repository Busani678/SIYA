import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { UserContext } from './UserContext';

const Form3Screen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!/^\d{16}$/.test(cardNumber)) errors.cardNumber = 'Valid 16-digit card number is required';
    if (!/^\d{2}\/\d{2}$/.test(expirationDate)) errors.expirationDate = 'Valid MM/YY expiration date is required';
    if (!/^\d{3}$/.test(cvv)) errors.cvv = 'Valid 3-digit CVV is required';
    return errors;
  };

  const handleSubmit = () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setUser((prev) => ({ ...prev, paymentDetails: { cardNumber, expirationDate, cvv } }));
      
      navigation.navigate('Profile'); 
    } else {
      setErrors(errors);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        style={styles.input}
        keyboardType="numeric"
        maxLength={16}
      />
      {errors.cardNumber && <Text style={styles.error}>{errors.cardNumber}</Text>}
      
      <TextInput
        placeholder="Expiration Date (MM/YY)"
        value={expirationDate}
        onChangeText={setExpirationDate}
        style={styles.input}
        maxLength={5}
      />
      {errors.expirationDate && <Text style={styles.error}>{errors.expirationDate}</Text>}
      
      <TextInput
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        style={styles.input}
        keyboardType="numeric"
        maxLength={3}
      />
      {errors.cvv && <Text style={styles.error}>{errors.cvv}</Text>}
      
      <Button title="Submit" onPress={handleSubmit} />
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

export default Form3Screen