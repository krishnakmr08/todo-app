import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { windowHeight } from "../utils/dimensions";


const AddTodo = () => {
  const navigateToAddTodo = () => {
    router.navigate("/addTodo");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToAddTodo}>
      <AntDesign name="plus" color="#fff" size={35} />
      <Text style={styles.textStyle}> Add a Task </Text>
    </TouchableOpacity>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: windowHeight * 0.08,
    width: "90%",
    backgroundColor: "#222",
    alignItems: "center",
    gap: 15,
    marginLeft: 20,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 12,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
});
