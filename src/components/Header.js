import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ onDownPress, onQueuePress, onMessagePress }) => (
  <View style={styles.root}>
    <TouchableOpacity onPress={onDownPress}>
      <MateriaIcons
        name="keyboard-arrow-down"
        size={32}
        color="#e6a340"
        style={{ opacity: 0.72 }}
      />
    </TouchableOpacity>
    <Text style={styles.message} onPress={onMessagePress}>
      {message.toUpperCase()}
    </Text>
    <TouchableOpacity onPress={onQueuePress}>
      <MateriaIcons
        name="queue-music"
        size={32}
        color="#e6a340"
        style={{ opacity: 0.72 }}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  root: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: "row"
  },
  message: {
    flex: 1,
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.72)",
    fontWeight: "bold",
    fontSize: 10
  }
});

export default Header;
