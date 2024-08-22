import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from './UserContext';
import { ThemeContext } from './ThemeContext';

const ProfileScreen = () => {
  const { user } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.card}>
        <Text style={[styles.text, { color: theme.textColor }]}>Name: {user.name}</Text>
        <Text style={[styles.text, { color: theme.textColor }]}>Email: {user.email}</Text>
        <Text style={[styles.text, { color: theme.textColor }]}>Phone: {user.phone}</Text>
      </View>
      <TouchableOpacity onPress={() => setTheme({ textColor: '#fff', backgroundColor: '#000' })}>
        <Text style={styles.buttonText}>Dark Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTheme({ textColor: '#000', backgroundColor: '#fff' })}>
        <Text style={styles.buttonText}>Light Theme</Text>
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
  text:{
    color:'blue'
  },
  buttonText:{
    color: '#fff',
    fontSize: 16
  }
});

export default ProfileScreen;
