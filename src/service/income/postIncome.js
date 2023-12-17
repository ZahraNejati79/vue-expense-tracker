import http from "../httpService";
export async function postIncome(incomeValue) {
  return await http.post("/income", incomeValue);
}
