import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Modal, View, TouchableOpacity, Button} from 'react-native';

export default function Login({navigation})
{
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button title ='Register' style={styles.button} OnPress={() => setModalVisible(true)}></Button>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Button title='Student Registration' style={styles.button} onPress={() => navigation.navigate('StudentRegister')}{...(setModalVisible(!modalVisible))}></Button>
            <Button title='Volunteer Registration' style={styles.button} onPress={() => navigation.navigate('VolunteerRegister')}{...(setModalVisible(!modalVisible))}></Button>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 60,
      paddingRight: 60,
    },
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
   },
   button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eee',
    marginTop: 30,
  }
  });