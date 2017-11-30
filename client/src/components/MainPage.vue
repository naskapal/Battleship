<template>
  <div class="main-page">
    <FirstPlayer @attack-player-one="getPlayerOneAttack" :hit="hit1" :player1="player1"></FirstPlayer>
    <SecondPlayer @attack-player-two="getPlayerTwoAttack" :hit="hit2" :player2="player2"></SecondPlayer>
  </div>
</template>

<script>
  import FirstPlayer from '@/components/FirstPlayer'
  import SecondPlayer from '@/components/SecondPlayer'
  export default {
    name: 'MainPage',
    data () {
      return {
          pos1: '',
          pos2: '',
          player1: 0,
          p1Key: '',
          p2Key: '',
          player2: 0,
          hit1: '',
          hit2: ''
      }
    },
    components: {
      FirstPlayer,
      SecondPlayer
    },
    methods: {
      getFleets () {
        this.$https.get('/')
        .then(({data}) => {

          this.$https.get('/')
        .then((response2) => {
          console.log('ini datanya ', response2.data)
          this.pos2 = response2.data
          this.$db.ref('/database').push({
            username: '',
            fleet2: this.pos2,
            p2HP: 15
          })
        })

          console.log('ini datanya ', data)
          this.pos1 = data
          this.$db.ref('/database').push({
            username: '',
            fleet1: this.pos1,
            p1HP: 15
          })
        })
        .catch(err => console.log(err))

        
      },
      getPlayerOneAttack(payload) {
        let checkHitplayer1 = this.searchPositions(this.pos2, Array.from(payload));

        if (checkHitplayer1 !== '') {
          console.log('~~~ HIT player 2')
          console.log(this.player2);


          this.hit1 = true;
          this.player2--

        this.$db.ref('/database', + localStorage.getItem('player2')).set({
          p2HP: this.player2
        })          
        } else {
          this.hit1 = false;
        }
      },

      getPlayerStatus () {
        let arr = []
        let data = ''
        this.$db.ref('/database').on('value', function(snapshot){
          console.log('position ', data = snapshot.val())

          let i = 0

          for (let key in data) {
            localStorage.setItem(`player${i}`, key)
            arr.push(key)
            i++
          }

          this.p1Key = arr[0]
          this.p2Key = arr[1]

          console.log(`p1key adalah ============================= ${this.p1Key}`)

        })
      },


      getPlayerTwoAttack(payload) {
         let checkHitplayer2 = this.searchPositions(this.pos1, Array.from(payload));

         if (checkHitplayer2 !== '') {
          this.hit2 = true;
          this.player1--
          this.turn = 'player1'

        this.$db.ref('/database' + localStorage.getItem('player1')).set({
          p1HP: this.player1
        })
        } else {
          this.hit2 = false;
        }
      },

      searchPositions(arr, pos) {
        var result = '';

        arr.forEach( function(position, index) {
          if (position.toString() === pos.toString()) {
            result = {position: position, index: index};
          }
        });

        return result;
      }

    },

    watch: {
      player1(newLife){
        console.log(newLife);
        if (newLife < 1) {
          alert("Player 2 WIN!")
        }
      },

      player2(newLife){
        console.log(newLife);
        if (newLife < 1) {
          alert("Player 1 WIN!")
        }
      }
    },

    created() {
      this.getFleets()
      this.getPlayerStatus()
      this.player1 = 15
      this.player2 = 15
      this.p1Key = ''
      this.p2Key = ''
    }
  }
</script>

<style>

</style>
