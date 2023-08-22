import { getDescriptionKeywordsUrl } from "./endpoints";

async function getDescriptionKeywords(description: string): Promise<string[]> {
  const queryParams = new URLSearchParams({ message: description });
  const data = await fetch(getDescriptionKeywordsUrl + "?" + queryParams);
  const json = await data.json();
  const keywords: string[] = json.content.split("\n");
  return keywords;
}

export default getDescriptionKeywords;
