import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Netflix</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A8A8A8" />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#A8A8A8" secureTextEntry={true} />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Iniciar sessão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordButtonText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#E50914',
    marginBottom: 50,
    fontFamily: 'CircularStd-Bold',
    letterSpacing: 0.5,
  },
  formContainer: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#3C3C3C',
    width: 300,
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: '#FFFFFF',
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#E50914',
    width: 300,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  forgotPasswordButton: {
    backgroundColor: 'transparent',
  },
  forgotPasswordButtonText: {
    color: '#A8A8A8',
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
