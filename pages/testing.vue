<script setup>
// Server Side

import { useFirebase } from "~~/composables/useFirebase";
import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";

const { data: serverData } = useFetch("/api/realizationsAll");
// onMounted(async () => {
//   const { firestore } = useFirebase();
//   const docRef = doc(firestore, `SITE__REALIZATIONS`, "4pmgMtJunOAOZAh8747q");
//   onSnapshot(docRef, (snap) => {
//     data.value = snap.data();
//   });
// });

// const updateAnimal = async () => {
//   const { firestore } = useFirebase();
//   const docRef = doc(firestore, `SITE__REALIZATIONS`, "4pmgMtJunOAOZAh8747q");
//   await updateDoc(docRef, {
//     title: `dog-${Math.floor(Math.random() * 1000)}`,
//   });
// };
onMounted(() => {
  // serverData.value.forEach((el) => {console.log(el)})
  console.log(serverData.value);
});
</script>

<template>
  <div class="container mx-auto mt-64 flex">
    <h2>Data</h2>
    <pre>{{ serverData }}</pre>

    ase
    <!-- <button @click="updateAnimal">Update dog</button> -->
  </div>
</template>
