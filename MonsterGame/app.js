new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.isGameRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = []
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits monster by " + damage
            })
            if (this.checkWin()) {
                return
            }
            this.monsterAttack()

        },
        specialAttack: function () {
            damage = this.calculateDamage(10, 20)
            this.monsterHealth -= damage
            if (this.checkWin()) {
                return
            }
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits monster hard by " + damage
            })
            this.monsterAttack()
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10
            }
            else {
                this.playerHealth = 100
            }
            this.turns.unshift({
                isPlayer: true,
                text: "Player heals by 10"
            })
            this.monsterAttack()
        },
        giveup: function () {
            this.isGameRunning = false
            turns = []
        },
        monsterAttack: function () {
            var damage = this.calculateDamage(5, 12)
            this.playerHealth -= damage
            this.turns.unshift({
                isPlayer: false,
                text: "Monster hits player by " + damage
            })
            this.checkWin()
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max + 1), min)
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You won! New game?")) {
                    this.startGame();
                }
                else {
                    this.isGameRunning = false
                }
                return true
            }
            else if (this.playerHealth <= 0) {
                if (confirm("You lost! New game?")) {
                    this.startGame();
                }
                else {
                    this.isGameRunning = false
                }
                return true
            }
            return false
        }

    }
})