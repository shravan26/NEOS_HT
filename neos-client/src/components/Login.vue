<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6 log-form">
                    <form action="#" v-on:submit.prevent="login">
                        <div class="mb-3">
                            <label for="email" class="form-label lead text-white">Email</label>
                            <input type="email" class="form-control" v-model="loginInfo.email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label lead text-white">Password</label>
                            <input type="password" class="form-control" v-model="loginInfo.password">
                        </div>
                        <div class="pt-3 d-grid gap-2 mx-auto col-6 ">
                                <button type="button" class="btn-lg btn-light" @click="login">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'Login',
        data() {
            return{
                error : false,
                loginInfo : {
                    email : '',
                    password : '',
                }
            }
        },
        methods :{
            login(){
                this.$store.dispatch('LOGIN',{
                    email : this.loginInfo.email,
                    password : this.loginInfo.password
                }).then((success) => {
                    console.log(success);
                    this.$router.push('/');
                }).catch((error) => {
                    console.log(error);
                    this.error = true; 
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .log-form{
        padding: 25px;
        background: rgb(0,193,187);
        background: linear-gradient(0deg, rgba(0,193,187,1) 26%, rgb(30, 97, 95) 100%);
        border-radius: 5px;
    }
    button{
        width: 100%;
        font-weight: 400;
        color :  rgb(34, 121, 118);
        border-radius: 25px;
        border: none;
    }
</style>