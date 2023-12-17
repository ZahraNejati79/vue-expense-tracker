import http from "../httpService";

export async function getCategories() {
  const { data } = await http.get("/categories");
  return data;
}
