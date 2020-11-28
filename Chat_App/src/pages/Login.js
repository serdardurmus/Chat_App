import React, { useState } from 'react';
import {
  SafeAreaView,
  Dimensions,
  Alert,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';
import { resolveAuthError } from '../functions';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login () {
    try {
      if (email==="" || password==="")
        {Alert.alert("sdChat", resolveAuthError("auth/null-value")) }
      else {
        await auth().signInWithEmailAndPassword(email, password)
        props.navigation.navigate("Timeline");
      }
    } catch (error) {
      Alert.alert("sdChat", resolveAuthError(error.code)) 
    }}
  /**
   * function login () {
      auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => alert("Greit"))
      .catch((err) => Alert.alert("sdChat", resolveAuthError(err.code)));
  }
   */

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
              onType={value => setEmail(value)}
            />
            <Input 
              inputProps={{
                placeholder: "Your password ..",
                secureTextEntry: true,
              }}
              onType={value => setPassword(value)}
            />
            <Button 
              title="Sign In" 
              onPress={() => login()}
            />
            <Button title="Sign Up" noBorder onPress={() => props.navigation.navigate("Sign")} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Login};
