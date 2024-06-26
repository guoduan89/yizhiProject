const routerMap = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
      },
      {
        path: 'guide',
        name: 'guide',
        component: () => import('@/views/Guide/index.vue'),
      },
      // {
      //   path: 'body',
      //   name: 'body',
      //   component: () => import('@/views/Login/components/Body.vue'),
      // },
      {
        path: 'signUpWork',
        name: 'signUpWork',
        component: () => import('@/views/signUpWork/index.vue'),
        children: [
          { 
            path: 'Fill',
            name: 'Fill',
            component: () => import('@/views/signUpWork/components/Fill.vue')
          },
          { 
            path: 'Upload',
            name: 'Upload',
            component: () => import('@/views/signUpWork/components/UpLoad.vue')
          },
        ]
      },
      {
        path: 'Review',
        name: 'Review',
        component: () => import('@/views/Review/index.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/Review/components/Strat.vue')
          },
          {
            path: 'Score',
            component: () => import('@/views/Review/components/Score.vue')
          }
        ]
      }
    ],
  },
];

export { routerMap };
