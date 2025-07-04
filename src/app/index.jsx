import TodoList from "@/components/TodoList";
import { windowHeight } from "@/utils/dimensions";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddTask from "../components/AddTask";

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.parentContainer}>
        <View style={styles.container}>
          <AddTask />
        </View>
        <View
          style={{
            height: 1,
            width: "90%",
            backgroundColor: "black",
            marginTop: 10,
          }}
        />
      </SafeAreaView>
      <View style={styles.listContainer}>
        <TodoList />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parentContainer: {
    height: windowHeight * 0.2,
    alignItems: "center",
  },

  container: {
    height: windowHeight * 0.1,
    width: "100%",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "white",
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
});
