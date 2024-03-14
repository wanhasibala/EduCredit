import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function List({icon, setting, }) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        padding: 10,
        gap: 5,
      }}
    >
      <Ionicons name={icon} size={20} />
      <Text style={{ fontSize: 16, width: "85%" }}>{setting}</Text>
      <Ionicons name="chevron-forward" size={16} />
    </View> 
  )
}