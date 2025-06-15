import { useState } from "react";
import { TouchableOpacity } from "react-native";

import { StyleSheet, Text, TextInput, View } from "react-native";
import useTodo from "../context/TodoContext";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();
  const { addTodo } = useTodo();

  return (
    <View style={styles.container}>
      <Text> Titile </Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.titleInput}
        maxLength={233}
        selectionColor={"green"}
      />
      <Text> description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.descriptionInput}
        maxLength={100}
        multiline={true}
        selectionColor={"blue"}
      />

      <TouchableOpacity style={styles.button} onPress={() => addTodo({title,description})}>
        <Text style={styles.textStyle} > Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    gap: 20,
  },
  titleInput: {
    width: "90%",
    height: 40,
    paddingLeft: 5,
    borderWidth: 1,
  },
  descriptionInput: {
    height: 60,
    width: "90%",
    paddingLeft: 5,
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#20b2aa",
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  textStyle: {
    fontWeight: "400",
  },
});
