import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOVIEDB_API_BASE_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_MOVIEDB_API_KEY,
  },
});

export const searchMovies = async (query: string) => {
  console.log("API Key:", process.env.NEXT_PUBLIC_MOVIEDB_API_KEY);
  console.log("API Base URL:", process.env.NEXT_PUBLIC_MOVIEDB_API_BASE_URL);

  try {
    const response = await client.get("/search/movie", {
      params: { query },
    });

    console.log("Response:", response.data.results);

    if (!response.data && !response.data.results) {
      console.error("No records found!");
    }

    return response.data.results;
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
};
