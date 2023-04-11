export async function bookmark(url) {
  const { _id } = await JSON.parse(localStorage.getItem("user"));
  console.log(_id, url);
  return fetch("/api/v1/user/bookmark", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: _id, PhotoUrl: url }),
  }).then((e) => e.json());
}
