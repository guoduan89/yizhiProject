const routerMap = [
      {
        path: '/aaa',
        name: 'aaa',
        component:import('@/views/signUpWork/components/aaa.vue'),
      },
      {
        path: '/',
        name: 'home',
        component:import('@/views/Home/index.vue'),
      },
      {
        path: '/guide',
        name: 'guide',
        component:import('@/views/Guide/index.vue'),
      },
      {
        path: '/signUpWork',
        name: 'signUpWork',
        component:import('@/views/signUpWork/index.vue'),
      },
      {
        path: '/Review',
        name: 'Review',
        component:  import('@/views/Review/index.vue'),
        children: [
          {
            path: '',
            name:'strat',
            component:import('@/views/Review/components/Strat.vue'),
          },
          {
            path: 'Score',
            name:'Score',
            component:import('@/views/Review/components/Score.vue'),
          },
        ],
      },
    
  
];

export { routerMap };
