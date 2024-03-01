import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View, Image, Modal } from 'react-native'
import React, { useId, useState } from 'react'
import { global } from '../utilities/styles'
import { logOut } from '../redux/user'
import { useDispatch, useSelector } from 'react-redux'
import { color } from '../utilities/colors'
import { windowHeight, windowWidth } from '../utilities/dimensions'
import { checkIt, deleteTodo, updateToDo } from '../redux/todos'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextInput} from 'react-native-gesture-handler'
import { LoginProps } from '../interface/login'
import { toDo } from '../interface/todo'
import { RootState } from '../redux/store'

//large number of tasks: Implement pagination or infinite scrolling to load tasks in chunks rather than all at once. Using FlashList and FlashImage for caching
//deleting or editing the wrong task: Implement an undo feature for delete actions or a confirmation dialog before deleting or editing a task.
const TaskList:React.FC<LoginProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const dispatch = useDispatch()
  const { todos } = useSelector((state:RootState)=> state.todos)

  const edit = () => {
    dispatch(updateToDo(editable))
    setModalVisible(false)
  }
  const [editable, setEditable] = useState<toDo>({
    id: '',
    text: '',
    done:false
  })
  const renderItem = ({ item}: { item: toDo;index:number}) => {

    return (
      <View style={styles.item}>
        <BouncyCheckbox
          size={25}
          fillColor={color.green}
          unfillColor="#FFFFFF"
          text={item.text}
          isChecked={item?.done}
          iconStyle={{ borderColor: "red" }}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ maxWidth: windowWidth / 2, paddingVertical: 10 }}
          onPress={(isChecked: boolean) => { dispatch(checkIt({ id: item.id, check: isChecked })) }}
        />
        <Modal
          animationType="fade"
          transparent={true}
          style={{ alignSelf: 'center', backgroundColor: 'black', flex: 1, width: windowWidth }}
          visible={modalVisible}
          onRequestClose={() => {
          }}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.7)', alignSelf: 'center', position: 'absolute', height: windowHeight, width: windowWidth }}>

            <View style={{ alignSelf: 'center', top: windowHeight / 3, minHeight: 100, width: windowWidth / 1.3, backgroundColor: 'white', borderRadius: 30, alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
              <TextInput onChangeText={(t) => { setEditable({ ...editable, text: t }) }} style={{ borderColor: 'black', borderBottomWidth: 1, width: windowWidth / 1.5, borderRadius: 15, paddingLeft: 10, padding: 10 }} value={editable.text} />
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Pressable onPress={() => setModalVisible(false)} style={{ backgroundColor: '#eeee', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginHorizontal: 10, paddingHorizontal: 10 }}><Text>Cancel</Text></Pressable>
                <Pressable onPress={edit} style={{ backgroundColor: color.green, height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}><Text>OK</Text></Pressable>
              </View>
            </View>

          </View>
        </Modal>
        <Pressable style={{ position: 'absolute', right: 40 }} onPress={() => { setModalVisible(!modalVisible); setEditable({ id: item.id, text: item.text }) }}><Image source={require('../assets/icons/edit.png')} style={{ width: 25, height: 25 }} /></Pressable>
        <Pressable style={{ position: 'absolute', right: 0 }} onPress={() => dispatch(deleteTodo(item.id))}><Image source={require('../assets/icons/trash.png')} style={{ width: 30, height: 30 }} /></Pressable>

      </View>
    )
  }


  return (
    <SafeAreaView style={[global.container, { justifyContent: 'space-between' }]}>
      <Text style={{ margin: 20, fontSize: 28 }}>Task List</Text>

      <FlatList data={todos} renderItem={renderItem} style={{}} keyExtractor={(item) => String(item.id)} ListEmptyComponent={() => <View style={{ marginTop: windowHeight / 5 }}><Text style={{ fontSize: 18,textAlign:'center',paddingHorizontal:20 }}>A spotless list!</Text><Text style={{fontSize: 18,paddingTop:5}}>Dare to fill it with your amazing tasks.</Text></View>} />
      <Pressable onPress={() => navigation.navigate('AddTask')} style={{ backgroundColor: color.green, margin: 20, marginBottom: 60, borderRadius: 30, alignItems: 'center', width: windowWidth / 2 }}><Text style={{ fontSize: 22, padding: 10, textAlign: 'center' }}>Add Task +</Text></Pressable>
      <Pressable style={{ marginBottom: 20 }} onPress={() => dispatch(logOut(''))}><Text style={{ fontSize: 15 }}><Image source={require('../assets/icons/logout.png')} style={{ height: 20, width: 20 }} />  Logout  </Text></Pressable>


    </SafeAreaView>

  )
}

export default TaskList

const styles = StyleSheet.create({
  item: {
    borderColor: '#333',
    borderBottomWidth: 1,
    width: windowWidth / 1.2,
    minHeight: 50,

    justifyContent: 'center'
  },
  itemText: {
    fontSize: 18,
    paddingLeft: 20
  }
})