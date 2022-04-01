import { createUseStyles } from "react-jss"
import HeroBackground from '../../assets/imagem-hero.svg'

const useNewsletterStyles = createUseStyles({
  container: {
    marginTop: 152,
    position: 'relative',
    padding: 16,
    "&:after": {
      content: '""',
      display: 'block',
      width: 792,
      height: 976,
      backgroundImage: `url(${HeroBackground})`,
      position: 'absolute',
      top: "calc(-287px + 50px)",
      right: 0,
      zIndex: -1,
      pointerEvents: 'none',
    },
  },
  card: {
    maxWidth: 585,
  },
  text: {
    maxWidth: 481,
    "& h1": {
      fontSize: 22,
      fontWeight: 400,
      lineHeight: "27px",
      "& strong": {
        fontSize: 82,
        fontFamily: ['Elsie Swash Caps', 'cursive'],
        fontWeight: 900,
        lineHeight: "94px"
      },
    },
    "& p": {
      fontSize: 16,
      fontWeight: 400,
      marginBottom: 16,
      lineHeight: "26px",
      opacity: 0.5,
    }
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
  }
})

export default useNewsletterStyles