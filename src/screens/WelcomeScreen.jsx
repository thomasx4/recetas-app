import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const WelcomeScreen = ({ onStart }) => {
    return (
        <SafeAreaView style={styles.welcomeContainer}>
            <View style={styles.welcomeContent}>
                <View style={styles.welcomeHeader}>
                    <Text style={styles.welcomeTitle}>¡Bienvenido!</Text>
                    <Text style={styles.welcomeSubtitle}>
                        Descubre las mejores recetas{'\n'}
                        y cocina como un experto
                    </Text>
                </View>

                <View style={styles.welcomeFeatures}>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureText}>Recetas fáciles</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureText}>Rápidas de hacer</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureText}>Guarda favoritas</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.welcomeButton} onPress={onStart}>
                    <Text style={styles.welcomeButtonText}>Explorar Recetas</Text>
                </TouchableOpacity>

                <Text style={styles.welcomeFooter}>
                    ¡Comienza tu aventura culinaria!
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        backgroundColor: '#FF6B35',
    },
    welcomeContent: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 60,
    },
    welcomeHeader: {
        alignItems: 'center',
        marginTop: 20,
    },
    welcomeEmoji: {
        fontSize: 80,
        marginBottom: 20,
    },
    welcomeTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
    },
    welcomeSubtitle: {
        fontSize: 18,
        color: '#FFD4C4',
        textAlign: 'center',
        lineHeight: 26,
    },
    welcomeFeatures: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 20,
        padding: 20,
        marginVertical: 20,
    },
    featureItem: {
        alignItems: 'center',
    },
    featureEmoji: {
        fontSize: 30,
        marginBottom: 8,
    },
    featureText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '500',
    },
    welcomeButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 18,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    welcomeButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FF6B35',
    },
    welcomeFooter: {
        textAlign: 'center',
        color: '#FFD4C4',
        fontSize: 14,
        marginTop: 20,
    },
});

export default WelcomeScreen;