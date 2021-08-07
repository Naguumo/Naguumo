import { styled } from '@theme'

export const Button = styled('button', {
  display: 'inline-block',
  color: '$text',
  margin: '0.5rem',
  padding: '0.5rem',
  cursor: 'pointer',
  textDecoration: 'none',
  border: '0.1rem solid $text',
  borderRadius: '0.25rem',
  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
    },
    active: {
      true: {
        filter: 'brightness(50%)',
      },
      false: {
        '&:hover': {
          filter: 'invert(100%)',
        },
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    active: false,
  },
})
