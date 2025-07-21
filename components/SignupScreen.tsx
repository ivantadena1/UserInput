import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Phone, setPhonenumber] = useState('');
   const [submitted, setSubmitted] = useState(false);

 const handleSubmit = () => {
    if (email && password && confirmPassword && Phone) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };
    const handleClear = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhonenumber('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
      />
        <TextInput
        placeholder="Phone Number"
        value={Phone}
        onChangeText={setPhonenumber}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
       <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
        </Pressable>

        {submitted && (
                  <View style = {{alignItems: 'flex-start'}}>
                    
                    <Text>Email: {email}</Text>
                    <Text>Password: {password}</Text>
                    <Text>Confirm Password: {confirmPassword}</Text>
                     <Text>Phone number: {Phone}</Text>
                  </View>)}

        
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: '#0095f6', // Instagram blue
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
    margin: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  clearButton: {
    backgroundColor: '#333', // dark clear button
    paddingVertical: 14,
    borderRadius: 8,
    marginVertical: 10,
  }
});