import { Pressable, StyleSheet, Text, TextInput, View, SafeAreaView,Image } from 'react-native'
import React, { useState } from 'react'
import { global } from '../utilities/styles'
import { color } from '../utilities/colors'
import { windowHeight, windowWidth } from '../utilities/dimensions'
import { logIn } from '../redux/user'
import { useDispatch } from 'react-redux'
import { LoginProps } from '../interface/login'


const Login:React.FC<LoginProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [secureText,setSecureText] = useState<boolean>(true)
  const dispatch = useDispatch()
  
  //incorrect credentials: displaying message(FlashMessage) that credentials are incorrect / implement robust authentication system with detailed error handling for various auth failures
  //incorrect format: display message that format is incorrect / Use regex to validate the email format and provide real-time feedback to the user before submission
  const check = async () => {
    if (name == 'admin' && pass == 'admin') {
      dispatch(logIn(''))
    }
  }

  return (
    <SafeAreaView style={[global.container, { justifyContent: 'space-around' }]}>

      <Text style={styles.pressText}>Login</Text>
      <View>
        <TextInput placeholder='name' style={styles.input} onChangeText={setName} autoCapitalize='none' />
        <View><TextInput placeholder='password' onChangeText={setPass} secureTextEntry={secureText} style={styles.input} ></TextInput><Pressable onPress={()=>{setSecureText(!secureText)}}><Image source={require('../assets/icons/eye.png')} style={{height:25,width:25,position:'absolute',right:0,bottom:7}}/></Pressable></View>
      </View>
      <Pressable onPress={check} style={styles.press}><Text style={styles.pressText}>Log in</Text></Pressable>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  press: {
    backgroundColor: color.green,
    height: 50,
    borderRadius: 40,
    width: windowWidth / 2,
    justifyContent: 'center'
  },
  pressText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20

  },
  input: {
    width: windowWidth / 1.5,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    paddingLeft: 10

  }
})