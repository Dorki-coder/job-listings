import data from "./../data.json";
import Card from "./Card";
export default function List({ tags, setTags }) {
  const filteredArray = data.filter((itemData) => {
    return tags.every(
      (word) =>
        itemData.tools.includes(word) ||
        itemData.languages.includes(word) ||
        itemData.level.includes(word) ||
        itemData.role.includes(word)
    );
  });
  return (
    <div className="list">
      {filteredArray.map((element) => {
        return (
          <Card tags={tags} setTags={setTags} key={element.id} data={element} />
        );
      })}
    </div>
  );
}
