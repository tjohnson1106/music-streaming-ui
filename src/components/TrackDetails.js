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
import { MaterialIcons } from "@expo/react-native-vector-icons";

const TrackDetails = ({
  title,
  artist,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress
}) => (
  <View style={styles.root}>
    <TouchableOpacity onPress={onAddPress} style={{ opacity: 0.72 }}>
      <MaterialIcons name="add-circle-outline" />
    </TouchableOpacity>
    <View style={styles.detailsWrapper}>
      <Text style={styles.title} onPress={onTitlePress}>
        {title}
      </Text>
      <Text style={styles.artist} onPress={onArtistPress}>
        {artist}
      </Text>
    </View>
    <TouchableOpacity onPress={onMorePress}>
      <View style={styles.moreButton}>
        <MaterialIcons
          name="more-horiz"
          style={{
            height: 17,
            width: 17
          }}
        />
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  root: {
    paddingTop: 24,
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
    paddingRight: 20
  },
  detailsWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  artist: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: 12,
    marginTop: 4
  },
  moreButton: {
    borderColor: "rgb(255, 255, 255)",
    borderWidth: 2,
    opacity: 0.72,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TrackDetails;
