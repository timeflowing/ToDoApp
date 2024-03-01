import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux'
import Login from '../screens/Login';
import TaskList from '../screens/TaskList';
import AddTask from '../screens/AddTask';
import { RootState } from '../redux/store';

const Stack = createStackNavigator()
const Menu = createStackNavigator()


const Main = () => {
  return (
    <Menu.Navigator screenOptions={{ headerShown: false }}>
      <Menu.Screen name='TaskList' component={TaskList} />
      <Menu.Screen name='AddTask' component={AddTask} />
    </Menu.Navigator>
  )
}
export const Root = () => {
  const { logged } = useSelector((state:RootState) => state.user)


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {logged ? (
        <Stack.Screen name='Tasks' component={Main} />
      ) : (
        <Stack.Screen name='Login' component={Login} />
      )}

    </Stack.Navigator>

  )
}