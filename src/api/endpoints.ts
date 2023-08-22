// use local endpoints in a development environment
let baseApiUrl: string = "";
if (import.meta.env.VITE_ENV === "development") {
  baseApiUrl = "http://localhost:80/api";
} else {
  baseApiUrl =
    "http://jobbuddy-backend-dev.ap-southeast-2.elasticbeanstalk.com/api";
}

// endpoints
export const getDescriptionKeywordsUrl = `${baseApiUrl}/get_description_keywords`;
