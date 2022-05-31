import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
//import './App.css' //import HomePage from "./HomePage" // and many other pages....
import HomePage from './Pages/Home/Home.jsx'
import AccountPage from './Pages/Account/Account.jsx'
import BasketPage from './Pages/Basket/Basket.jsx'
import CatalogPage from './Pages/Catalog/Catalog.jsx'
import CataloguePage from './Pages/Catalogue/Catalogue.jsx'
import ContactsPage from './Pages/Contacts/Contacts.jsx'
import CooperationPage from './Pages/Cooperation/Cooperation.jsx'
import DeliveryPage from './Pages/Delivery/Delivery.jsx'
import LogInOrRegistrationPage from './Pages/LogInOrRegistration/LogInOrRegistration.jsx'
import NeedGoodPage from './Pages/NeedGood/NeedGoods.jsx'
import NewPage from './Pages/New/New.jsx'
import OrderingPage from './Pages/Ordering/Ordering.jsx'
import OutfitPage from './Pages/Outfit/Outfit.jsx'
import PrivacyPolicyPage from './Pages/PrivacyPolicy/PrivacyPolicy.jsx'
//import TableOfSizesPage from './Pages/TableOfSizes/TableOfSizes.jsx'//
//import TableOfSizesPage from './Pages/TableOfSizes.jsx' 
import TableOfSizesPage from './Pages/TableOfSizes/TableOfSizes.jsx'
import TermsOfSaleOfGoodsPage from './Pages/TermsOfSaleOfGoods/TermsOfSalesGoods.jsx'
import VacanciesPage from './Pages/Vacancies/Vacancies.jsx'
import ViewOutfitsPage from './Pages/ViewOutfits/ViewOutfits.jsx'

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App(){
    return(
        <div className="App">
            <Router >
                <Header />

                <Routes>
                   <Route>
                       <Route index element ={<HomePage />}/>
                       <Route path='/privacyPolicy' element ={<PrivacyPolicyPage />}/>
                       <Route path='/delivery' element ={<DeliveryPage />}/>
                       <Route path='/tableOfSizes' element ={<TableOfSizesPage />}/>
                       <Route path='/termsOfSaleOfGoods' element ={<TermsOfSaleOfGoodsPage />}/>
                       <Route path='/contacts' element ={<ContactsPage />}/>
                       <Route path='/vacancies' element ={<VacanciesPage />}/>
                       <Route path='/cooperation' element ={<CooperationPage />}/> 
                       <Route path='/logInOrRegistration' element ={<LogInOrRegistrationPage />}/>          
                       <Route path='/account/:name' element ={<AccountPage />}/>                    
                       <Route path='/viewImages/' element ={<ViewOutfitsPage />}/>                   
                       <Route path='/Outfit/:nameOfOutfit' element ={<OutfitPage />}/>
                       <Route path='/ordering' element ={<OrderingPage />}/>
                       <Route path='/basket' element ={<BasketPage />}/>                                 
                       //<Route path='/product' element ={<CataloguePage />}/>                
                       //<Route path='/product/:id' element ={<CatalogPage />}/>
                       <Route path='/catalogue/:item' element ={<NeedGoodPage />}/>
                       <Route path='/newClothes' element ={<NewPage />}/>   
                   </Route>
                   </Routes>
                   < Footer />
                </Router>
        </div>
    );
}
export default App;