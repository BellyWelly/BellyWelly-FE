import { SERVER } from "../config";

export const postDietRecommendation = async (accessToken: string) => {
  const res = await fetch(`${SERVER}/recommendations`, {
    method: "post",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error));

  return res;
};
