const { createApp } = Vue;

createApp ({
    data() {
        return {
            tasks: [
                'Fare i compiti',
                'Fare il bucato',
                'Fare la spesa'
            ]
        };
    },
    methods: {
        deleteItem() {
            alert('test');
        }
    }
}).mount('#app');