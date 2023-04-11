export const fetchAllPhotos = async () => {
  const user = await JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;

  const responce = await fetch("/api/v1/user/getAllPhotos", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId }),
  }).then((e) => e.json());

  return responce;
};
