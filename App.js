import backgroundImg from "./src/images/img.jpg";

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [info, setInfo] = useState("");
  const [data, setData] = useState([]);

  const handlePress = () => {
    console.log("Button pressed!");
  };

  const PressHandler = () => {};

  return (
    <View style={styles.appContainer}>
      <TextInput
        style={styles.textinput}
        placeholder="Enter your name"
        placeholderTextColor="#b0b0b0"
        keyboardType="default"
        autoCapitalize="words"
        autoCompleteType="name"
        returnKeyType="done"
        blurOnSubmit={false}
        onChangeText={setInfo}
        value={info}
      />
      <Button
        title="Add Your Goal!"
        onPress={handlePress}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  textinput: {
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#b0b0b0",
    backgroundColor: "#f0f0f0",
    marginBottom: 16,
    fontSize: 18,
    color: "#333",
  },
});
