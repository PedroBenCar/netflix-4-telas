import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function NetflixScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NETFLIX</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sessão</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]}>
        <Text style={[styles.buttonText, { color: '#fff' }]}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#e50914',
    marginBottom: 30,
  },
  button: {
    width: '80%',
    height: 60,
    backgroundColor: '#e50914',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
