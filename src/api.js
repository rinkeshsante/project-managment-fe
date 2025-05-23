const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async () => {
  const response = await fetch(`${API_URL}?_limit=10`);
  return response.json();
};

export const addTodo = async (todo) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
