import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Modal, View, TouchableOpacity, Button} from 'react-native';
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
      <TouchableOpacity title ='Register' style={Styles.button} onPress={() => setModalVisible(!modalVisible)}>
        <Text style={Styles.btnText}>Register</Text>
      </TouchableOpacity>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={Styles.container}>
          <View style={styles.modalView}>
            <TouchableOpacity style={Styles.button} onPress={() => onPressRegister('StudentRegister')}>
              <Text style={Styles.btnText}>Student Registration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button} onPress={() => onPressRegister('VolunteerRegister')}>
              <Text style={Styles.btnText}>Volunteer Registration</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
   }
  });