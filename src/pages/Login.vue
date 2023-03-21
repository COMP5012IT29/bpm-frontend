<template>
  <div class="login-page">
    <v-container class="rectangle">
      <v-row style="margin:30px">
        <v-col cols="4" class="left-side">
          <h1 style="font-size:36px">Begonia Personal Note</h1>
        </v-col>
        <v-col cols="8" class="right-side">
          <v-row no-gutters style="margin-bottom: 10px">
            <v-col cols="4" class="input-label"> <p style="margin-right: 30px">Email:</p> </v-col>
            <v-col cols="8">
              <v-text-field
                  class="input-field"
                  hide-details="auto"
                  v-model="email"
                  solo
              />
            </v-col>
          </v-row>
          <v-row no-gutters style="margin-bottom: 10px">
            <v-col cols="4" class="input-label">  <p style="margin-right: 30px">Password: </p></v-col>
            <v-col cols="8">
              <v-text-field
                  class="input-field"
                  hide-details="auto"
                  solo
                  type="password"
                  v-model="password"
              />
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="4"></v-col>
            <v-col cols="8">
              <v-btn
                  class="login-text-field"
                  value="Login"
                  @click="login"
                  hide-details="auto"
                  solo
              >Login</v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="9"></v-col>
            <v-col cols="3" class="signup-col">
              <div class="signup-div" @click="gotoSignup">Sign Up</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>





<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import axios from "axios";
import router from "@/router";
export default {
  name: 'Login',
  setup() {
    const store = useStore();
    const email = ref('');
    const password = ref('');

    async function login() {
      try {
        const response = await axios.post(store.state.host + 'login/', {
          email: email.value,
          password: password.value,
        });
        if (response.data.msg === 'Success') {
          store.commit('set_username', response.data.username);
          store.commit('set_token', response.data.token.access);
          alert('Login Success');
          await router.push('/newnote')
        } else {
          store.commit('del_username');
        }
      } catch (error) {
        console.log(error);
        // store.commit('response', error);
      }
    }
    function gotoSignup() {
      router.push('/register');
    }

    return {
      email,
      password,
      login,
      gotoSignup,
    };
  },
};
</script>

<style scoped>

.login-page {
  background-color: #3377AA;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rectangle {
  background-color: #1E415F;
  padding: 32px;
  border-radius: 8px;
  width: 90%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-side {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-side {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-label {
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
  font-size:20px;
}

.input-field {
  background-color: white;
  width: 100%;
}

.login-text-field {
  background-color: #3377AA;
  color: white;
  width: 100%;
  min-height:56px;
  cursor: pointer;
}

.signup-col {
  display: flex;
  justify-content: flex-end;
}

.signup-div {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

</style>