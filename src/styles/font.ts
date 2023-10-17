import { Be_Vietnam_Pro } from 'next/font/google'

const fontPrimary = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400','500','700'],
  variable: '--font-primary',
})


const useFonts = [fontPrimary]

/* #####################
 * Magic
 ####################### */
const fontClass = useFonts.map((font) => (
  font.variable
)).join(' ')

export default fontClass
