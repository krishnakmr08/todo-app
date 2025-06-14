import { Button, StyleSheet, Text, View } from 'react-native'

import useTodo from '../context/TodoContext'

const HomeScreen = () => {
  const {addTodo,todos} = useTodo()
   console.log(todos)
  return (
    <View>
    <Button title='name' onPress={() =>addTodo(" my third todo")} />
      <Text>   </Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})