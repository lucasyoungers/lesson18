new Vue ({
    el: '#app',
    data: {
        title: 'Hello World',
        url: 'https://mhintegrity.com/',
        userName: '',
        notARobot: '',
        numBoast: ''
    },
    methods: {
        greet(name) {
            return `Welcome to ${name}`
        },
        testing() {
            if (this.notARobot == true) {
                return 'You pressed a button!'
            } else if (this.notARobot == false) {
                return 'Press the button, idiot!'
            } else {
                return `Well, something's wrong here, isn't it!`
            }
        },
        insult() {
            if (this.numBoast === '') {
                return ''
            } else if (this.numBoast < 0) {
                return `You're always so negative.`
            } else if (this.numBoast == 0) {
                return `Is that how many friends you have?`
            } else if (this.numBoast > 0 & this.numBoast < 3) {
                return `This is your score out of 10.`
            } else if (this.numBoast == 4256430867) {
                return `ARE YOU STALKING ME??? I'M CALLING THE POLICE NOW!!!`
            } else {
                return `I'm positive that you're an idiot.`
            }
        }
    }
})