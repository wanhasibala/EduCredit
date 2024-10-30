import { React } from "react";
import { FlatList, View, Text } from "react-native";
import { SliderItem } from "./SliderItem";
const ImageSlider = [
  {
    title: "Image 1",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "1 jam 50 menit",
  },
  {
    title: "Image 2",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "1 jam 20 menit",
  },
  {
    title: "Image 3",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "1 jam 2 menit",
  },
];
export const Slider = () => {
  return (
    <View>
      {/* <FlatList /> */}
      <FlatList
        data={ImageSlider}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};
// export default Slider;
