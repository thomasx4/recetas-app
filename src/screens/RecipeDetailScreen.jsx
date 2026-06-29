import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const RecipeDetailScreen = ({ recipe, onBack, isFavorite, onToggleFavorite }) => {
    if (!recipe) {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backText}>← Volver</Text>
                </TouchableOpacity>
                <View style={styles.centerContainer}>
                    <Text style={styles.errorText}>Receta no encontrada</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backText}>← Volver</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onToggleFavorite} style={styles.favoriteButton}>
                    <Text style={styles.favoriteIcon}>{isFavorite ? '❤️' : '🤍'}</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{ uri: recipe.image }} style={styles.detailImage} />

                <View style={styles.detailContent}>
                    <Text style={styles.detailTitle}>{recipe.title}</Text>

                    <View style={styles.detailInfoRow}>
                        <View style={styles.detailInfoItem}>
                            <Text style={styles.detailInfoLabel}>Categoría</Text>
                            <Text style={styles.detailInfoValue}>{recipe.category}</Text>
                        </View>
                        <View style={styles.detailInfoItem}>
                            <Text style={styles.detailInfoLabel}>Tiempo</Text>
                            <Text style={styles.detailInfoValue}>{recipe.prepTime} min</Text>
                        </View>
                        <View style={styles.detailInfoItem}>
                            <Text style={styles.detailInfoLabel}>Dificultad</Text>
                            <Text style={[
                                styles.detailInfoValue,
                                {
                                    color: recipe.difficulty === 'Fácil' ? '#2ECC71' :
                                        recipe.difficulty === 'Media' ? '#F39C12' : '#E74C3C'
                                }
                            ]}>
                                {recipe.difficulty}
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.detailDescription}>{recipe.description}</Text>

                    <Text style={styles.detailSubtitle}>Ingredientes</Text>
                    {recipe.ingredients.map((item, index) => (
                        <View key={index} style={styles.detailIngredientItem}>
                            <Text style={styles.detailBullet}>•</Text>
                            <Text style={styles.detailIngredientText}>{item}</Text>
                        </View>
                    ))}

                    <Text style={styles.detailSubtitle}>Pasos</Text>
                    {recipe.steps.map((item, index) => (
                        <View key={index} style={styles.detailStepItem}>
                            <View style={styles.detailStepNumber}>
                                <Text style={styles.detailStepNumberText}>{index + 1}</Text>
                            </View>
                            <Text style={styles.detailStepText}>{item}</Text>
                        </View>
                    ))}

                    <View style={styles.detailSpacer} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    backButton: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    backText: {
        fontSize: 18,
        color: '#FF6B35',
        fontWeight: '600',
    },
    favoriteButton: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    favoriteIcon: {
        fontSize: 28,
    },
    detailImage: {
        width: '100%',
        height: 250,
    },
    detailContent: {
        padding: 16,
        paddingBottom: 40,
    },
    detailTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 12,
    },
    detailInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    detailInfoItem: {
        alignItems: 'center',
    },
    detailInfoLabel: {
        fontSize: 12,
        color: '#999999',
        marginBottom: 2,
    },
    detailInfoValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1A1A',
    },
    detailDescription: {
        fontSize: 16,
        color: '#666666',
        lineHeight: 24,
        marginBottom: 20,
    },
    detailSubtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 12,
        marginTop: 8,
    },
    detailIngredientItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
    },
    detailBullet: {
        fontSize: 18,
        color: '#FF6B35',
        marginRight: 10,
        fontWeight: 'bold',
    },
    detailIngredientText: {
        fontSize: 16,
        color: '#444444',
    },
    detailStepItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    detailStepNumber: {
        backgroundColor: '#FF6B35',
        borderRadius: 12,
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        marginTop: 2,
    },
    detailStepNumberText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    detailStepText: {
        fontSize: 16,
        color: '#444444',
        flex: 1,
        lineHeight: 22,
    },
    detailSpacer: {
        height: 40,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: '#E74C3C',
    },
});

export default RecipeDetailScreen;