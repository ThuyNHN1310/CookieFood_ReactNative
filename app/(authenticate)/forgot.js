import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
 
  const handleSubmit = () => {
     // Perform forgot password action here
     console.log('Forgot password for email:', email);
  };
 
  return (
     <View style={styles.container}>
       <Text style={styles.title}>Forgot Password</Text>
       <TextInput
         style={styles.input}
         placeholder="Enter your email"
         onChangeText={setEmail}
         value={email}
       />
       <Button title="Submit" onPress={handleSubmit} />
     </View>
  );
 };
 const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     paddingHorizontal: 20,
  },
  title: {
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom: 20,
  },
  input: {
     borderWidth: 1,
     borderColor: 'gray',
     padding: 10,
     marginBottom: 20,
     borderRadius: 5,
  },
 });
 export default ForgotPassword;