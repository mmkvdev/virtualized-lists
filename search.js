import { suggestions } from "./src/mockData";

// search the suggestions and match the most relevant word
// throttling
export const search = (word) => {
  if (word === "") return;
  // filter out most relevant suggestions based on input `word`
  const result = suggestions.filter(
    (suggestion) => suggestion.includes(word) ?? null
  );

  return result[0];
};

// test cases
// ap -> apple
// b -> banana
// '' -> null
// pe -> pear
// p -> pineapple
