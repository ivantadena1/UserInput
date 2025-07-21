import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => {
   
    console.log('Logging in with:', email, password);
     if (email && password) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleFacebookLogin = () => {
  
    console.log('Logging in with Facebook');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        placeholderTextColor="#666" 
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#666" 
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Text style={styles.separatorText}>or</Text>

      <Pressable style={styles.facebookButton} onPress={handleFacebookLogin}>
        <Text style={styles.facebookButtonText}>Login with Facebook</Text>
      </Pressable>

      {submitted && (
                        <View style = {{alignItems: 'flex-start', justifyContent:'flex-start', marginLeft: -150}}>
                          
                          <Text>Email: {email}</Text>
                          <Text>Password: {password}</Text>
                        
                        </View>)}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#181818', // dark background
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fafafa', // light text
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#222', // dark input
    color: '#fafafa', // light text
  },
  button: {
    width: '100%',
    backgroundColor: '#0095f6', 
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: '#0095f6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  separatorText: {
    marginVertical: 25,
    color: '#aaa', // muted light
    fontSize: 16,
    textAlign: 'center',
  },
  facebookButton: {
    width: '100%',
    backgroundColor: '#4267B2', // Facebook blue
    paddingVertical: 14,
    borderRadius: 8,
    shadowColor: '#4267B2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 4,
  },
  facebookButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});