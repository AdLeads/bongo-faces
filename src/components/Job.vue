<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        flat
        :color="card.type"
        @click="show = !show"
        :ripple="false"
        :elevation="hover ? 5 : 0"
      >
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" sm="6">
            <!-- <v-card flat tile :color="card.type" :ripple="false"> -->
            <v-row justify="center" align="center" no-gutters>
              <v-col cols="12" sm="2">
                <v-btn
                  color="white"
                  left
                  fab
                  v-if="!isMobile()"
                  :style="{ left: '50%', transform: 'translateX(-85%)' }"
                  height="70px"
                  width="70px"
                >
                  <v-avatar size="65px">
                    <v-img
                      lazy-src="https://picsum.photos/id/11/10/6"
                      :src="card.logo"
                      contain
                    ></v-img>
                  </v-avatar>
                </v-btn>

                <v-avatar size="90px" v-if="isMobile()">
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    :src="card.logo"
                    class="images-cs"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="10">
                <h5>{{ card.companyName }}</h5>
                <h3>
                  {{ card.title }}
                </h3>
                <v-chip label outlined color="secondary">
                  <v-icon left> mdi-map-marker </v-icon>
                  {{ card.country }}
                </v-chip>
              </v-col>
            </v-row>
            <!-- </v-card> -->
          </v-col>
          <v-col cols="12" sm="6">
            <!-- <v-card :ripple="false" flat :color="card.type"> -->
            <v-row justify="center" align="center" no-gutters>
              <v-col cols="12" sm="7">
                <Requirements :requirements="card.tags"> </Requirements>
              </v-col>
              <v-col cols="12" sm="5">
                <v-row justify="center" align="center">
                  <v-col cols="12" sm="6">
                    <div align="center">{{ timestampToDate() }}</div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <transition name="slide" mode="out-in">
                      <!-- <v-card active-class=""> -->
                      <v-card-actions v-if="hover">
                        <v-btn color="primary" @click.stop="redirect()" block>
                          <!-- {{ show ? "less" : "More" }} -->
                          Apply
                        </v-btn>
                      </v-card-actions>
                      <!-- </v-card> -->
                    </transition>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- </v-card> -->
          </v-col>
        </v-row>
      </v-card>
    </v-hover>
    <v-card :color="card.type" flat>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <Description
            :description="card.description"
            :link="'posts/' + card.key"
          ></Description>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import Description from "./Description";
import Requirements from "./Requirements";
import moment from "moment";
export default {
  props: ["card"],
  components: {
    Description,
    Requirements,
  },
  data: () => ({
    show: false,
  }),
  mounted() {
    // console.log(this.timestampToDate());
  },
  methods: {
    timestampToDate() {
      var nowDate = moment.unix(this.card.datePosted).format("MM,DD,YYYY");
      return moment(nowDate, "MM,DD,YYYY").fromNow();
      // return moment([2007, 0, 29]).fromNow();
    },
    redirect() {
      this.$router.push("/posts/" + this.card.key);
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 50%;
}
.image-cs {
  border-radius: 0%;
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
card:focus {
  background-color: "#f9f9f9";
}
</style>