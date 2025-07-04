import { useEffect, useState } from "react";

import { router } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CusTomButton";
import useTodo from "../context/TodoContext";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { addTodo, editPrevTodo, setEditPrevTodo, updateTodo,} =
    useTodo();

  useEffect(() => {
    setTask(editPrevTodo?.todo);
    return () => {
      setEditPrevTodo("");
    };
  }, []);
  const addTask = () => {
    addTodo(task);
    setTask("");
  };
  const updateTask = () => {
    updateTodo(editPrevTodo.id, task);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text> Write Your Today Task </Text>
      <TextInput
        value={task}
        onChangeText={setTask}
        style={styles.titleInput}
        maxLength={250}
        selectionColor={"green"}
      />

      {editPrevTodo ? (
        <CustomButton task="Update Task" handleTask={updateTask} />
      ) : (
        <CustomButton task="Add Task" handleTask={addTask} />
      )}
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
