import { getDescriptionKeywordsUrl } from "./endpoints";

type DescriptionKeywords = {
  role: string;
  content: string;
};

async function getDescriptionKeywords(
  description: string
): Promise<DescriptionKeywords> {
  const queryParams = new URLSearchParams({ message: description });
  const data = await fetch(getDescriptionKeywordsUrl + queryParams);
  const json = await data.json();
  return json;
}

export default getDescriptionKeywords;
