import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");
const imageSize = width - 48;

const AlbumArt = ({ url, onPress }) => (
  <View style={styles.root}>
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={{ uri: url }} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  root: {
    paddingLeft: 24,
    paddingRight: 24
  },
  image: {
    width: imageSize,
    height: imageSize
  }
});

export default AlbumArt;
