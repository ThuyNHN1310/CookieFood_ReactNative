import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { useRouter } from "expo-router";

const splash = () => {
     const router = useRouter();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Image source={require("../../assets/food.png")} />
      <Text
        style={{
          color: "#666",
          fontSize: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Cookie Food
      </Text>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginLeft: 20,
          marginVertical: 100,
        }}
      >
        <TouchableOpacity
          onPress={() => router.replace("/login")}
          style={{
            backgroundColor: "green",
            width: 100,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => router.replace("/register")}
          style={{
            backgroundColor: "red",
            marginLeft: 100,
            width: 100,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default splash;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
