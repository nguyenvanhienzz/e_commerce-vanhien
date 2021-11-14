import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './Component/Products';
import Header from './Component/header';
import Footer from './Component/footer';
import Checkout from './Component/Checkout';
import Favourites from './Component/Favourites';
import Login from './Component/Login';
import Account from './Component/NewAccount';
import ProductDetails from './Component/product details';
import AccoutSetting from './Component/setting/AccoutSetting';
import DetailsCheckout from './Component/Checkout/DetailsCheckout/DetailsCheckout';
import Order from './Component/Orders/Order';
import ScrollToTop from './ScrollToTop';
import Blog from './Component/Blog/Blog';
import NewReleases from './Component/New Releases/NewReleases';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/product' exact>
          <Header />
          <Products />
          <Footer />
        </Route>
        <Route path='/productdetails'>
          <Header />
          <ProductDetails />
          <Footer />
        </Route>
        <Route path='/checkout'>
          <Header />
          <Checkout />
          <Footer />
        </Route>
        <Route path='/order'>
          <Header />
          <Order />
          <Footer />
        </Route>
        <Route path='/detailscheckout'>
          <DetailsCheckout />
        </Route>
        <Route path='/favourite'>
          <Header />
          <Favourites />
          <Footer />
        </Route>
        <Route path='/login'>
          <Header />
          <Login />
          <Footer />
        </Route>
        <Route path='/account'>
          <Header />
          <Account />
          <Footer />
        </Route>
        <Route path='/settings'>
          <Header />
          <AccoutSetting />
          <Footer />
        </Route>
        <Route path='/community'>
          {/* <Header /> */}
          <Blog />
          <Footer />
        </Route>
        <Route path='/new-releases'>
          <Header />
          <NewReleases />
          <Footer />
        </Route>
      </Switch>
      <ScrollToTop />
    </Router >


  );
}

export default App;
