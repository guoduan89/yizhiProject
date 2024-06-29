const routerMap = [

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
        children: [
          {
            path: 'Fill',
            name: 'Fill',
            component:import('@/views/signUpWork/components/Fill.vue'),
          },
          {
            path: 'Upload',
            name: 'Upload',
            component:import('@/views/signUpWork/components/Upload.vue'),
          },
          {
            path: '111',
            name: '111',
            component:import('@/views/signUpWork/components/111.vue'),
          },
        ],
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
