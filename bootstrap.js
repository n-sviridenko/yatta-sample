// Intl
// the these docs if it won't be enough:
// https://github.com/formatjs/react-intl/blob/280a541faa85f620f915fc60c1eb72a69c2ecf18/docs/Upgrade-Guide.md#migrate-to-using-native-intl-apis
if (!global.Intl) {
  require('intl');
  require('intl/locale-data/jsonp/en.js');
}

// if (!global.Intl.PluralRules) {
//   require('@formatjs/intl-pluralrules/polyfill');
//   require('@formatjs/intl-pluralrules/locale-data/en'); // Add locale data for de
// }

// if (!global.Intl.RelativeTimeFormat) {
//   require('@formatjs/intl-relativetimeformat/polyfill');
//   require('@formatjs/intl-relativetimeformat/locale-data/en'); // Add locale data for de
// }
