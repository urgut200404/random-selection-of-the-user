<template>
    <div class="container">
        <form class="w-50 m-auto" v-if="show">
            <h3 class="text-center text-light mb-5 mt-2 game">User Random game</h3>
            <div class="mb-4">
                <input type="email" class="form-control" placeholder="Create user" v-model="userlar">
            </div>
            <div class="addjvb">
                <button type="submit" class="btn btn-success bg-gradient add" @click.prevent="adduser">Add</button>
                <button type="btn" class="btn btn-primary bg-gradient jvb" @click.prevent="ansver">Answer</button>
            </div>
            <div class="m-auto showteacher">
                <div class="userShow" v-for="(user, index) in arr" :key="index">{{ arr[index] }}</div>
            </div>
        </form>
        <div class="text-light JavobTeacher mb-5 mt-2" v-else>
            <b class="text-secondary fs-3">Siz Tanlagan ishtirokchi</b>
            <button class="btn btn-danger  w-100">{{ jvb }}</button>
            <button class="btn btn-success  w-100" @click="show = true">Qayta urunib korish </button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
let userlar = ref('');
let arr = ref([]);
let jvb = ref('');
let show = ref(true);
let error = ref('')
// let arr2 = ref([]);


let adduser = () => {
    if (userlar.value != '') {
        arr.value.push(userlar.value);
        userlar.value = ''
    }

}



let ansver = () => {
    jvb.value = arr.value[Math.floor(Math.random() * arr.value.length)];
    arr.value.splice(0, arr.value.length)
    show.value = !show.value;
  
}
</script>
  
<style scoped>
.text-secondary {
    color: #6c6c6c !important;
}

.JavobTeacher {
    width: 40%;
    height: 11em;
    background-color: #ffffff;
    margin: auto;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    border-radius: 7px;
}

.game {
    border-bottom: solid rgb(141, 141, 141);
    padding-bottom: 0.1em;
    border-radius: 10px;
}

.container {
    margin-top: 7em;
}

.addjvb {
    width: 100% !important;
    display: flex;
    justify-content: space-between !important;
}

.add,
.jvb {
    width: 47%;
}

.showteacher {
    margin-top: 2em !important;
    /* background-color: aliceblue; */
    background-attachment: scroll !important;
    overflow: hidden;
    height: 12em;
}

.userShow {
    margin: auto;
    height: 2.5em !important;
    width: 34em;
    background-color: aqua;
    margin-top: 1em;
    padding: 0.1em 0.5em;
    border-radius: 7px;
}

form {

    backdrop-filter: blur(0.3em);
    height: 30em;
    box-shadow: 0 0 10px #fff;
    padding: 3em;
    border-radius: 20px;
}</style>