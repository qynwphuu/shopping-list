import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  FlatList,
} from "react-native";

type dataList = {
  title: string;
  description: string;
};

export default function App() {
  const [iniList, setiniList] = useState<dataList>({
    title: "",
    description: "",
  });
  const [list, setList] = useState<dataList[]>([]);

  const Add = () => {};

  const Clear = () => {};

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        return (
        <View style={styles.container}>
          <TextInput
            value={iniList.title}
            onChangeText={(text) => setiniList({ ...iniList, title: text })}
            placeholder="Enter a title..."
          />

          <TextInput
            value={iniList.description}
            onChangeText={(text) =>
              setiniList({ ...iniList, description: text })
            }
            placeholder="Enter a description..."
          />
        </View>
        );

        <View style={styles.buttonContainer}>
          <Button onPress={Add} title="ADD" />
          <Button onPress={Clear} title="CLEAR" />
        </View>
        
        <Text style={styles.text}>Shopping List:</Text>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: 200,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    marginTop: 10,
  },

  text: {
    marginTop: 10,
    marginBottom: 5,
  },
});
