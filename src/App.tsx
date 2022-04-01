import Menu from "./components/Menu";
import useAppStyles from './App.styles'
import Newsletter from "./components/Newsletter";

const menu = [
  'Como fazer',
  'Ofertas',
  'Depoimentos',
  'Videos',
  'Meu carrinho'
]

function App() {
  const classes = useAppStyles()
  return (
    <main className={classes.main}>
      <Menu items={menu} />
      <Newsletter />
    </main>
  );
}

export default App;
