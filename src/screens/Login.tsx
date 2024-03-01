import { Pressable, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { global } from '../utilities/styles'
import { color } from '../utilities/colors'
import { windowHeight, windowWidth } from '../utilities/dimensions'
import { logIn } from '../redux/user'
import { useDispatch } from 'react-redux'

const Login = ({ navigation }) => {
  const [name, setName] = useState<string>()
  const [pass, setPass] = useState<string>()
  const dispatch = useDispatch()
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
        <TextInput placeholder='password' onChangeText={setPass} secureTextEntry={true} style={styles.input} />
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