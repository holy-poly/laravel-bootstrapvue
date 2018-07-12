<template>
	<div class="customer-view" v-if="customer">
        <div class="user-img">
            <img src="https://www.scottsdaleazestateplanning.com/wp-content/uploads/2018/01/user.png" alt="">
        </div>
        <div class="user-info">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <td>{{ customer.id }}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{ customer.name }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ customer.email }}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{{ customer.phone }}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{ customer.website }}</td>
                </tr>
            </table>
            <router-link to="/customers" class="btn btn-primary">Back to all customers</router-link>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'customer-view',
		created() {
			if (this.customers.length) {
                this.customer = this.customers.find((customer) => customer.id == this.$route.params.id);
            } else {
                axios.get(`/api/customers/${this.$route.params.id}`
				, {
					headers: {
						"Authorization": `Bearer ${this.currentUser.token}`
					}
				}
				)
				.then((response) => {
					this.customer = response.data.customer
				})
				.catch(error => {
					console.log(error.response)
				});
            }
		},
		data() {
			return {
				customer: null
			}
		},
		computed: {
			currentUser() {
        		return this.$store.getters.currentUser;
        	},
            customers() {
                return this.$store.getters.customers;
            }
		}
	}
</script>

<style scoped>
	.customer-view {
		display: flex;
		align-items: center;
	}
	.user-img {
		flex: 1;
		text-align: center;
	}
	.user-img img {
		max-width: 200px;
	}
	.user-info {
	    flex: 3;
	    /*overflow-x: scroll;*/
	}
</style>