import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Inspiration() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Inspirations</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})