import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

type Props = {
    title: string;
    description: string;
    style?: ViewStyle;
};

export default function OnBoardingContainer(
    { title, description, style }: Props) {
    const [isLast, setIsLast] = useState(false);

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.dotContainer}>
                <View style={[styles.dot, styles.activeDot]}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
            </View>
            {
                !isLast ? (
                    <View style={styles.buttonsContainer}>
                        <Pressable>
                            <Text style={styles.btn}>Next</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.btn}>Skip</Text>
                        </Pressable>
                    </View>) :
                    (<View style={styles.arrowBtn}>
                        <Pressable>
                            <Feather name="arrow-right" size={24} color="#FE8C00E5" />
                        </Pressable>
                    </View>)
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 32,
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 48,
        backgroundColor: '#FE8C00E5',
        maxHeight: 400
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'semibold',
        marginBottom: 16,
        textAlign: 'center',
    },
    description: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'regular',
        textAlign: 'center',
        marginBottom: 40,
    },
    dotContainer: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 100,
    },
    dot: {
        width: 24,
        height: 8,
        backgroundColor: '#C2C2C2',
        borderRadius: 100
    },
    activeDot: {
        width: 24,
        height: 8,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    btn: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'semibold'
    },
    arrowBtn: {
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 20
    }
});