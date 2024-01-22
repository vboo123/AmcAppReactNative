import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';

const Login = () => {
  return(
    <View style={{padding: 10}}>

        <Text>Email</Text>
        style={{height: 50}}
      <TextInput
        style={{height: 40}}
        placeholder="Type your Email!"
      />

      <Text>Password</Text>
      style={{height: 50}}
      <TextInput
        style={{height: 40}}
        placeholder="Type your Password"
      />

      <Button>"Login"</Button>
    </View>
  )
};
export default Login;