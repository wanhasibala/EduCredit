import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { t } from "react-native-tailwindcss";
import styles from "./Notification.styles";
import { Ionicons } from "@expo/vector-icons";

const NOTIFICATION = [
  {
    id: 1,
    icon: "checkmark-circle",
    text: "Pengajuan pinjaman disetujui. Diharapkan anda membayar tepat pada waktu yang sudah ditentukan",
  },
  {
    id: 2,
    icon: "checkmark-circle",
    text: "Pengajuan pinjaman disetujui. Diharapkan anda membayar tepat pada waktu yang sudah ditentukan",
  },
];

const NotificationHighlight = ({ text, icon }) => (
  <View style={styles.NotificationCard}>
    <View>
      <Ionicons name={icon} size={40} />
    </View>
    <Text style={styles.notificationText}>{text}</Text>
  </View>
);

const NotificationReg = ({ text, icon }) => (
  <View style={styles.NotificationAll}>
    <View>
      <Ionicons name={icon} size={48} />
    </View>
    <Text style={styles.notificationText}>
{text}
    </Text>
  </View>
);

const Notification = () => {
  return (
    <>
      <View style={[t.m5]}>
        <Text style={styles.HeaderText}>Highlight</Text>
        <FlatList
          data={NOTIFICATION}
          renderItem={({ item }) => (
            <NotificationHighlight text={item.text} icon={item.icon} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <View style={[t.m5]}>
        <Text style={styles.HeaderText}> Today </Text>
        <FlatList 
        data={NOTIFICATION}
        renderItem={({item}) =>(
          <NotificationReg text={item.text} icon={item.icon} />
        )}
        keyExtractor={(item)=> item.id}
        />
      </View>
    </>
  );
};

export default Notification;
