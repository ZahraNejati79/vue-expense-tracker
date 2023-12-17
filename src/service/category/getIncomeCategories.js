import http from "../httpService";

export async function getIncomeCategories() {
  const { data } = await http.get("/incomeCategories");
  return data;
}
