import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const data = [
  { image: require("../assets/images/signin.jpg") },
  { image: require("../assets/images/signup.jpg") },
  { image: require("../assets/images/rain.jpg") },
  { image: require("../assets/images/rain.jpg") },
  { image: require("../assets/images/rain.jpg") },
  { image: require("../assets/images/rain.jpg") },
  { image: require("../assets/images/rain.jpg") },
  { image: require("../assets/images/rain.jpg") },
];

const data2=[
  { image: require("../assets/images/gmail.png") },
  { image: require("../assets/images/osimgs.jpg") },
  { image: require("../assets/images/gmail.png") },
  { image: require("../assets/images/gmail.png") },
  { image: require("../assets/images/gmail.png") },
  { image: require("../assets/images/gmail.png") },
  { image: require("../assets/images/gmail.png") },


];

export const Home = () => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlatList
        data={data2}
        numColumns={2}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 12 }}
        contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
        keyExtractor={(item, idx) => `image-${idx}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#6b7280",
              flex: 1,
              height: 200,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <Image source={item.image} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
          </TouchableOpacity>
        )}
        ListHeaderComponentStyle={{ marginVertical: 10 }}
        ListHeaderComponent={() => (
          <View>
            <FlatList
              horizontal
              style={{ paddingVertical: 5 }}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
              data={data}
              keyExtractor={(item, idx) => `header-image-${idx}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 300,
                    height: 240,
                    backgroundColor: "#fca5a5",
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <Image source={item.image} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
                </TouchableOpacity>
              )}
            />
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 12,
                marginTop: 15,
              }}
            >
              <Text style={{ fontWeight: "600" }}>Popular</Text>
              <Text style={{ color: "skyblue" }}>See All</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
