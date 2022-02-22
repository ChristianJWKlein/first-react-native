import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>
        Have you been a Miami Dolphins fan your whole life? {"\n"}You may be
        entitled to financial compensation.
        <Button
          style={styles.button}
          title="Click Here to Learn More"
          color="darkgray"
          onPress={() => Alert.alert("Stephen Ross is to blame")}
        />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontSize: 40,
    color: "darkorange",
    fontWeight: "900",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    color: "darkgray",
  },
});
