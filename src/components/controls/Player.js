import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Constants, Video } from 'expo';

import AlbumArt from "../AlbumArt";
import Header from "../Header";
import TrackDetails from "../TrackDetails";
import SeekBar from "../SeekBar";
import Controls from "../Controls";


class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            paused: true,
            totalLength: 1,
            currentPosition: 0,
            selectedTrack: 0
         };
    }

    setDuration( data ) {
        this.setState( {
            totalLength: Math.floor( data.duration )
        } );
    }

        setTime( data ) {
            this.setState( {
                currentPosition: Math.floor(data.currentTime)
            })

        }
    
        seek(time) {
            time = Math.round(time);
            this.refs.audioElement && this.refs.audioElement.seek(time);
            this.setState({
              currentPosition: time,
              paused: false,
            });
        }

    onBack() {
        if ( this.state.currentPosition < 10 && this.state.selectedTrack > 0 ) {
            this.refs.audioElement && this.refs.audioElement.seek( 0 );
            this.setState( { isChanging: true } );
            setTimeout( () => this.setState( {
                currentPosition: 0,
                paused: false,
                totalLength: 1,
                isChanging: false,
                selectedTrack: this.state.selectedTrack - 1,
            } ), 0 );
        } else {
            this.refs.audioElement.seek( 0 );
            this.setState( {
                currentPosition: 0
            })
        }
    }

    onForward() {
        if ( this.state.selectedTrack < this.props.tracks.length - 1 ) {
            this.refs.audioElement && this.refs.audioElement.seek(0);
            this.setState( { isChanging: true } );
            setTimeout( () => this.setState( {
                currentPosition: 0,
                totalLength: 1,
                paused: false,
                isChanging: false,
                selectedTrack: this.state.selectedTrack + 1
            }), 0)
         }
     }

    render() {
        const track = this.props.tracks




        return (
            
        );
    }
}

export default Player;