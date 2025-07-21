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
    backgroundColor: 'dirtywhite',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#30d3c8ff',
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: { 
    color: '#fff',
    margin:10,
    textAlign: 'center',
    fontSize: 16,
  },
  clearButton: {
    backgroundColor: '#368248ff',
    paddingVertical: 14,
    borderRadius: 8,
    marginVertical: 10,
  }
});