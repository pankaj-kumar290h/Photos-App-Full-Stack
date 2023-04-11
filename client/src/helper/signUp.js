export const signUpRequest = (data, image) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("userName", data.userName);
  formData.append("email", data.email);
  formData.append("password", data.password);
  return fetch("/api/v1/auth/signup", {
    method: "POST",
    body: formData,
  })
    .then((e) => e.json())
    .then((user) => user)
    .catch((err) => console.log(err));
};
