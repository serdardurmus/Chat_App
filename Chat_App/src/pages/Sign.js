import React, { useState } from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';

const Sign = (props) => {  // Daha az, daha optimal yapı için tekrar bak
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  async function sign() {  
    // TODO: geçerli eposta ve doğru değer kontrolü yap (REGEX)
    // Tel doğrulama işlemi yapılabilir
    // alert(email + " " + password + " "+ passwordRepeat)
    if (passwordRepeat === password) {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        props.navigation.goBack();
      } catch (error) {
        Alert.alert("sdChat", "An error occured"); 
      }
    } else {
      Alert.alert("sdChat", "Password are not match"); 
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container} > 
            <Image
              style={authStyle.logo}
              source={require("../assets/logo.png")}
            />
            <Text style={authStyle.logoText} >sdChat</Text>
          </View>
          <View style={{ flex: 1}}>
            <Input 
              inputProps={{
                placeholder: "Type your e-mail addres..",
                keyboardType: "email-address"
              }}
              onType={(value) => setEmail(value)}
            />
            <Input 
              inputProps={{
                placeholder: "Type your password..",
                secureTextEntry: true
              }}
              onType={(value) => setPassword(value)}
            />
            <Input 
              inputProps={{
                placeholder: "Type your password again..",
                secureTextEntry: true
              }}
              onType={(value) => setPasswordRepeat(value)}
            />
            <Button 
              title="Create account" 
              onPress={() => sign()}
            />
            <Button 
              title="Cancel" 
              noBorder 
              onPress={() => props.navigation.goBack()} 
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Sign};
