import PartOfSpeech from "../PartOfSpeech/Index";

const Index = ({ meanings }: { meanings: any }) => {
  console.log(meanings);

  const items = Object.keys(meanings).map((partOfSpeech) => ({
    title: partOfSpeech,
    content: meanings[partOfSpeech],
  }));

  return (
    <div className="parts-of-speech">
      {items.length > 0 &&
        items.map((item, index) => <PartOfSpeech key={index} item={item} />)}
    </div>
  );
};

export default Index;
