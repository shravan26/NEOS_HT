<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6 reg-form">
                    <form action="#" v-on:submit.prevent="register">
                        
                        <div class="mb-3">
                            <label for="centerName" class="form-label lead text-white">Center Name</label>
                            <input type="text" class="form-control" v-model="registrationInfo.centerName">
                        </div>
                        <div class="mb-3">
                            <label for="branch" class="form-label lead text-white">Branch</label>
                            <input type="text" class="form-control" v-model="registrationInfo.branch">
                        </div>
                        <div class="mb-3">
                            <label for="cin" class="form-label lead text-white">Company Incorporation Number(CIN)</label>
                            <input type="text" class="form-control" v-model="registrationInfo.companyIncorporationNumber">
                        </div>
                        <div class="mb-3">
                            <label for="contact" class="form-label lead text-white">Contact Number</label>
                            <input type="text" class="form-control" v-model="registrationInfo.contactNumber">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label lead text-white">Email</label>
                            <input type="email" class="form-control" v-model="registrationInfo.email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label lead text-white">Password</label>
                            <input type="password" class="form-control" v-model="registrationInfo.password">
                        </div>
                        <div class="mb-3">
                            <label for="confpassword" class="form-label lead text-white">Confirm Password</label>
                            <input type="password" class="form-control" v-model="registrationInfo.confirmPassword">
                        </div>
                        <div class="pt-3 d-grid gap-2 mx-auto col-6 ">
                            <button type="button" class="btn-lg btn-light " @click="register">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Register",
        data() {
            return {
                error : false,
                registrationInfo: {
                    centerName : "",
                    branch : "",
                    companyIncorporationNumber : "",
                    contactNumber : "",
                    email : "",
                    password : "",
                    confirmPassword : "",
                }
            }
        },
        methods :{
            register() {
                this.$store.dispatch('REGISTER_USER',{
                    centerName : this.registrationInfo.centerName,
                    branch : this.registrationInfo.branch,
                    companyIncorporationNumber : this.registrationInfo.companyIncorporationNumber,
                    contactNumber : this.registrationInfo.contactNumber,
                    email : this.registrationInfo.email,
                    password : this.registrationInfo.password,
                    confirmPassword : this.registrationInfo.confirmPassword
                }).then(success => {
                    console.log(success);
                    this.$router.push('/');
                })
                .catch(error => {
                    console.log(error);
                    this.error = true;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    
    .reg-form{
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