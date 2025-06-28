import { useEffect, useState } from "react";

import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useTodo from "../context/TodoContext";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTodo, editPrevTodo, setEditPrevTodo, updateTodo,  } =
    useTodo();

  const setTextInput = () => {
    if (!editPrevTodo) return;
    else if (editPrevTodo) {
      setDescription(editPrevTodo.todo?.description);
      setTitle(editPrevTodo.todo?.title);
    } else {
      if (title === editPrevTodo.todo?.title) {
        setTitle("");
        setDescription("");
      }
    }
  };

  const clearTextInput = () => {
    if (title === editPrevTodo.todo?.title) {
      setTitle("");
      setDescription("");
    }
  };

  useEffect(() => {
    setTextInput();
    return () => {
      if (title === editPrevTodo.todo?.title) {
        setTitle("");
        setDescription("");
        setEditPrevTodo("")
      }
    };
  }, [title,editPrevTodo]);

  const updateTask = () => {
    updateTodo(editPrevTodo.id, { title, description });
    setEditPrevTodo("");

  };
  const addTask = () => {
    addTodo({ title, description });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text> Titile </Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.titleInput}
        maxLength={250}
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

      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.textStyle}> Add Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={updateTask}>
        <Text style={styles.textStyle}>updateTask</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    gap: 20,
  },
  titleInput: {
    width: "90%",
    height: 60,
    paddingLeft: 5,
    paddingBottom: 28,
    borderWidth: 1,
  },
  descriptionInput: {
    height: 100,
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
