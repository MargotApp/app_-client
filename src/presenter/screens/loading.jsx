import React from 'react';
import { SafeAreaView, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../../application/colors';

export default function Loading() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ActivityIndicator color="#000" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background
  }
})