<template>
  <q-page padding>
		<q-btn
			to="/"
			:style="
      $q.dark.isActive
        ? 'color: white'
        : 'color: #1e1e1e'"
			icon="chevron_left"
			v-bind:label="$t('mainMenu.back')"
			flat />

		<h5 
      style="font-weight: bold"
      :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: #1e1e1e'"
      >{{ $t('carousel.atriumText') }}
      </h5>
        
        <div class="column items-center">
        <atrium-card />
        </div>

    <footer />
    </q-page>   
</template>

<script>
import { openURL } from 'quasar'
import Footer from 'components/footer/Footer.vue'
import AtriumCard from "components/cards/AtriumCard.vue"
 
	export default {
    components: {
      AtriumCard,
      Footer,
      
    },
    data() {
      return {  
        slide: 1,
        tab: 'one',
        splitterModel: 15,
      }
    }
  } 

</script>
<style lang="scss" scoped>
  .space {
    padding: 2rem;
  }

</style>