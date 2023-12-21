import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { router } from "expo-router";
import { useLocalSearchParams, useRouter } from "expo-router";
import FoodItem from "../../components/FoodItem";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";

const hotel = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const cart = [useSelector((state) => state.cart.cart)];
  console.log(cart);

  const menu = [
    {
      id: "20",
      name: "Recommended",
      items: [
        {
          id: "101",
          name: "Cơm Chiên Dương Châu",
          price: 35000,
          description: "Cơm chiên cùng với, lạp xưởng, các loại đậu",
          rating: 4.1,
          ratings: 43,
          image:
            "https://cdn.tgdd.vn/Files/2019/12/30/1229114/cach-lam-com-chien-duong-chau-sieu-hap-dan-chong-ngan-ngay-tet-hat-com-vang-uom-toi-va-tham-vi-202203031505257988.jpg",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "102",
          name: "Vịt Quay Nguyên Con",
          price: 300000,
          description:
            "Vịt quay nguyên con không quay nữa con",
          rating: 4.3,
          ratings: 34,
          image:
            "https://cdn.tgdd.vn/Files/2022/01/06/1409477/cach-lam-vit-quay-bac-kinh-thom-phuc-chuan-vi-nguoi-hoa-202201061633018730.jpg",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "103",
          name: "Nước ép trái cây",
          price: 25000,
          description:
            "Nước được ép từ các loại rau củ quả",
          rating: 4.5,
          ratings: 56,
          image:
            "https://static.kinhtedothi.vn/w960/images/upload/2022/10/31/e7088ec8-2ebf-4b85-a9ee-738818429aa8.jpg",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "104",
          name: "Rượu vang",
          price: 3000000,
          description:
            "Rượu vang thượng hạng",
          rating: 3.8,
          ratings: 22,
          image:
            "https://winevn.com/wp-content/uploads/2019/07/R%C6%B0%E1%BB%A3u-Vang-%C4%90%E1%BB%8F-Chateau-Arrogant-Limoux-1.jpg",
          veg: true,
          bestSeller: true,
          quantity: 1,
        },
       
      ],
    },
    {
      id: "11",
      name: "Rice",
      items: [
        {
          
          id: "201",
          name: "Phở Bò",
          price: 260,
          description:
            "Phở bòa không có thịt heo, Siêu ngonnn",
          rating: 4.3,
          ratings: 34,
          image:
            "https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg",
          veg: false,
          bestSeller: true,
        },
        {
          id: "202",
          name: "Canh chua cá lóc",
          price: 220,
          description:
            "Canh chua cá lóc, món ăn của mọi nhà",
          rating: 4.3,
          ratings: 52,
          image:
            "https://i-giadinh.vnecdn.net/2023/04/25/Thanh-pham-1-1-7239-1682395675.jpg",
          veg: false,
          bestSeller: false,
        },
        {
          id: "203",
          name: "Cháo cá lóc",
          price: 190,
          description:
            "Cháo cá lóc, thêm xị rượu nữa bá cháyyy",
          rating: 4.6,
          ratings: 56,
          image:
            "https://i.ytimg.com/vi/8SrK1K5oKBM/maxresdefault.jpg",
          veg: true,
          bestSeller: true,
        },
        {
          id: "105",
          name: "Cơm tấm",
          price: 300,
          description:
            "Cơm sườn bì chả trứng",
          rating: 4.5,
          ratings: 45,
          image:
            "https://i.ytimg.com/vi/cJu6tFJe_Gc/maxresdefault.jpg",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
        
      ],
    },
  ];

  const scrollViewRef = useRef(null);
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const ITEM_HEIGHT = 650;
  const scrollToCategory = (index) => {
    const yOffset = index * ITEM_HEIGHT;
    Animated.timing(scrollAnim, {
      toValue: yOffset,
      duration: 500,
      useNativeDriver: true,
    }).start();
    scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
  };

  const [modalVisible, setModalVisible] = useState(false);
  //   const recievedMenu = JSON.parse(params?.menu)
  return (
    <>
      <ScrollView ref={scrollViewRef} style={{ backgroundColor: "white" }}>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            onPress={() => router.back()}
            name="arrow-back-circle-outline"
            size={24}
            color="tomato"
            style={{ paddingRight: 5, marginLeft: 10 }}
          />
          <View style={styles.btnTop}>
            <AntDesign name="camera" size={24} color="tomato" />
            <Entypo name="bookmark" size={24} color="tomato" />
            <Entypo name="share" size={24} color="tomato" />
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 12,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            {params?.name}
          </Text>
          <Text
            style={{
              color: "gray",
              marginTop: 5,
              fontWeight: "500",
              fontSize: 15,
            }}
          >
            Vietname Food * Fast Food
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "tomato",
                borderRadius: 4,
                paddingHorizontal: 15,
                paddingVertical: 5,
                gap: 5,
              }}
            >
              <Text
                style={{ fontSize: 14, color: "white", fontWeight: "bold" }}
              >
                {params?.aggregate_rating}
              </Text>
              <Ionicons
                name="ios-star"
                size={20}
                color="yellow"
                style={{ paddingLeft: 5 }}
              />
            </View>
            <Text style={{ fontSize: 15, fontWeight: "400", marginLeft: 5 }}>
              1.2K Ratings
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#D0F0F0",
              borderRadius: 20,
              paddingVertical: 5,
              marginTop: 12,
            }}
          >
            <Text>15 min * 4km | Phu Hoa</Text>
          </View>
        </View>

        {menu?.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))}
      </ScrollView>

      <View style={{ flexDirection: "row", backgroundColor: "white" }}>
        {menu?.map((item, index) => (
          <Pressable
            onPress={() => scrollToCategory(index)}
            style={{
              paddingEnd: 10,
              paddingVertical: 7,
              marginVertical: 10,
              borderRadius: 5,
              marginHorizontal: 10,
              paddingHorizontal: 10,
              alignItems: "center",
              borderColor: "yellow",
              backgroundColor: "green",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {item?.name}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: 25,
          bottom: cart?.length > 0 ? 70 : 35,
          backgroundColor: "tomato",
        }}
      >
        <Ionicons
          name="fast-food"
          size={30}
          color="white"
          style={{ textAlign: "center" }}
        />
        <Text style={{ textAlign: "center", color: "white", fontWeight: 500 }}>
          MENU
        </Text>
      </Pressable>


     <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View
          style={{
            height: 190,
            width: 250,
            backgroundColor: "black",
            position: "absolute",
            bottom: 35,
            right: 10,
            borderRadius: 7,
          }}
        >
          {menu?.map((item, index) => (
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 18 }}
              >
                {item?.name}
              </Text>
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 18 }}
              >
                {item?.items?.length}
              </Text>
            </View>
          ))}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 120, height: 100, resizeMode: "contain" }}
              source={require("../../assets/food.png")}
            />
          </View>
        </View>
      </Modal>



      {cart?.length > 0 && (
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/cart",
              params: {
                name: params.name,
              },
            })
          }
          style={{
            backgroundColor: "#fd5c63",
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            <Ionicons name="cart" size={24} color="white" style={{justifyContent:"center"}} />
          </Text>
          
        </Pressable>
      )}
    </>
  );
};

export default hotel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  btnTop: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 10,
  },
});
