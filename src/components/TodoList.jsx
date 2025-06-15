import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import useTodo from "../context/TodoContext";
const TodoItem = ({ item }) => {
  const { deleteTodo, todos } = useTodo();
  console.log(item?.id);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{item.title}</Text>
      <Text style={styles.textStyle}>{item.description}</Text>

      <TouchableOpacity style={styles.removeContainer}>
        <MaterialIcons
          name="delete"
          color="#fff"
          size={30}
          onPress={() => deleteTodo(item?.id)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editContainer}>
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
