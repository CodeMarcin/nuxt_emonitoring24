import { firestore } from "../utils/firebase";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { limit } = query;

  const data: any[] = [];
  const ref =
    parseInt(limit as string) === 0
      ? firestore.collection(`SITE__REALIZATIONS`).orderBy("createDate", "desc")
      : firestore
          .collection(`SITE__REALIZATIONS`)
          .limit(parseInt(limit as string))
          .orderBy("createDate", "desc");
  const snapshot = await ref.get();
  snapshot.docs.forEach((el) => data.push({ id: el.id, ...el.data() }));
  return data;
});
