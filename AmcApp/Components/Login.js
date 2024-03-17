import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, Modal, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Styles from '../Styling/Styles.css';

export default function Login({navigation})
{
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onPressRegister(registerType)
  {
    if(registerType === 'StudentRegister')
    {
      navigation.navigate('StudentRegister')
    }
    if(registerType === 'VolunteerRegister')
    {
      navigation.navigate('VolunteerRegister')
    }
    if(modalVisible)
    {
      setModalVisible(false)
    }
  }

  return (
    <View style={Styles.container}>
      <StatusBar style="auto" backgroundColor="transparent" translucent={true}/>
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
        <Text style={Styles.btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity title ='Register' style={Styles.button} onPress={() => setModalVisible(!modalVisible)}>
        <Text style={Styles.btnText}>Register</Text>
      </TouchableOpacity>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={Styles.container}>
          <View style={Styles.modalView}>
            <TouchableOpacity style={Styles.button} onPress={() => onPressRegister('StudentRegister')}>
              <Text style={Styles.btnText}>Student Registration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button} onPress={() => onPressRegister('VolunteerRegister')}>
              <Text style={Styles.btnText}>Volunteer Registration</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}