/* eslint-disable react/jsx-no-comment-textnodes */
import Button from "../Button"
import Card from "../Card"
import TextField from "../TextField"
import useNewsletterStyles from "./Newsletter.styles"

const Newsletter = () => {
  const { formGroup, container, card, ...classes } = useNewsletterStyles()

  return (
    <div className={container}>
      <Card transparent className={card}>
        <div className={classes.text}>
          <h1>
            Sua casa com as
            <br />
            <strong>
              melhores
              <br />
              plantas
            </strong>
          </h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
            assine nossa newsletter para saber das novidades da marca.
          </p>
        </div>
        <form action="/">
          <div className={formGroup}>
            <TextField placeholder="Insira seu e-mail" type="email" />
            <Button>Assinar Newsletter</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Newsletter