import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.logoText}>Netflix</Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.titleText}>Esqueceu sua senha?</Text>
        <TextInput style={styles.inputText} placeholder="Insira seu email aqui" />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#E50914',
    fontSize: 24,
    fontWeight: 'bold',
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputText: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 50,
    width: 300,
    paddingHorizontal: 20,
  },
  bottomContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  button: {
    backgroundColor: '#E50914',
    borderRadius: 25,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
