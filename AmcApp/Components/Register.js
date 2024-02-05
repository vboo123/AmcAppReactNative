import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Register()
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    return(
        <View style={styles.register}>
            <Text style={styles.header}>Registration</Text>

            <TextInput style={styles.textinput} placeholder="Your name"
            onChangeText = {newText => setName(newText)}
            defaultValue={name}
            underlineColorAndroid={'transparent'} />

            <TextInput style={styles.textinput} placeholder="Your Email"
            onChangeText = {newText => setEmail(newText)}
            defaultValue={email}
            underlineColorAndroid={'transparent'} />

            <TextInput style={styles.textinput} placeholder="Your Password"
            onChangeText = {newText => setPassword(newText)}
            defaultValue={password}
            secureTextEntry={true} underlineColorAndroid={'transparent'} />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  register: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#000000',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#129923',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#000000',
    borderBottomColor: '#129923',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eee',
    marginTop: 30,
  },
  btnText: {
    color: '#000000',
    fontWeight: 'bold',
  }
});