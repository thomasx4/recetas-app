import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions,
} from 'react-native';
import { useRecipes } from '../hooks/useRecipes';
import { useFavorites } from '../hooks/useFavorites';
import RecipeDetailScreen from './RecipeDetailScreen';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';

const { width } = Dimensions.get('window');

const HomeScreen = ({ onBack }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const { allRecipes } = useRecipes();
    const { isFavorite, toggleFavorite } = useFavorites();

    const filteredRecipes = allRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Si hay una receta seleccionada, mostrar detalle
    if (selectedRecipe) {
        return (
            <RecipeDetailScreen
                recipe={selectedRecipe}
                onBack={() => setSelectedRecipe(null)}
                isFavorite={isFavorite(selectedRecipe.id)}
                onToggleFavorite={() => toggleFavorite(selectedRecipe.id)}
            />
        );
    }

    // Renderizar tarjeta de receta
    const renderRecipeCard = ({ item }) => {
        const isFav = isFavorite(item.id);

        return (
            <TouchableOpacity
                style={styles.recipeCard}
                onPress={() => setSelectedRecipe(item)}
                activeOpacity={0.9}
            >
                <Image source={{ uri: item.image }} style={styles.recipeImage} />
                <View style={styles.recipeContent}>
                    <View style={styles.recipeHeader}>
                        <Text style={styles.recipeTitle} numberOfLines={2}>
                            {item.title}
                        </Text>
                        <Text style={styles.favoriteHeart}>{isFav ? '❤️' : '🤍'}</Text>
                    </View>
                    <View style={styles.recipeDetails}>
                        <Text style={styles.recipeCategory}>{item.category}</Text>
                        <Text style={styles.recipeTime}>⏱ {item.prepTime}min</Text>
                    </View>
                    <View style={[
                        styles.difficultyBadge,
                        {
                            backgroundColor: item.difficulty === 'Fácil' ? '#2ECC71' :
                                item.difficulty === 'Media' ? '#F39C12' : '#E74C3C'
                        }
                    ]}>
                        <Text style={styles.difficultyText}>{item.difficulty}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={onBack} style={styles.backButton}>
                        <Text style={styles.backText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Recetas</Text>
                </View>
            </View>

            <TextInput
                style={styles.searchInput}
                placeholder="Buscar recetas..."
                placeholderTextColor="#999"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <FlatList
                data={filteredRecipes}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
                renderItem={renderRecipeCard}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No se encontraron recetas</Text>
                        <Text style={styles.emptySubtext}>Prueba con otra búsqueda</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        paddingRight: 12,
        paddingVertical: 4,
    },
    backText: {
        fontSize: 24,
        color: '#FF6B35',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    searchInput: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        marginVertical: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        fontSize: 16,
        color: '#1A1A1A',
    },
    listContent: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        paddingBottom: 80,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    recipeCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginBottom: 16,
        width: (width - 48) / 2,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },
    recipeImage: {
        width: '100%',
        height: 140,
        backgroundColor: '#E8E8E8',
    },
    recipeContent: {
        padding: 12,
    },
    recipeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    recipeTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1A1A1A',
        flex: 1,
        marginRight: 6,
    },
    favoriteHeart: {
        fontSize: 16,
    },
    recipeDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6,
    },
    recipeCategory: {
        fontSize: 12,
        color: '#666666',
    },
    recipeTime: {
        fontSize: 12,
        color: '#999999',
    },
    difficultyBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        marginTop: 6,
    },
    difficultyText: {
        fontSize: 10,
        color: '#FFFFFF',
        fontWeight: '500',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 60,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    emptySubtext: {
        fontSize: 14,
        color: '#999999',
        marginTop: 4,
    },
});

export default HomeScreen;