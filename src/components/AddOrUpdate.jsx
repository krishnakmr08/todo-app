import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddOrUpdate = ({ header ,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
      <Text style={styles.textStyle}> {header}</Text>
    </TouchableOpacity>
  );
};

export default AddOrUpdate;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#20b2aa",
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
});
