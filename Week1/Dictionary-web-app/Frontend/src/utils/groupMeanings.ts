// Assuming a type structure for item based on your application
interface MeaningItem {
  partOfSpeech: string;
  definitions: string[];
  synonyms: string[];
  antonyms: string[];
  // Add other properties as needed
}

// Define the type for the grouped meanings object
interface GroupedMeanings {
  [key: string]: MeaningItem;
}

// Group data by partOfSpeech
export const groupedMeanings = (meanings: MeaningItem[]): GroupedMeanings => {
  return meanings.reduce((acc: GroupedMeanings, item: MeaningItem) => {
    if (acc[item.partOfSpeech]) {
      acc[item.partOfSpeech] = {
        ...acc[item.partOfSpeech],
        definitions: [
          ...acc[item.partOfSpeech].definitions,
          ...item.definitions,
        ],
        synonyms: [...acc[item.partOfSpeech].synonyms, ...item.synonyms],
        antonyms: [...acc[item.partOfSpeech].antonyms, ...item.antonyms],
      };
    } else {
      acc[item.partOfSpeech] = item;
    }
    return acc;
  }, {});
};
