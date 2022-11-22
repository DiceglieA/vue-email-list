new Vue({
    el: '#app',
    data: {
        arrMail: []
    },
    methods: {
        randomMail (){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response)
                this.arrMail.push(response.data.response)
                console.log(this.arrMail)
            })
        },
        generateMail (){
            for (let index = 0; index < 10; index++) {
                this.randomMail();
                this.arrMail = [] 
            }
        }
    }
})