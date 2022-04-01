import useCardStyles from './Card.styles';

export type CardProps = {
  transparent?: boolean
  children: React.ReactNode
  className?: string
}

const Card = (props: CardProps) => {
  const { card } = useCardStyles(props);

  return (
    <div className={card} {...props}>
      {props.children}
    </div>
  )
}

export default Card