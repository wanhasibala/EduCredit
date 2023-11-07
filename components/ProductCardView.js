import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ProductDetails } from '../screen';

const ProductCardView = ({}) => {
    const navigation =useNavigation();

  return (
    <View>

        <Pressable onPress={()=>navigation.navigate('ProductDetails')} >
          <View style={styles.item}>
            <View style={styles.imageCard}></View>
            <Text style={styles.title}>anjay</Text>
            <View style={{flexDirection: "row", gap: 4 }}>
              <View style={styles.profilePicture}></View>
              <Text style={styles.mentor}>mentor name</Text>
            </View>
            <Text style={styles.mentor}>anjay timeline</Text>
          </View>
        </Pressable>
    </View>

  )
}

export default ProductCardView

const styles = StyleSheet.create({})