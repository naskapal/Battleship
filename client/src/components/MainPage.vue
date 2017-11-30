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
    components: {
      FirstPlayer,
      SecondPlayer
    },
    data() {
      return {
        turn: 'player1',
        pos1: '',
        pos2: '',
        player1: 0,
        player2: 0,
        hit1: '',
        hit2: ''
      }
    },

    methods: {
      getPlayerOneAttack(payload) {
        let checkHitplayer1 = this.searchPositions(this.pos2, Array.from(payload));

        if (checkHitplayer1 !== '') {
          console.log('~~~ HIT player 2')
          console.log(this.player2);

          this.hit1 = true;
          this.player2--
          this.turn = 'player2'
        } else {
          this.hit1 = false;
        }
      },

      getPlayerTwoAttack(payload) {
         let checkHitplayer2 = this.searchPositions(this.pos1, Array.from(payload));

         if (checkHitplayer2 !== '') {
          this.hit2 = true;
          this.player1--
          this.turn = 'player1'
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
    created() {
      this.pos1 = [[0,1],[0,2],[0,3]];
      this.pos2 = [[1,1],[1,2],[1,3]];

      this.player1 = 3
      this.player2 = 3
    }
  }
</script>

<style>

</style>
