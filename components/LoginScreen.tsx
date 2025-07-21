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
   
    backgroundColor: '#7a8595ff', 
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%', 
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#fff', 
    color: '#333', 
  },
  button: {
    width: '100%',
    backgroundColor: '#3f36bdff', 
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10, 
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separatorText: {
    marginVertical: 25, 
    color: '#666',
    fontSize: 16,
    
  },
  facebookButton: {
    width: '100%',
    backgroundColor: '#30955aff', 
    paddingVertical: 14,
    borderRadius: 8,
  },
  facebookButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});