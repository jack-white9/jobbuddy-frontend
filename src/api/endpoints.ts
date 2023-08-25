// use local endpoints in a development environment
let baseApiUrl: string = "";
if (import.meta.env.VITE_ENV === "development") {
  baseApiUrl = "http://localhost:80/api";
} else {
  baseApiUrl = `${import.meta.env.VITE_PROXY}/${import.meta.env.VITE_API}`;
}

// endpoints
export const getDescriptionKeywordsUrl = `${baseApiUrl}/get_description_keywords`;
