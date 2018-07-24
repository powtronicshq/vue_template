<style>
</style>
<style scoped lang="scss">
.zcodeImage {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <img :src="url+uuid" width="100%" height="100%" @click="click" alt="">
</template>

<script>
export default {
  model: {
    prop: 'uuid',
    event: 'getuuid'
  },
  name: 'zcodeImage',
  props: ['url'],
  data() {
    return {
      uuid: this.getUuid()
    }
  },
  methods: {
    getUuid() {
      var mydate = new Date()
      var uuid =
        'cms' +
        mydate.getDay() +
        mydate.getHours() +
        mydate.getMinutes() +
        mydate.getSeconds() +
        mydate.getMilliseconds() +
        Math.round(Math.random() * 10000)
      this.$emit('getuuid', uuid)
      return uuid
    },
    click() {
      this.uuid = this.getUuid()
    }
  }
}
</script>
