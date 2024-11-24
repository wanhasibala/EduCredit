import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constant/color";

interface TabBar {
  state: any;
  descriptors: any;
  navigation: any;
}
interface IconProps {
  [key: string]: (props: { color?: string; size?: number }) => JSX.Element;
}
const TabBar = ({ state, descriptors, navigation }: TabBar) => {
  const icons: IconProps = {
    index: (props) => (
      <View {...props} style={styles.icon}>
        <Ionicons name="home" size={26} color="#737373" {...props} />
      </View>
    ),
    course: (props) => (
      <View {...props} style={styles.icon}>
        <Ionicons name="play" size={26} color="#737373" {...props} />
      </View>
    ),
    notification: (props) => (
      <View {...props} style={styles.icon}>
        <Ionicons name="notifications" size={26} color="#737373" {...props} />
      </View>
    ),
    profile: (props) => (
      <View {...props} style={styles.icon}>
        <Ionicons name="person" size={26} color="#737373" {...props} />
      </View>
    ),
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name]({
              color: isFocused ? "#ededed" : COLORS.gray2,
              backgroundColor: isFocused ? COLORS.tertiary : "#fff",
            })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 99,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  icon: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 99,
  },
});

export default TabBar;
