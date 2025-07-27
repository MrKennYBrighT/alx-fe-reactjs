import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>🍽️ Recipe Sharing App</h2>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
