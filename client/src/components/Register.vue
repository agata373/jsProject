<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white eleation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Rejestracja</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Adress e-mail"
          ></v-text-field>

          <br>
          <v-text-field
            label="Hasło"
          ></v-text-field>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            class="cyan"
            @click="register">
            Zarejestruj się
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error {
  color: red;
}
</style>
