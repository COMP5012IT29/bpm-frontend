<template>
  <div class="register-page">
    <v-container class="rectangle">
      <v-row>
        <v-col cols="8" offset="1" class="form-container">
          <v-row no-gutters style="margin-bottom: 10px">
            <v-col cols="4" class="input-label"> <p style="margin-right: 80px">Username:</p> </v-col>
            <v-col cols="8">
              <v-text-field v-model="username" class="input-field" hide-details="auto" solo />
            </v-col>
          </v-row>
          <v-row no-gutters  style="margin-bottom: 10px">
            <v-col cols="4" class="input-label"> <p style="margin-right: 80px">Password:</p> </v-col>
            <v-col cols="8">
              <v-text-field v-model="password" class="input-field" hide-details="auto" solo type="password" />
            </v-col>
          </v-row>
          <v-row no-gutters style="margin-bottom: 10px">
            <v-col cols="4" class="input-label"> <p style="margin-right: 80px">Email:</p> </v-col>
            <v-col cols="8">
              <v-text-field v-model="email" class="input-field" hide-details="auto" solo type="email" />
            </v-col>
          </v-row>
          <v-row no-gutters style="margin-bottom: 10px">
            <v-col cols="4" class="input-label"> <p style="margin-right: 80px">Phone:</p> </v-col>
            <v-col cols="8">
              <v-text-field v-model="phone" class="input-field" hide-details="auto" solo />
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="1" offset="5">
              <v-btn class="reset-btn" block small>Reset</v-btn>
            </v-col>
            <v-col cols="1" offset="3">
              <v-btn class="save-btn" @click="register" block small>Save</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-btn class="back-btn" @click="backtoLogin" bottom right fab>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import router from "@/router";
import {useStore} from "vuex";

export default {
  name: 'Register',
  setup() {
    const store = useStore();
    const username = ref('');
    const password = ref('');
    const email = ref('');
    const phone = ref('');

    async function register() {
      try {
        const response = await axios.post(store.state.host + 'signup/', {
          username: username.value,
          password: password.value,
          email: email.value,
          phone: phone.value,
        });
        if (response.data.msg === 'success') {
          alert('Register successfully');
          setTimeout(() => {
            router.go(-1);
          }, 500);
        }
        else{
          alert(response.data.msg)
        }
      } catch (error) {
        console.log(error);
        alert('Registration failed');
      }
    }
    function backtoLogin() {
      router.push('/login');
    }

    return {
      username,
      password,
      email,
      phone,
      register,
      backtoLogin,
    };
  },
};
</script>

<style scoped>
.register-page {
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
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-container {
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
  font-size: 20px;
}

.input-field {
  background-color: white;
  width: 100%;
}

.reset-btn {
  background-color: #3377AA;
  color: white;
  margin-right: 8px;
}

.save-btn {
  background-color: #3377AA;
  color: white;
}

.back-btn {
  background-color: #1E415F;
  color: white;
  position: fixed;
  bottom: 50px;
  right: 100px;
}
</style>
