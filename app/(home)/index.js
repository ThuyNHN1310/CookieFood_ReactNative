import { View, Text, Alert, ScrollView, StyleSheet, Pressable, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";
import { Entypo, Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import Carousel from '../../components/Carousel';

import Categories from '../../components/Categories';
import Hotel from "../../components/Hotel"


export default function index() {
     const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "fetching your location ..."
  );
  const [data,setData] = useState([]);

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Services not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(true);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestBackgroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use the location service",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    console.log(location);
    let { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const address = await LocationGeocoding.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const streetAddress = address[0].name;
      for (let item of response) {
        let address = `${item.name}, ${item?.postalCode}, ${item?.city}`;

        setDisplayCurrentAddress(address);
      }
    }
  };
  console.log("my address", displayCurrentAddress);
      const recommended = [
          {
            id: 0,
            name: "Phú Hòa",
            image:
              "https://cdn.tgdd.vn/Files/2021/08/09/1373996/tu-lam-com-tam-suon-trung-don-gian-thom-ngon-nhu-ngoai-hang-202201071248422991.jpg",
            time: "35 - 45",
            type: "Cơm tấm",
          },
          {
               id: 0,
               name: "Phú Hòa",
               image:
                 "https://cdn.tgdd.vn/Files/2021/08/09/1373996/tu-lam-com-tam-suon-trung-don-gian-thom-ngon-nhu-ngoai-hang-202201071248422991.jpg",
               time: "35 - 45",
               type: "Cơm tấm",
             },
             {
               id: 0,
               name: "Phú Hòa",
               image:
                 "https://cdn.tgdd.vn/Files/2021/08/09/1373996/tu-lam-com-tam-suon-trung-don-gian-thom-ngon-nhu-ngoai-hang-202201071248422991.jpg",
               time: "35 - 45",
               type: "Cơm tấm",
             },
         
        ];
        const items = [
          {
            id: "0",
            name: "Offers",
            description: "Upto 50% off",
            image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
          },
          {
            id: "1",
            name: "Legends",
            description: "Across India",
            image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
          },
          {
            id: "2",
            name: "Gourmet",
            description: "Selections",
            image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
          },
          {
            id: "3",
            name: "Healthy",
            description: "Curated dishes",
            image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
          },
        ];
        const hotels = [
          {
            id: "0",
            featured_image:
              "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
            images: [
              {
                id: "0",
                image:
                  "https://www.touchbistro.com/wp-content/uploads/2021/08/restaurant-interior-design-ideas-thumbnail.jpg",
                description: "Desi Burrito • Rs249",
              },
              {
                id: "0",
                image:
                  "https://b.zmtcdn.com/data/pictures/chains/8/51828/1f8008fc1cec3cd7ea2b559c32b1e642.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                description: "Indain Burrito • Rs149",
              },
            ],
            name: "Nhà Hàng Hạnh Phúc",
            cuisines: "North Indian • Fast Food • 160 for one",
            time: "35 - 40 min • 1Km",
            average_cost_for_two: 1600,
            aggregate_rating: 4.3,
            adress: "9-A & 12, Hauz Khas Village, New Delhi",
            smalladress: "Hauz Khas Village, New Delhi",
            offer: "₹80 OFF",
            no_of_Delivery: 1500,
            latitude: 12.9916,
            longitude: 77.5712,
          },
      
          {
            id: "1",
            featured_image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rgOs6C9rJuwL_sjJB5n7CeGKEA-Xg2yxIYq025B7_7avmruQHZ0DPpJa8GiSzPkEfas&usqp=CAU",
            name: "Nhà Hàng Hoàng Gia",
            cuisines: "Thai, European, Mexican",
            average_cost_for_two: 1500,
            aggregate_rating: 4.5,
            adress:
              "C-7, Vishal Enclave, Opposite Metro Pillar 417, Rajouri Garden, New Delhi",
            smalladress: "Rajouri Garden, New Delhi",
            offer: "₹80 OFF",
            no_of_Delivery: 2500,
            latitude: 12.9716,
            longitude: 77.5946,
            time: "44 min",
          },
      
          {
            id: "2",
            featured_image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
            name: "Nhà Hàng Hoàng Kim",
            cuisines: "Cafe, Italian, Continental",
            average_cost_for_two: 850,
            aggregate_rating: 4.3,
            adress:
              "2524, 1st Floor, Hudson Lane, Delhi University-GTB Nagar, New Delhi",
            smalladress: "Delhi University-GTB Nagar",
            offer: "₹60 OFF",
            no_of_Delivery: 1800,
            latitude: 12.9716,
            longitude: 77.5946,
            time: "20 min",
          },
      
          {
            id: "3",
            featured_image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wuHjGnvTD4Aewe_M2-_5OSwPiPv1kUvMljF-sqoPRzvoFxD06BK2ac2jV-ZmQG6lQTg&usqp=CAU",
            name: "Quán Ăn Bầu Trời",
            cuisines: "Italian, Continental",
            average_cost_for_two: 1850,
            aggregate_rating: 4.1,
            adress:
              "1st Floor, DDA Shopping Complex, Aurobindo Place, Hauz Khas, New Delhi",
            smalladress: "Hauz Khas, New Delhi",
            offer: "₹50 OFF",
            no_of_Delivery: 1700,
            latitude: 12.9716,
            longitude: 77.5946,
            time: "38 min",
          },
      
          {
            id: "4",
            featured_image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXumfbiH2jcIY8xq9QW6B1QGoh3OJ596SnpQ&usqp=CAU",
            name: "Quán Ăn Đỉnh Núi",
            cuisines: "North Indian, Italian, Asian",
            average_cost_for_two: 1600,
            aggregate_rating: 4.4,
            adress: "M-38, Outer Circle, Connaught Place, New Delhi",
            smalladress: "Connaught Place, New Delhi",
            offer: "₹70 OFF",
            no_of_Delivery: 1230,
            latitude: 12.9716,
            longitude: 77.5946,
            time: "51 min",
          },
          {
            id: "5",
            featured_image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAW6AHZuQtR_1d9WPZn5mjK_jG-aAJxYfLQ&usqp=CAU",
            name: "Quán Nhậu Số Zách",
            cuisines: "North Indian, Continental, Italian",
            aggregate_rating: 3.5,
            adress: "6th Floor, Anil Plaza 2, G.S. Road, Christian Basti",
            smalladress: "Anil Plaza 2, G.S. Road",
            offer: "₹55 OFF",
            no_of_Delivery: 500,
            latitude: 12.9716,
            longitude: 77.5946,
            time: "42 min",
          },
          {
            id: "19",
            featured_image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpI5t_Hgch4-I9edPRV4YNeZKgMX1iHtQng&usqp=CAU",
            name: "Crystal Restaurant",
            cuisines: "North Indian, Mughlai",
            aggregate_rating: 3.5,
            adress: " Crystal Chowk, Queens Road, INA Colony, Amritsar",
            smalladress: "INA Colony, Amritsar",
            offer: "₹80 OFF",
            no_of_Delivery: 2500,
            latitude: 12.9716,
            longitude: 77.5946,
            time: "22 min",
          },
        ];


        useEffect(() => {
          async function fetchData() {
            try {
              const { data, error } = await supabase.from("hotels").select("*");
              console.log("Data:", data);
              if (error) {
                console.error("Error fetching data:", error);
              } else {
                setData(data);
              }
            } catch (error) {
              console.error("Error in fetchData:", error);
            }
          }
      
          fetchData();
        }, []);
      
      
        console.log("data",data)
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection:"row", alignItems:"center", gap:12, padding:10}}>
           <Entypo name="location" size={24} color="red" />
           <View>
               <Text style={{fontSize:15, fontWeight:500}}>Địa chỉ</Text>
               <Text style={{color:"gray", fontSize:16, marginTop:3}}>{displayCurrentAddress}</Text>
           </View>
           <Pressable 

           style={styles.pressable}>
               <Text style={{color:"#fff"}}>T</Text>
           </Pressable>
      </View>
     <View style={styles.formSearch}>
         <TextInput placeholder='Search for food, hotels' />
         <FontAwesome name="search" size={24} color="black" style={{color:"blue"}} />
     </View>



    
     <Carousel/>


    


     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recommended?.map((item, index) => (
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              margin: 10,
              borderRadius: 8,
            }}
          >
            <View>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 7,
                }}
                source={{ uri: item?.image }}
              />
            </View>
            <View style={{ padding: 10, flexDirection: "column" }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {item?.name}
              </Text>
              <Text
                style={{
                  flex: 1,
                  marginTop: 3,
                  color: "gray",
                  fontWeight: "500",
                }}
              >
                {item?.type}
              </Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Ionicons name="ios-time" size={24} color="green" />
                <Text>{item?.time} mins</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "gray",
        }}
      >
        EXPLORE
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items?.map((item, index) => (
          <View
            key={index}
            style={{
              width: 90,
              borderColor: "#E0E0E0",
              borderWidth: 1,
              paddingVertical: 5,
              paddingHorizontal: 1,
              borderRadius: 5,
              marginLeft:10,
              marginVertical:10,
              alignItems:"center",
              justifyContent:"center",
              backgroundColor:"white"
            }}
          >
            <Image
              style={{ width: 60, height: 60, justifyContent:"space-between"}}
              source={{ uri: item?.image }}
            />

            <Text style={{fontSize:13,fontWeight:"500",marginTop:6}}>{item?.name}</Text>

            <Text style={{fontSize:12,color:"gray",marginTop:3}}>{item?.description}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={{textAlign:"center",marginTop:7,letterSpacing:4,marginBottom:5,color:"gray"}}>ALL RESTAURANTS</Text>

      <View style={{marginHorizontal:8}}>
            {hotels?.map((item,index) => (
                <Hotel key={index} item={item} menu={item?.menu}/>
            ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

     container: {
          flex:1,
          backgroundColor:"#f9f9f9",

     },
     pressable:{
          backgroundColor:"#6CB4EE",
          width:40,
          height:40,
          borderRadius:20,
          justifyContent:"center",
          alignItems:"center",
     },
     formSearch: {
          flexDirection:"row",
          alignItems:'center',
          justifyContent:"space-between",
          borderWidth:1,
          borderColor:"#C0C0C0",
          paddingVertical:5,
          paddingHorizontal:10,
          borderRadius:11,
          marginTop:10,
          marginHorizontal:10,
     },
})