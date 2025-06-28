import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ task, handleTask }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleTask}>
      <Text style={styles.textStyle}> {task}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#20b2aa",
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
});
