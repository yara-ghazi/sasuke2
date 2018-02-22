import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store=new Vuex.Store({
  state:{
    hotelsList:[
      {
        name:"City Inn Palace Hote",
        description:"Located in Al-Bireh , specifically in the Sharafeh neighborhood, most shopping centers, restaurants and bars are within a 5-minute drive away. You can also reach Ramallah center with less than a 10 minutes walk. Free parking is available beneath the hotel for all the guests who have private cars. Conveniently only 18 km/11 miles  away from The Holy city of Jerusalem.",
        image:"https://images.yamsafer.me/images/large/314576/47954647.jpg",
        checked:false,
        added:false
      },
      {
        name:"Mercure Istanbul Topkapi",
        description:"With a stay at Mercure Istanbul Topkapi in Istanbul, you'll be close to Panoroma 1453 and Suleymaniye Mosque. This 5-star hotel is within close proximity of Constantinople Walls and Abdi Ipekci Arena.",
        image:"https://images.yamsafer.me/images/large/321876/mercure%20istanbul.jpg",
        checked:false,
        added:false
      },
      {
        name:"Elite World Istanbul Hotel",
        description:"Elite World Istanbul Hotel is in the heart of Istanbul, walking distance from Dot and Taksim Square. This 5-star hotel is close to Suleymaniye Mosque and Topkapi Palace.",
        image:"https://images.yamsafer.me/aliens/13666/large/hotels/2000000/1190000/1181300/1181264/1181264_127.jpg",
        checked:false,
        added:false
      },
      {
        name:"Innpera Hotel",
        description:"Located in the center of the city, the Innpera Hotel offers easy access to Taksim, a popular tourist attraction in Istabul. Established in 1964, the hotel features modern architecture both inside and outside. It is just a few minutes away from the airport and a few minutes away from shops, restaurants and entertainment.",
        image:"https://images.yamsafer.me/aliens/8666/large/hotels/1000000/480000/479600/479513/479513_130.jpg",
        checked:false,
        added:false
      },
      {
        name:"Elite World Business Hotel",
        description:"Located in Istanbul (Kucukcekmece), Elite World Business Hotel is convenient to Istanbul Aydın University and ArmoniPark Outlet Center. This 5-star hotel is within close proximity of Florya Beach and Menekse Beach.",
        image:"https://images.yamsafer.me/aliens/203272/large/hotels/7000000/6230000/6220700/6220669/e8e73853.jpg",
        checked:false,
        added:false
      },
      {
        name:"Titanic City Taksim",
        description:"Titanic City Taksim is in the heart of Istanbul, walking distance from Taksim Square and Taksim Gezi Park. This 4-star hotel is close to Topkapi Palace and Suleymaniye Mosque.",
        image:"https://images.yamsafer.me/aliens/110857/large/hotels/3000000/2010000/2001500/2001408/2001408_31.jpg",
        checked:false,
        added:false
      }
    ]
  },
  getters:{
    getWishlist: state=>{
      return state.hotelsList.filter((blog)=>{
          return blog.added;
      })
    }
  },
  mutations:{
    addToWishList:(state,payload) => {
      state.hotelsList[payload].added=true;
    },
    removeFromWishList:(state,payload) => {
      state.hotelsList[payload].added=false;
      state.hotelsList[payload].checked=false;
    },
    check:(state,payload) => {
      state.hotelsList[payload].checked=true;
    }
  },
  actions:{
    addToWishList:(context,payload)=>{
      context.commit('addToWishList',payload)
    },
    removeFromWishList:(context,payload)=>{
      context.commit('removeFromWishList',payload)
    },
    check:(context,payload)=>{
      context.commit('check',payload)
    }
  }

})
