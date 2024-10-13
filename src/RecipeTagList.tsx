import { IRecipeTagListProps } from './Interfaces';
import RecipeTag from './RecipeTag';

/* RecipeTagList It renders the list of tags. Here is the type definition for the props of this component. : interface IRecipeTagListProps { tagList: string[]; onSelectTag: (tagName: string) => void; } RecipeTagList should render the tags using RecipeTag component. */
const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList = [], onSelectTag }) => {
  return (
    <div>
      <h2>Recipe Tags</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tagList.length > 0 ? (
          tagList.map((tagName) => (
            <RecipeTag key={tagName} tagName={tagName} onSelectTag={onSelectTag} />
          ))
        ) : (
          <p>No tags available.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeTagList;
