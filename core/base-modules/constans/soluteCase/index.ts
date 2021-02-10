export const SlouteSubMenu = [
  {
    name: '通用方案',
    path: '/solution-general',
    active: false,
    defaultImg: require('@/assets/image/common/chirldNav-plan-normal.png'),
    activeImg: require('@/assets/image/common/chirldNav-plan-active.png'),
  },
  {
    name: '智慧公安',
    path: '',
    active: false,
    defaultImg: require('@/assets/image/common/chirldNav-publicSecurity-normal.png'),
    activeImg: require('@/assets/image/common/chirldNav-publicSecurity-active.png'),
  },
  {
    name: '智慧医疗',
    path: '',
    active: false,
    defaultImg: require('@/assets/image/common/chirldNav-medical-normal.png'),
    activeImg: require('@/assets/image/common/chirldNav-medical-active.png'),
  },
  {
    name: '智慧IDC运维',
    path: '',
    active: false,
    defaultImg: require('@/assets/image/common/chirldNav-idc-normal.png'),
    activeImg: require('@/assets/image/common/chirldNav-idc-active.png'),
  },
  {
    name: '智慧城市',
    path: '',
    active: false,
    defaultImg: require('@/assets/image/common/chirldNav-city-normal.png'),
    activeImg: require('@/assets/image/common/chirldNav-city-active.png'),
  },
]

export const SloutCaseList = [
  {
    defalutIcon: require('@/assets/image/solution/solution-plan-normal.png'),
    activeIcon: require('@/assets/image/solution/solution-plan-active.png'),
    title: '通用方案',
    maskImg: require('@/assets/image/solution/solution-plan-image.png'),
    text: [
      {
        route: '/solution-general',
        query: 'general',
        content: '数据生命周期一站式服务（包容性采集渠道，自定义API）',
      },
      {
        route: '',
        content: '全局式可视化分析',
      },
      {
        route: '',
        content: '智能实时数据分析',
      },
    ],
    active: true,
    bgText: 'INDUSTRY WIDE',
  },
  {
    defalutIcon: require('@/assets/image/solution/solution-police-normal.png'),
    activeIcon: require('@/assets/image/solution/solution-police-active.png'),
    title: '智慧公安',
    maskImg: require('@/assets/image/solution/solution-police-image.jpg'),
    text: [
      {
        route: '',
        content: '可视化态势感知系统',
      },
      {
        route: '',
        content: '场景立体防护系统',
      },
      {
        route: '',
        content: '警务中心综合智慧系统',
      },
    ],
    active: false,
    bgText: 'PUBLIC SECURITY',
  },
  {
    defalutIcon: require('@/assets/image/solution/solution-medical-normal.png'),
    activeIcon: require('@/assets/image/solution/solution-medical-active.png'),
    title: '智慧医疗',
    maskImg: require('@/assets/image/solution/solution-medical-image.png'),
    text: [
      {
        route: '',
        content: '数据生命周期一站式服务（包容性采集渠道，自定义API）',
      },
      {
        route: '',
        content: '全局式可视化分析',
      },
    ],
    active: false,
    bgText: 'HEALTHCARE',
  },
  {
    defalutIcon: require('@/assets/image/solution/solution-idc-normal.png'),
    activeIcon: require('@/assets/image/solution/solution-idc-active.png'),
    title: '智慧IDC运维',
    maskImg: require('@/assets/image/solution/solution-idc-image.png'),
    text: [
      {
        route: '',
        content: 'IDC机房设计规划',
      },
      {
        route: '',
        content: 'IDC机房配电建设',
      },
      {
        route: '',
        content: 'IDC机房可视化管理',
      },
      {
        route: '',
        content: '魔思IDN智慧数据中心管理平台',
      },
    ],
    active: false,
    bgText: 'IDC OPS',
  },
  {
    defalutIcon: require('@/assets/image/solution/solution-plan-normal.png'),
    activeIcon: require('@/assets/image/solution/solution-plan-active.png'),
    title: '智慧城市',
    maskImg: require('@/assets/image/solution/solution-city--image.png'),
    text: [
      {
        route: '',
        content: '仿真还原技术',
      },
      {
        route: '',
        content: '公共安全监看系统',
      },
      {
        route: '',
        content: '道路拥堵监测分析',
      },
      {
        route: '',
        content: '交互式可视化管理分析',
      },
      {
        route: '',
        content: '大客流监看测算引擎',
      },
      {
        route: '',
        content: '出入境分析管理',
      },
    ],
    active: false,
    bgText: 'URBAN MANAGEMENT',
  },
]
