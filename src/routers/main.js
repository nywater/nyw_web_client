// Main Containers
import MainHome from '@/containers/main_home'
import MainAbout from '@/containers/main_about'
import MainInfo from '@/containers/main_info'
import MainLegal from '@/containers/main_legal'
import SchoolList from '@/containers/school_list'

const MainHomeRoute = {
  path: '/',
  name: 'main_home',
  component: MainHome
}

const SchoolListRoute = {
  path: '/schools',
  name: 'school_list',
  props: true,
  component: SchoolList
}

const MainAboutRoute = {
  path: '/about',
  name: 'main_about',
  component: MainAbout
}

const MainInfoRoute = {
  path: '/info',
  name: 'main_info',
  component: MainInfo
}

const MainLegalRoute = {
  path: '/terms',
  name: 'main_legal',
  component: MainLegal
}

export default [
  MainHomeRoute,
  MainAboutRoute,
  MainInfoRoute,
  MainLegalRoute,
  SchoolListRoute
]
