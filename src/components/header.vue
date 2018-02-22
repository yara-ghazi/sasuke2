<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/" exact>Hotels</router-link></li>
        <li><router-link to="/wishList" exact>WishList</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 5px;
}
nav{
    background: #20B2AA;
    padding: 20px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #20B2AA;
}
</style>
