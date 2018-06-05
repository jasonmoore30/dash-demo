<template>
  <div>
    <span> Mapping Tool </span>
    <br/>
    <span> Community Engaged Learning </span>
    <v-card>
      <v-card-media>
      <mapbox
        access-token = "pk.eyJ1IjoibWFkZWxpbmUtYmF1ZXIiLCJhIjoiY2o5YThnaHZhMHp4cjMzbzc4YzdzbTAzeiJ9.FppQOJ6wceaF1EUtP9ud1A"
        :map-options="{
          style: 'mapbox://styles/madeline-bauer/cjckx62ub26ky2rlop4peaylr',
          center: [-82.300316, 34.857192],
          zoom: 9
        }"
        @map-load="mapLoaded"
        @map-click="mapClicked"
      >
      </mapbox>
      </v-card-media>
      </v-card>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'
import mapboxgl from 'mapbox-gl';
export default {
  data() {
    return {
    accessToken: 'pk.eyJ1IjoibWFkZWxpbmUtYmF1ZXIiLCJhIjoiY2o5YThnaHZhMHp4cjMzbzc4YzdzbTAzeiJ9.FppQOJ6wceaF1EUtP9ud1A',
    mapStyleToken: 'mapbox://styles/madeline-bauer/cjckx62ub26ky2rlop4peaylr',
    mapZoom: 9,
    mapCenter: [-82.300316, 34.857192]
    }
  },
  components: {
      Mapbox
  },
 methods: {
  mapLoaded (map) {
    map.addSource({
      id: 'greenville-lib',
      type: 'symbol',
      source: {
        type: 'features',
        style: 'mapbox://styles/madeline-bauer/cjckx62ub26ky2rlop4peaylr' 
      },
      'source-layer': 'Bright', 
      'layout': {
        'icon-image': '{icon}-15',
        'text-field': '{title}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.6],
        'text-anchor': 'top'
      }
    })
  },
  mapClicked (map, e) {
    this.addPopUp(map, e)
  },
  mapMouseMoved (map, e) {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['points']
    })
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : ''
  },
  addPopUp (map, e) {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['points']
    })
    if (!features.length) {
      return
    }
 
  const feature = features[0]
 
  const popupContent = Vue.extend({
    template: '<button @click="popupClicked">Click Me!</button>',
    methods: {
      popupClicked () {
        alert('Popup Clicked!')
      },
    }
  })
      // Populate the popup and set its coordinates
      // based on the feature found.
      const popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<div id="vue-popup-content"></div>')
        .addTo(map)
      new popupContent().$mount('#vue-popup-content')
    }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
} */
li {
  display: inline-block;
  margin: 0 10px;
}
/* a {
  color: #42b983;
} */
#map {
  width: 100%;
  height: 500px;
}
.mapboxgl-canvas {
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 800px;
}
</style>
