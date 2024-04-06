import { SERVER } from "../config";

export const getDailyRecord = async (
  selectedDate: string,
  accessToken: string
) => {
  const res = await fetch(`${SERVER}/home?date=${selectedDate}`, {
    method: "get",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error));

  return res;
};
