import { useState } from "react";

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddTask = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle}> Add Task</Text>
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
