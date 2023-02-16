import { firestore } from "../utils/firebase";

export default defineEventHandler(async (event) => {
  //   const data = await fetch("https://reqres.in/api/users?delay=3");

  const data = await fetch("https://reqres.in/api/users?delay=3");
  await data.json();
  console.log(data);
  return data;
});
