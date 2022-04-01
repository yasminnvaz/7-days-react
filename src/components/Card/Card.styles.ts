import { createUseStyles } from "react-jss"
import { CardProps } from "./Card"

const useCardStyles = createUseStyles({
  card: ({ transparent = false }: CardProps) => ({
    backgroundColor: transparent ? "transparent" : "white",
  })
})

export default useCardStyles


