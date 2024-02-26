import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import StudentRegister from './StudentRegister';

export default function Login({navigation})
{
  return (
    <View style={styles.container}>

        <Button title='Student Registration' style={styles.button} onPress={() => navigation.navigate('StudentRegister')}></Button>

        <Button title='Volunteer Registration' style={styles.button} onPress={() => navigation.navigate('VolunteerRegister')}></Button>

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
  });