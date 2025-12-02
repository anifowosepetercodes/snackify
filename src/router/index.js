import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import ShopPage from '../pages/ShopPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import PrivatePolicy from '../pages/PrivatePolicy.vue'
import HelpPage from '../pages/HelpPage.vue'
import FaqPage from '../pages/FaqPage.vue'
import TermsPage from '../pages/TermsPage.vue'
import TopSnack from '../pages/TopSnack.vue'
import SnackStorage from '../pages/SnackStorage.vue'
import QuickSnack from '../pages/QuickSnack.vue'
import SignUp from '../pages/SignUp.vue'
import LoginPage from '../pages/LoginPage.vue'
import PasswordReset from '../pages/PasswordReset.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import CartPage from '../pages/CartPage.vue'
import CheckoutPage from '../pages/CheckoutPage.vue'
import DeliveryPage from '../pages/DeliveryPage.vue'
import ThankYou from '../pages/ThankYou.vue'

const routes =[
    {path: '/', component: HomePage },
    {path: '/ShopPage', component: ShopPage },
    {path: '/AboutPage', component: AboutPage },
    {path: '/ContactPage', component: ContactPage },
    {path: '/TermsPage', component: TermsPage },
    {path: '/FaqPage', component: FaqPage },
    {path: '/HelpPage', component: HelpPage },
    {path: '/TopSnack', component: TopSnack },
    {path: '/PrivatePolicy', component: PrivatePolicy },
    {path: '/SnackStorage', component: SnackStorage },
    {path: '/QuickSnack', component: QuickSnack },
    {path: '/LoginPage', component: LoginPage },
    {path: '/SignUp', component: SignUp },
    {path: '/PasswordReset', component: PasswordReset },
    {path: '/ProfilePage', component: ProfilePage },
    {path: '/CartPage', component: CartPage },
    {path: '/CheckoutPage', component: CheckoutPage },
    {path: '/DeliveryPage', component: DeliveryPage },
    {path: '/ThankYou', component: ThankYou }
]   

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router