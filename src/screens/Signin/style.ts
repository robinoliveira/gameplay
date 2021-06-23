import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: 'center',
    },

    image: {
        width: '100%',
        height: 360
    },

    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },

    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16

    },

    subtitle: {
        textAlign: 'center',
        color: theme.colors.heading,
        fontSize: 15,
        marginBottom: 64
    }



})