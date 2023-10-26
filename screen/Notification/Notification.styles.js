import { StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    NotificationCard:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        width: 280,
        backgroundColor: 'white',
        borderRadius: 5,
        padding:4, 
        marginRight: 20,
        marginVertical: 10,
    },
    NotificationAll:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding:4, 
        marginRight: 20,
        marginVertical: 10,
    },
    notificationText: {
        fontSize: 12,
        flex: 1,
    },
    HeaderText:{
        fontSize: 20,
        fontWeight:'700',
        marginBottom: 20,
    }
})

export default styles;