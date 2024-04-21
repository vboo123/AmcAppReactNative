import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../Styling/Styles.css';

export default function InstructorRegister()
{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('')
    return(
        <View style = {styles.register}>
            <Text style = {styles.header}>Instructor Register</Text>

            <TextInput style = {styles.textinput} placeholder = "Instructor first name"
            onChangeText = {newText => setFirstName(newText)}
            defaultValue = {firstName}
            underlineColorAndroid = {'transparent'}/>

            <TextInput style = {styles.textinput} placeholder = "Instructor last name"
            onChangeText = {newText => setLastName(newText)}
            defaultValue = {lastName}
            underlineColorAndroid = {'transparent'}/>

            <TextInput style = {styles.textinput} placeholder = "Your Email"
            onChangeText = {newText => setEmail(newText)}
            defaultValue = {email}
            underlineColorAndroid = {'transparent'}/>

            <TextInput style = {styles.textinput} placeholders = "Your Phone Number"
            onChangeText = {newText => setPhoneNumber(newText)}
            defaultValue = {phoneNumber}
            underlineColorAndroid = {'transparent'}/>

            <TextInput style={styles.textinput} placeholder="Your Preferred Password"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            secureTextEntry={true}
            underlineColorAndroid={'transparent'} />

            <TextInput style = {styles.textinput} placeholders = "Your Phone Number"
            onChangeText = {newText => setPhoneNumber(newText)}
            defaultValue = {phoneNumber}
            underlineColorAndroid = {'transparent'}/>

            <TouchableOpacity style = {Styles.button}>
              <Text style = {Styles.btnText}>Signup</Text>
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
  }
});