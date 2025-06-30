import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value) => {
  try {
    let key = `todo_${value?.id}`;
    await AsyncStorage.setItem(key, value?.todo);
    console.log("data saved ✅");
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("value is", value);
    }
  } catch (e) {
    console.log(e);
  }
};

const getMultipleData = async () => {
  try {
    const savedData = await AsyncStorage.multiGet(["todo_1", "todo_2"]);
    console.log(savedData);
  } catch (error) {
    console.log(error);
  }
};
const mergeUser = async () => {
  try {
    await AsyncStorage.mergeItem("todo-id", value);
  } catch (error) {
    console.log(error);
  }
};

const removeData = async () => {
  try {
    const savedUser = await AsyncStorage.clear();
    console.log(`Data cleared successfully hurray`);
  } catch (error) {
    console.log(error);
  }
};

export { getData, getMultipleData, mergeUser, removeData, storeData };
