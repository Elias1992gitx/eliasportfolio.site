// styled-jsx.d.ts
import 'react'

declare namespace JSX {
  interface IntrinsicElements {
    style: React.DetailedHTMLProps<
      React.StyleHTMLAttributes<HTMLStyleElement>,
      HTMLStyleElement
    > & {
      jsx?: boolean
      global?: boolean
    }
  }
}