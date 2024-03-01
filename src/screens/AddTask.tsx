import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React, { useId, useState } from 'react';
import { global } from '../utilities/styles';
import { TextInput } from 'react-native-gesture-handler';
import { color } from '../utilities/colors';
import { windowWidth } from '../utilities/dimensions';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos';
import { toDo } from '../interface/todo';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddTask = ({ navigation }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    id: new Date().getTime() + Math.random(),
    text: '',
    done: false
  });

  const addTask = () => {
    if (task?.text.length > 2) {
      dispatch(addTodo(task));
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={global.container}>
      <Text style={{ textAlign: 'center', alignSelf: 'center', top: 55, position: 'absolute', fontSize: 17 }}>Add Task</Text>
      <View style={{ position: 'absolute', top: 50, left: 20, flexDirection: 'row', width: windowWidth }}>
        <Pressable style={{}} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/icons/back.png')} style={{ width: 30, height: 30 }} />

        </Pressable>

      </View>
      <View style={{}}>
        <TextInput
          placeholder="What do you need to do today ?"
          style={{ width: windowWidth / 1.3, borderColor: 'black', borderRadius: 50, borderWidth: 1, height: 50, paddingLeft: 30 }}
          onChangeText={t => setTask({ ...task, text: t })}
          onSubmitEditing={addTask}

        />
        <Pressable onPress={addTask} style={{ backgroundColor: color.green, justifyContent: 'center', height: 50, borderRadius: 30, marginTop: 30 }}>
          <Text style={{ textAlign: 'center' }}>AddTask</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
