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

const Sign = (props) => {
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
            />
            <Input 
              inputProps={{
                placeholder: "Type your password..",
                secureTextEntry: true
              }}
            />
            <Input 
              inputProps={{
                placeholder: "Type your password again..",
                secureTextEntry: true
              }}
            />
            <Button title="Create account" />
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
