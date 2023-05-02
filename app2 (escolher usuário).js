import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import frango from './assets/Frango.png';
import penguim from './assets/penguim.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quem está assistindo?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={frango} style={styles.image} />
          <Text style={styles.buttonText}>Usuário 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={penguim} style={styles.image} />
          <Text style={styles.buttonText}>Usuário 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    width: 150,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    textTransform: 'uppercase',
  },
});
