<template>
  <div class="sign-up">
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
    <img alt="Vue signup" src="../assets/signup.png" width="200" height="200" /> <br />
    <br/>
    <p>Ｓｉｇｎ Ｕｐ</p>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <input type="password" v-model="password" placeholder="  Confirm Password" /><br />
    <button  @click="signUp"  router-link to="/login">Sign Up</button>
    <span>or go back to <router-link to="/">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase';
import alert from 'vue';

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        () => {
          this.$router.replace(' ');
        },
        (err) => {
          alert(`Oops. ${err.message}`);
        },
      );
    },
  },
};
</script>

 <style scoped>
  .sign-up {
    margin-top: 40px;

  }
  p {
   font-size: 30px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 13px;
  }
</style>
