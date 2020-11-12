<template>

</template>
<script>
export default {
  name: 'LatestEpisode',
  components: {
  },
  mounted () {
  },
  data () {
    return {
      latestData: [
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '1', date: '11 Aug 20', time: '30m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '2', date: '12 Aug 20', time: '35m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '3', date: '14 Aug 20', time: '20m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '4', date: '15 Aug 20', time: '40m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '5', date: '16 Aug 20', time: '25m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '6', date: '20 Aug 20', time: '35m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '7', date: '21 Aug 20', time: '40m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '8', date: '23 Aug 20', time: '45m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '9', date: '24 Aug 20', time: '25m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '10', date: '25 Aug 20', time: '30m', text: 'Lorem Ipsum is simply dummy text' }
      ]
    }
  }
}
</script>
