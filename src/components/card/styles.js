import { StyleSheet } from 'react-native'
import { colors } from '../../constants/theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    card: {
        flex: 1,
        flexGrow: 0.45,
        justifyContent: 'center',
        backgroundColor: colors.primary,
        marginTop: 35,
        marginHorizontal: 50,
        elevation: 5,

    },



});