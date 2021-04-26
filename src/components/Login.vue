<template>
  <div class="login">
    <br />
    <br />
    <br />
    <img alt="Vue login" src="../assets/login.png" width="300" height="300" /> <br />
    <br />
    <h3>Ｓｉｇｎ Ｉｎ</h3>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button><a href="/home">Connection</a></button>
    <p>You don't have an account ? You can <router-link to="/signup">create one</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase';
import alert from 'vue';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            localStorage.setItem('username', this.email);
            this.$router.replace('home');
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
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
