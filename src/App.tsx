import { useState, useEffect } from 'react';
import { IRecipe } from './Interfaces';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';

/* App is the root component that holds the logic of the application and controls the rendering output. */

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loadingTags, setLoadingTags] = useState<boolean>(false);
  const [loadingRecipes, setLoadingRecipes] = useState<boolean>(false);

  useEffect(() => {
    const fetchTags = async () => {
      setLoadingTags(true);
      try {
        const response = await fetch('https://dummyjson.com/recipes/tags');
        const data = await response.json();
        const tagsData = Array.isArray(data) ? data : data.tags;
        setTags(tagsData || []);
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setLoadingTags(false);
      }
    };

    fetchTags();
  }, []);

  useEffect(() => {
    if (selectedTag) {
      const fetchRecipes = async () => {
        setLoadingRecipes(true);
        try {
          const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
          const data = await response.json();
          const recipesData = data.recipes || [];
          setRecipes(recipesData);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        } finally {
          setLoadingRecipes(false);
        }
      };

      fetchRecipes();
    }
  }, [selectedTag]);

  const handleSelectTag = (tagName: string) => {
    setSelectedTag(tagName);
  };

  const handleBack = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag ? (
        loadingRecipes ? (
          <p>Please Wait while the Recipe is loading...</p>
        ) : (
          <RecipeList recipes={recipes} onBack={handleBack} />
        )
      ) : loadingTags ? (
        <p>Loading All tags...</p>
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
      )}
    </div>
  );
};

export default App;