import { IRecipeTagProps } from './Interfaces';

/* RecipeTag is the component that renders a single clickable tag. It is used by the RecipeTagList component. It should call the onSelectTag function received as prop when the tag is clicked and pass the name of the tag as a parameter to the function. */

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
  const handleClick = () => {
    onSelectTag(tagName);
  };

  return (
    <button onClick={handleClick} style={{ margin: '5px' }}>
      {tagName}
    </button>
  );
};

export default RecipeTag;
