export const signIn = (data) => {
  console.log(data);

  return fetch("/api/v1/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  }).then((e) => e.json());
};
