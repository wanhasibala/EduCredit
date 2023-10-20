import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles= StyleSheet.create({
    HeaderText: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 20,
    },
    Card:{
        alignSelf:'center',
        width: 320,
        backgroundColor: COLORS.tertiary,
        padding: 20,
        borderRadius: 20,
        height: 160,
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    notif:{
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#426480',
        paddingHorizontal: 16,
        paddingVertical: 1,
        height: 26,
    }

})
export default styles;