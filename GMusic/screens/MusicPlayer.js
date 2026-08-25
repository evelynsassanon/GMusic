import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../theme/colors'
import { songs } from '../model/data'
import colors from '../theme/colors';

export default function MusicPlayer() {
  const { widht } = useWindowDimensions ();
  const [selctedIndex, setSelectedIndex] = useState(0);

  const currentSong = songs[selectedIndex];
  const artworkSize = Math.min(widht - 40, 380);

  function handleMomentumEnd(event) {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / widht);
    setSelectedIndex(index);
  }


  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>TOCANDO AGORA</Text>
        <Text style={styles.title}>GMusic</Text>
        <Text style={styles.dsecription}>
            Nosso player começa aqui
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})