import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Index() {
   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && email && age) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setAge('');
    setSubmitted(false);
  };

  return (
 <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>User Registration Form</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text: string) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          value={age}
          onChangeText={(text: string) => setAge(text)}
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} />
          <View style={styles.space} />
          <Button title="Clear" onPress={handleClear} color="#ff5c5c" />
        </View>

        {submitted && (
          <View style={styles.output}>
            <Text style={styles.outputTitle}>Submitted Information:</Text>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Age: {age}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  space: {
    width: 10,
  },
  output: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 8,
  },
  outputTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});