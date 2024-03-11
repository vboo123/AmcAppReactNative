import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Styles from '../Styling/Styles.css';

export default function VolunteerRegister()
{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    return(
        <View style={Styles.container}>
          <StatusBar style="auto" backgroundColor="transparent" translucent={true}/>
          <Text style={Styles.header}>Volunteer Registration</Text>

          <TextInput style={Styles.textinput} placeholder="Volunteer first name"
          onChangeText={newText => setFirstName(newText)}
          defaultValue={firstName}
          underlineColorAndroid={'transparent'} />

          <TextInput style={Styles.textinput} placeholder="Volunteer last name"
          onChangeText={newText => setLastName(newText)}
          defaultValue={lastName}
          underlineColorAndroid={'transparent'} />

          <TextInput style={Styles.textinput} placeholder="Your Email"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
          underlineColorAndroid={'transparent'} />

          <TextInput style={Styles.textinput} placeholder="Your Password"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
          secureTextEntry={true}
          underlineColorAndroid={'transparent'} />

          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.btnText}>Signup</Text>
          </TouchableOpacity>

        </View>
    );
}