import { firestore } from "../utils/firebase";
import fs from "fs";
export interface IRealizationResponse {
    title: string;
    description: string;
}
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { id, getAllImages } = query;
  const imagesList = Boolean(getAllImages) ? fs.readdirSync(`./public/images/realizations/${id}`) : [];
  const ref = firestore.doc(`SITE__REALIZATIONS/${id}`);
  const snapshot = await ref.get();
  const data = snapshot.data() as IRealizationResponse;
  return {...data, imagesList} ;
});
