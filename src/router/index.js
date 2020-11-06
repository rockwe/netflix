import Vue from 'vue'
import VueRouter from 'vue-router'


const FrontendLayout = () => import('../layouts/FrontendLayout')
const AuthLayout = () => import('../layouts/AuthLayout')



const SignIn1 = () => import('../views/AuthPages/Default/SignIn1')
const contact = () => import('../views/AuthPages/Default/contact')
const help = () => import('../views/Help/help')
const premiersPas = () => import('../views/Help/premiersPas')
const mdp = () => import('../views/Help/mdp')
const LockScreen1 = () => import('../views/AuthPages/Default/LockScreen1')


const LandingPage = () => import('../views/FrontendPages/MainPage.vue')
const ShowCategory = () => import('../views/FrontendPages/ShowCategory.vue')
const CategoryDetail = () => import('../views/FrontendPages/ShowDetail.vue')
const MovieCatgeory = () => import('../views/FrontendPages/MovieCategory')
const MovieDetail = () => import('../views/FrontendPages/MovieDetail')
const SinglePage = () => import('../views/FrontendPages/SinglePage')
const VideoPage = () => import('../views/FrontendPages/Components/Trending/Video.vue')

const ManageProfile = () => import('../views/FrontendPages/UserProfile/ManageProfile.vue')
const Settings = () => import('../views/FrontendPages/UserProfile/Settings.vue')
const PricingPlanning = () => import('../views/FrontendPages/UserProfile/PricingPlan.vue')



Vue.use(VueRouter)



const authChildRoutes = (prop) => [
  {
    path: 'sign-in1',
    name: prop + '.sign-in1',
    meta: { auth: true },
    component: SignIn1
  },
  {
    path: 'lock-screen1',
    name: prop + '.lock-screen1',
    meta: { auth: true },
    component: LockScreen1
  },

]



const landingPageRoutes = (prop) => [
  {
    path: '',
    name: prop + '.landing-page',
    meta: { auth: true, name: 'landing page 1', slider: 'true' },
    component: LandingPage
  },
  {
    path: '/show-category',
    name: prop + '.show-category',
    meta: { auth: true, name: 'Show Category', category: 'true' },
    component: ShowCategory
  },
  {
    path: '/category-detail',
    name: prop + '.category-detail',
    meta: { auth: true, name: 'Category Details' },
    component: CategoryDetail
  },
  {
    path: '/movie-category',
    name: prop + '.movie-category',
    meta: { auth: true, name: 'Movie Category', movieslider: 'true' },
    component: MovieCatgeory
  },
  {
    path: '/movie-detail',
    name: prop + '.movie-detail',
    meta: { auth: true, name: 'Movie Detail' },
    component: MovieDetail
  },
  {
    path: '/show-single',
    name: prop + '.show-single',
    meta: { auth: true, name: 'Show Single' },
    component: SinglePage
  },
  {
    path: '/manage-profile',
    name: prop + '.manage-profile',
    meta: { auth: true, name: 'Manage Profile', mainClass: '' },
    component: ManageProfile
  },
  {
    path: '/profile-setting',
    name: prop + '.profile-setting',
    meta: { auth: true, name: 'Profile Setting', mainClass: '' },
    component: Settings
  },
  {
    path: '/pricing-planning',
    name: prop + '.pricing-planning',
    meta: { auth: true, name: 'Price Planning', mainClass: '' },
    component: PricingPlanning
  },
    {
    path: '/contact',
    name: prop + '.contact',
    meta: { auth: true, name: 'contact', mainClass: '' },
    component: contact
  },
    {
    path: '/help',
    name: prop + '.help',
    meta: { auth: true, name: 'help', mainClass: '' },
    component: help
  },
    {
    path: '/premiersPas',
    name: prop + '.premiersPas',
    meta: { auth: true, name: 'premiersPas', mainClass: '' },
    component: premiersPas
  },
    {
    path: '/mdp',
    name: prop + '.mdp',
    meta: { auth: true, name: 'mdp', mainClass: '' },
    component: mdp
  },
  {
    path: '/video-page',
    name: prop + '.video-page',
    meta: { auth: true, name: 'Watch Video' },
    component: VideoPage
  }
]

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: FrontendLayout,
    meta: { auth: true },
    children: landingPageRoutes('landing-page')
  },

  {
    path: '/auth',
    name: 'auth1',
    component: AuthLayout,
    meta: { auth: true },
    children: authChildRoutes('auth1')
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})


export default router
