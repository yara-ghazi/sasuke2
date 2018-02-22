<template>
  <div>
    <table>
      <tr>
       <th>Name</th>
       <th>Details</th>
       <th>Check</th>
       <th>Remove</th>
     </tr>
     <tr v-for="hotel in wishList">
       <td>{{hotel.name}}</td>
       <td>{{hotel.description.slice(0,200)}}</td>
       <td v-if="!hotel.checked"><button v-on:click="check(hotelsList.indexOf(hotel))">check</button> </td>
       <td v-if="hotel.checked"><p>checked</p></td>
       <td><button v-on:click="removeFromWishList(hotelsList.indexOf(hotel))">remove</button> </td>
     </tr>
    </table>
  </div>
</template>

<script>

export default {
  computed:{
    wishList(){
      return this.$store.getters.getWishlist;
    },
    hotelsList(){
      return this.$store.state.hotelsList;
    }
  },
  methods:{
    removeFromWishList:function(index){
      this.$store.dispatch('removeFromWishList',index);
    },
    check:function(index){
      this.$store.dispatch('check',index);
    }
  }
}
</script>

<style>
table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
    background-color: #87CEFA;
}
</style>
