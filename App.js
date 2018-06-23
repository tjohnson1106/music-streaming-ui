import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./src/components/Header";
import AlbumArt from "./src/components/AlbumArt";
import TrackDetails from "./src/components/TrackDetails";
import SeekBar from "./src/components/SeekBar";
import Controls from "./src/components/Controls";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Playing From Charts" />
        <AlbumArt url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" />
        <TrackDetails title="Track Details" artist="Artist Prop" />
        <SeekBar trackLength={204} currentPosition={156} />
        <Controls />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(4,4,4)"
  }
});
