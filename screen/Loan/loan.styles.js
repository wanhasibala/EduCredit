import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles= StyleSheet.create({
    HeaderText: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 20,
    },
    Card:{
        width: '100%',
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
    },
    ButtonContainer :{
        flexDirection: 'row', 
        gap: 32,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,

    }

})
export default styles;