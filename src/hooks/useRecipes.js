import { useState, useEffect } from 'react';
import { recipesData } from '../data/recipesData';

export const useRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [loading, setLoading] = useState(true);

    // Cargar recetas al iniciar
    useEffect(() => {
        setRecipes(recipesData);
        setFilteredRecipes(recipesData);
        setLoading(false);
    }, []);

    // Filtrar recetas cuando cambia la búsqueda o categoría
    useEffect(() => {
        let result = recipes;

        // Filtrar por búsqueda
        if (searchQuery.trim()) {
            result = result.filter(recipe =>
                recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filtrar por categoría
        if (selectedCategory !== 'Todas') {
            result = result.filter(recipe => recipe.category === selectedCategory);
        }

        setFilteredRecipes(result);
    }, [searchQuery, selectedCategory, recipes]);

    // Obtener categorías únicas
    const getCategories = () => {
        const categories = recipes.map(recipe => recipe.category);
        return ['Todas', ...new Set(categories)];
    };

    // Buscar receta por ID
    const getRecipeById = (id) => {
        return recipes.find(recipe => recipe.id === id);
    };

    // Resetear filtros
    const resetFilters = () => {
        setSearchQuery('');
        setSelectedCategory('Todas');
    };

    return {
        recipes: filteredRecipes,
        allRecipes: recipes,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        categories: getCategories(),
        loading,
        getRecipeById,
        resetFilters,
    };
};