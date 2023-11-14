import { StyleSheet, Text, View , TouchableOpacity, Image,} from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import { useNavigation } from '@react-navigation/native'

const CoursePaid = ( { title,image, mentor, mentorImage, progress,width }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: `${image}` }} style={styles.imageCardPopular} />
        <View style={{ justifyContent: 'space-between' }}>
          <Text
            numberOfLines={1}
            style={{ fontSize: 24, fontWeight: "bold", width: 250 }}
          >
            {title}
          </Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
              <Image source={{uri: `${mentorImage}`}} style={styles.profilePicture}/>
            <Text style={{ fontSize: 16 }}>{mentor}</Text>
          </View>
          <View style={styles.progress}>
            <View style={[styles.progressChild, styles.progressLayout]} />
            <View style={[styles.progressLayout, { width: `${width}%`, backgroundColor: '#FFB200',left: 0,borderRadius: 20, }] } />
            <Text style={[styles.text,{left: `${width-14}%`} ]}>{progress}%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CoursePaid

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    flexDirection: "row",
    marginBottom: 15,
    gap: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E0E0E0",
  },
  imageCardPopular: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  profilePicture: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  progress: {
    height: 20,
    alignSelf: "stretch",
  },
  progressLayout: {
    borderRadius: 20,
    top: 0,
    height: 20,
    position: "absolute",
  },
  progressChild: {
    left: 3,
    backgroundColor: "#bebaba",
    width: 251,
  },
  progressItem: {
    backgroundColor: '#efefef',
    left: 0,
    borderRadius: 20,
  },
  text: {
    marginTop: 1,
    fontSize: 16,
    letterSpacing: -0.1,
    lineHeight: 20,
    width: 36,
    top: 0,
    textAlign: "left",
    justifyContent: 'center',
    alignItems: 'center',
    color: '#090909',
    fontWeight: "700",
    position: "absolute",
  },
})