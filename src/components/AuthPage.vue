<template>

    <form id="authForm" @submit="checkForm">
        <h2>Авторизация</h2>
        <input maxlength="24" v-model="message" id="messInput" placeholder=" введите Leadhit-Site-Id" />
        <button type="submit">
            Войти
        </button>
    </form>
</template>

<script>
import axios from "axios";

export default {

    data: () => ({
        message: '',
        apiKey: "Leadhit-Site-Id"
    }),
    methods: {
        async checkForm() {
            console.log(this.message)
            try {
                await axios.get('https://track-api.leadhit.io/client/test_auth',
                    {
                        headers: {
                            "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
                            "Leadhit-Site-Id": this.message
                        }
                    })
                    .then(resp => {
                        console.log(resp.data);
                        localStorage.setItem("Leadhit", this.message);
                        window.location.href = 'http://localhost:8080/#/altc';

                    })
            } catch (err) {
                localStorage.removeItem("Leadhit");
                console.log(err);
            }
        }

    }
}
</script>

<style>
#authForm {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}

#authForm button {
    background: #8282e2;
    color: white;
    border-radius: 6px;
    padding: 1px 20px;
}

#authForm input {
    padding: 3px 10px;
    margin-right: 20px;
}
</style>


