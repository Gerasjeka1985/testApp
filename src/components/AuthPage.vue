<template>

    <form id="authForm" @submit.prevent="checkForm">
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
    beforeCreate() {
        document.querySelector("#chartdiv").setAttribute("style", "display:none");
    },

    data: () => ({
        message: '',
        apiKey: "Leadhit-Site-Id"
    }),
    methods: {
        async checkForm() {
            try {
                if (localStorage.getItem("Leadhit" == "5f8475902b0be670555f1bb3")) {
                    window.location.href = 'http://localhost:8080/#/altc';
                }
                else {
                    await axios.get('https://track-api.leadhit.io/client/test_auth',
                        {
                            headers: {
                                "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
                                "Leadhit-Site-Id": this.message
                            }
                        })
                        .then(() => {
                            localStorage.setItem("Leadhit", this.message);
                        })
                    window.location.href = 'http://localhost:8080/#/altc';
                    document.querySelector("#chartdiv").setAttribute("style", "display:block");
                }
            } catch {
                alert("Wrong Api-key, try again...");
                localStorage.removeItem("Leadhit");
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


