import backgroundImg from "./src/images/img.jpg";

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [info, setInfo] = useState("");
  const [data, setData] = useState([]);

  const AddItemHandler = () => {
    setData([...data, info]);
    setInfo("");
  };
  const InputHandler = (event) => {
    setInfo(event.target.value);
  };
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
        onChange={InputHandler}
        value={info}
      />
      <Button
        title="Add Your Goal!"
        onPress={AddItemHandler}
        style={styles.button}
      />
      <ScrollView style={styles.scrollview}>
        {data.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.addedData}>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
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
  scrollview: {
    flexGrow: 1,
  },
  addedData: {
    fontSize: 22,
  },
});
