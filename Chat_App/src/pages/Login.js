import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';

const Login = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container} >
            <Image 
              style={authStyle.logo}
              source={require("../assets/logo.png")}
            />
            <Text style={authStyle.logoText} > sdChat</Text>
          </View>
          <View style={{ flex: 1 }} >
            <Input 
              inputProps={{
                placeholder: "Your email address...",
                // secureTextEntry: true,
                keyboardType: "email-address"
              }}
            />
            <Input 
              inputProps={{
                placeholder: "Your password ..",
                secureTextEntry: true,
              }}
            />
            <Button title="Sign In" />
            <Button title="Sign Up" noBorder onPress={() => props.navigation.navigate("Sign")} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Login};
