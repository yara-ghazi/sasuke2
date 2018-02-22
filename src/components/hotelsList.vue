<template>
  <div id="hotels" class="row">
    <div v-for="hotel in hotelsList" class="hotel col-lg-6 col-md-6">
      <router-link v-bind:to="'/hotel/'+hotelsList.indexOf(hotel)"><h3>{{hotel.name}}</h3></router-link>
      <div class="row">
        <img v-bind:src="hotel.image" class="col-lg-4 col-md-4 col-sm-4">
        <div class="col-lg-8 col-md-8 col-sm-8 ">
          <article>
            {{hotel.description | snippet}}
          </article>
          <button v-if="!hotel.added" v-on:click="addToWishList(hotelsList.indexOf(hotel))">Add to wishList</button>
          <button v-if="hotel.added" v-on:click="removeFromWishList(hotelsList.indexOf(hotel))">Remove from wishList</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import singleHotel from './singleHotel.vue'
export default {
  components:{
    'singleHotel':singleHotel
  },
  filters:{
      snippet: function (value) {
        return value.slice(0,100)+'...';
      }
  },
  computed:{
    hotelsList(){
      return this.$store.state.hotelsList;
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
h3{
  color: #20B2AA
}
#added{
   font-weight: bold;
   margin: 10px;
}
button {
  padding: 5px;
  background-color: #87CEFA;
  margin:10px;
}
#hotels{
    max-width: 800px;
    margin: 0px auto;
}
.hotel{
    padding: 20px;
    margin:  0 auto;
    box-sizing: border-box;
    background: #eee;
}
img {
    width:  200px;
    height: 200px;
    float: left;
    background-repeat: no-repeat;

}
@media only screen {
    /* For mobile phones: */
    [class*="col-"] {
        width: 50%;
    }
}
</style>
