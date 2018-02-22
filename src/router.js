import hotelsList from './components/hotelsList.vue'
import singleHotel from './components/singleHotel.vue'
import wishList from './components/wishList.vue'
export default [
  { path: '/', component: hotelsList },
  { path: '/wishList', component: wishList },
  { path: '/hotel/:id', component: singleHotel }
]
