<template>
  <div class="cards p-4" style="background-color:#f0f5f5">
    <div class="card-body " >
      <h5 class="card-title">Success!</h5>
      <p class="card-text">Your Data Has Been {{ Judul }} !</p>
      <router-link to="/Home" v-if="Judul === 'Submit'">
        <button class="back btn btn-primary mt-3">Back</button>
      </router-link>
      <router-link to="/Home" v-else-if="Judul === 'Update'">
        <button class="back btn btn-primary mt-2">Back</button>
      </router-link>
      <button class="btn btn-primary" @click="RefreshFunc" v-else>Refresh</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSucces",
  data() {
    return {
      Judul: null,
    };
  },
  methods: {
    ubahJudul() {
      let route = this.$route.fullPath;
      if (route === "/add") {
        this.Judul = "Submit";
      } else if (route === "/"){
        this.Judul = "Delete";
      }else{
        this.Judul = "Update";
      }
    },
    
    RefreshFunc() {
      location.reload();
    },
  },
  mounted() {
    this.ubahJudul();
  },
};
</script>

<style scoped>
.back {
  margin-left: 9rem;
}
.border-color-pink {
  border: solid 2px #f9cada;
}
.bg-color-pink {
  background-color: #f9cada;
}
.cards {
  border-radius: 10px;
  border: 1px solid #f0f5f5;
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  width: 400px;
  margin: auto;
  float: none;
  margin-bottom: 10px;
}
.back {
  margin: auto;
}
</style>