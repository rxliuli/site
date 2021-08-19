import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
