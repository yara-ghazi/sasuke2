<template>
  <div>
    <h3>{{hotel.name}}</h3>
    <div class="row">
      <img v-bind:src="hotel.image" class="col-lg-3 col-md-3 col-sm-3">
      <div class="col-lg-9 col-md-9 col-sm-9">
        <article>
          {{hotel.description}}
        </article>
        <button v-if="!hotel.added" v-on:click="addToWishList(id)">Add to wishList</button>
        <button v-if="hotel.added" v-on:click="removeFromWishList(id)">Remove from wishList</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id
    }
  },
  computed:{
    hotel(){
      return this.$store.state.hotelsList[this.id];
    }
  },
  methods:{
    addToWishList:function(index){
      this.$store.dispatch('addToWishList',index);
    },
    removeFromWishList:function(index){
      this.$store.dispatch('removeFromWishList',index);
    }
  }
}
</script>

<style>
</style>
