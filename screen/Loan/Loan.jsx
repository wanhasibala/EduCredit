import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./loan.styles";
import { t } from "react-native-tailwindcss";

const Loan = () => {
  return (
    <SafeAreaView style={StyleSheet.create({ padding: 20 })}>
      <View>
        <Text style={styles.HeaderText}> Cicilan</Text>
      </View>
      <View style={styles.Card}>
        <View style={[t.flexRow, t.justifyBetween]}>
          <View>
            <Text style={[t.mB1, t.textWhite]}>Tagihan Bulan Ini</Text>
            <Text style={[t.text2xl, t.fontSemibold, t.textWhite]}>
              Rp. 750.000
            </Text>
          </View>
          <View style={styles.notif}>
            <Text style={[t.textXs, t.textGray300]}>Sudah Dibayar</Text>
          </View>
        </View>
        <View style={[t.flexRow, t.justifyBetween, ]}>
          <View >
            <Text style={[t.mB1, t.textWhite]}>Sisa Angsuran</Text>
            <Text style={[t.mB1, t.textWhite, t.textLg, t.fontSemibold,]}>
              5 x Rp. 750.000
            </Text>
          </View>
          <View >
            <Text style={[t.mB1, t.textWhite]}>Jumlah Pinjaman</Text>
            <Text style={[t.mB1, t.textWhite, t.textLg, t.fontSemibold,]}>
              5 x Rp. 750.000
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Loan;
