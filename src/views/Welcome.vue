<template>
  <b-container>
    <h1>
      Willkommen auf der Forder-Seite!!
    </h1>
    <p>
      Hier kannst du deine Forderungen an die Stadt Frankfurt stellen. Dafür musst du nur kurz einwilligen, dass wir deine Daten (natürlich anonym) verarbeiten dürfen.
    </p>
    <b-button>
        <router-link to="/questions">ich willige ein.</router-link>
    </b-button>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Welcome',

}
</script>
