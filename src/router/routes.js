import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import ControDeProdutos from '@/views/ControDeProdutos.vue';
import ControDeClientes from '@/views/ControDeClientes.vue';
//@ é um alias para a pasta src

const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      title: 'Login',
      meta: {
        requiredAuth: false
      }
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      title: 'Dashboard',
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/controle-de-produtos',
      name: 'ControleDeProdutos',
      component: ControleDeProdutos,
      title: 'Produtos',
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/controle-de-clientes',
      name: 'ControleDeClientes',
      component: ControleDeClientes,
      title: 'Clientes',
      meta: {
        requiredAuth: true
      }
    },
  ];

  export default routes