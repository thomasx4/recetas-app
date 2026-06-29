import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@favorites';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const stored = await AsyncStorage.getItem(FAVORITES_KEY);
            if (stored) {
                setFavorites(JSON.parse(stored));
            }
        } catch (error) {
            console.error('Error loading favorites:', error);
        } finally {
            setLoading(false);
        }
    };

    const saveFavorites = async (newFavorites) => {
        try {
            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
            setFavorites(newFavorites);
        } catch (error) {
            console.error('Error saving favorites:', error);
        }
    };

    const addFavorite = async (recipeId) => {
        if (!favorites.includes(recipeId)) {
            const newFavorites = [...favorites, recipeId];
            await saveFavorites(newFavorites);
        }
    };

    const removeFavorite = async (recipeId) => {
        const newFavorites = favorites.filter(id => id !== recipeId);
        await saveFavorites(newFavorites);
    };

    const isFavorite = (recipeId) => {
        return favorites.includes(recipeId);
    };

    const toggleFavorite = async (recipeId) => {
        if (isFavorite(recipeId)) {
            await removeFavorite(recipeId);
        } else {
            await addFavorite(recipeId);
        }
    };

    return {
        favorites,
        loading,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
        loadFavorites,
    };
};