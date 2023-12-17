import http from "../httpService";

export async function getIncome() {
  const { data } = await http.get("/income");
  return data;
}
