import Vue from 'vue';
import colors from 'vuetify/lib/util/colors'
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blue,
                banner: colors.blueGrey.darken4,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
            },
            dark: {
                primary: colors.blue.darken2,
                banner: colors.black,
                accent: colors.grey.darken3,
                secondary: colors.amber.darken3,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3
            },
            custom: {
                primary: colors.blue.darken2,
                secondary: '#b0bec5',
                anchor: '#8c9eff',
            },
            // this.$vuetify.theme.themes.light.primary = '#4caf50'

        },
    }
});