import http from "../httpService";

export async function getExpenseCategories() {
  const { data } = await http.get("/expenseCategories");
  return data;
}
