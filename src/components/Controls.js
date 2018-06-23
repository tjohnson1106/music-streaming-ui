import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Controls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled
}) => (
  <View style={styles.root}>
    <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      <MaterialIcons
        name="shuffle"
        style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
      />
    </TouchableOpacity>
    <View style={{ width: 40 }} />
    <TouchableOpacity onPress={onBack}>
      <MaterialIcons name="skip-previous" color="white" />
    </TouchableOpacity>
    <View style={{ width: 20 }} />
    {!paused ? (
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.playButton}>
          <MaterialIcons name="pause" color="white" />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.playButton}>
          <MaterialIcons name="play-arrow" color="white" />
        </View>
      </TouchableOpacity>
    )}

    <View style={{ width: 20 }} />
    <TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
      <MaterialIcons style={[forwardDisabled && { opacity: 0.3 }]} />
    </TouchableOpacity>

    <View style={{ width: 40 }} />
    <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      <MaterialIcons name="repeat" color="white" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 72 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  secondaryControl: {
    height: 18,
    width: 18
  },
  off: {
    opacity: 0.3
  }
});

export default Controls;
