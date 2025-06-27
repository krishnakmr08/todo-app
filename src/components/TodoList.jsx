import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import useTodo from "../context/TodoContext";

import { router } from "expo-router";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const TodoItem = ({ item }) => {
  const { deleteTodo } = useTodo();
  const { setEditPrevTodo } = useTodo();

  const deleteTheTodo = () => {
    deleteTodo(item.id);
  };
  const updateNewTodo = () => {
    setEditPrevTodo(item);
    router.navigate("/addTodo");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{item.todo}</Text>
      <TouchableOpacity style={styles.removeContainer} onPress={deleteTheTodo}>
        <MaterialIcons name="delete" color="#fff" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editContainer} onPress={updateNewTodo}>
        <MaterialIcons name="edit" color="blue" size={35} />
      </TouchableOpacity>
    </View>
  );
};

const TodoList = () => {
  const { todos } = useTodo();
  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
    height: 60,
    backgroundColor: "#d3d3d3",
    width: "90%",
    margin: 2,
  },
  textStyle: {
    fontSize: 15,
    paddingLeft: 2,
  },
  editContainer: {
    position: "absolute",
    right: 50,
    backgroundColor: "azure",
    height: 60,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  removeContainer: {
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
