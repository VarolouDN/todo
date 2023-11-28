export async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) throw new Error("Error");
  const data = await res.json();
  const result = data.map((elem) => ({ ...elem, value: elem.title }));
  return result;
}
