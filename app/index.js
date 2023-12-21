import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function index() {
  return (
    <View>
     <Redirect href="/(authenticate)/splash" />
    </View>
  )
}

const styles = StyleSheet.create({})


// -> "/"
// -> "/home"