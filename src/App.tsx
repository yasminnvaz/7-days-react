import Menu from "./components/Menu";
import useAppStyles from './App.styles'

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
    </div>
  );
}

export default App;
