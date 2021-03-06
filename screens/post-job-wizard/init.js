import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon, Button, Input } from 'react-native-elements';
import Theme from '../../theme';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function PostJobWizardInit({ next }) {
    return (
        <View accessible={true} style={styles.wrapper}>
            <Text style={styles.title}>משרות לפרסום</Text>
            <Text style={styles.text}>כאן אפשר לנהל את המשרות ע"י פרסום, השהייה, מחיקה וניהול מועמדים.</Text>
            <View accessible={true} style={styles.buttonsWrapper}>
                <Button
                    onPress={next}
                    accessibilityLabel="המשך לשלב הבא"
                    buttonStyle={{ backgroundColor: Theme.c3, borderRadius: 64, width: 64, height: 64, alignSelf: 'flex-start' }}
                    icon={
                        <Icon
                            name="arrow-back"
                            size={30}
                            color={Theme.white}
                        />
                    }
                />
                <Button
                    accessibilityLabel="המשך לשלב הבא"
                    onPress={next}
                    buttonStyle={styles.buttonAddJob}
                    icon={
                        <Icon
                            name="add"
                            size={30}
                            color={Theme.c3}
                        />
                    }
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Theme.white,
        alignItems: 'stretch',
        padding: 20
    },
    title: {
        textAlign: 'right',
        fontSize: 22,
        color: Theme.textColor,
        paddingBottom: 20,

    },
    text: {
        textAlign: 'right',
        fontSize: 16,
        color: Theme.textColor,
        paddingBottom: 20,
    },
    buttonsWrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: screenHeight / 2
    },
    buttonAddJob: {
        backgroundColor: Theme.white,
        borderColor: Theme.c3,
        borderWidth: 1,
        borderRadius: 64,
        width: 64,
        height: 64,
        marginLeft: screenWidth - 170
    }
});
