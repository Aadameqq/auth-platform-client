export type LoginInput = {
  email: string;
  password: string;
};

export const login = async (credentials: LoginInput) => {
  const response = await fetch(process.env.API_URL + "auth", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

  return response.json();
};
