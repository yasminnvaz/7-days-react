import Menu from "./components/Menu";
import useAppStyles from './App.styles'
import Button from "./components/Button";
import TextField from "./components/TextField";

const menu = [
  'Como fazer',
  'Ofertas',
  'Depoimentos',
  'Videos',
  'Meu carrinho'
]

function App() {
  const classes = useAppStyles();
  return (
    <div className={classes.root}>
      <Menu items={menu} />
      <div style={{ width: 585, marginTop: 152, marginLeft: 360 }}>
        <p style={{ fontSize: 22, opacity: 0.5, margin: 0 }}>Sua casa com</p>
        <p className={classes.display}>melhores plantas</p>
        <p style={{ opacity: 0.5, margin: 0 }}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        <div className={classes.newsletter}>
          <TextField placeholder="Insira seu e-mail" type="email" />
          <Button>Assinar Newsletter</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
