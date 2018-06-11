<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <b-container>
                    <b-jumbotron header="Bootstrap Vue"
                                 lead="Bootstrap 4 Components for Vue.js 2">
                        <p>For more information visit our website</p>
                        <b-btn variant="primary" href="https://bootstrap-vue.js.org/">More Info</b-btn>
                    </b-jumbotron>

                    <b-form-group horizontal
                                  :label-cols="4"
                                  description="Let us know your name."
                                  label="Enter your name">
                        <b-form-input v-model.trim="name"></b-form-input>
                    </b-form-group>

                    <b-alert variant="success" :show="showAlert">
                        Hello {{ name }}
                    </b-alert>

                    <b-card title="My First Card"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                        <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>

                    <b-list-group>
                        <b-list-group-item v-for="item in items" :key="item.id">
                            {{ item.message }} <b-badge>5</b-badge>
                        </b-list-group-item>
                    </b-list-group>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Card Component mounted.')
        },
        data() {
            return {
                name: '',
                items: [
                    { message: 'iPhone' },
                    { message: 'Nokia 8' },
                    { message: 'Google Pixel' },
                    { message: 'OnePlus 5T' },
                    { message: 'Samsung Galaxy S9' },
                ],
            }
        },
        computed: {
            showAlert: function() {
                return this.name.length > 4 ? true : false;
            }
        }
    }
</script>
