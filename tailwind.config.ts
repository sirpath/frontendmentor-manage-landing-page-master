import daisyui from 'daisyui'
import daisyuiThemes from 'daisyui/src/theming/themes'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        'bright Red': 'hsl(12, 88%, 59%)',
        primary: 'hsl(228, 39%, 23%)',
        secondary: 'hsl(227, 12%, 61%)',
        'pale-red': 'hsl(13, 100%, 96%)',
        'ligth-gray': 'hsl(0, 0%, 98%)',
        'very-dark-blue': 'hsl(233, 12%, 13%)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: {
        ...daisyuiThemes['[data-theme=cmyk]'],
        /*
        primary: '', // dominant color.
        secondary: '', // less dominant but still distinguishable.
        accent: '', // draw attention, notifications, highlighted text
        neutral: '', // shades of blacks, grays, and whites. don't convey a specific mood or emotion on their own.
        'base-100': '', // base backgrounds color.
        'base-content': '', // base content color.
        */
      },
    }],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
