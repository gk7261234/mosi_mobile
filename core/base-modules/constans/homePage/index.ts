import { Edirection, EStatus } from '../enum'

export interface IMessage {
  date: string
  title: string
  desc: string
  bottom: number
}

export const homePageTechList = [
  [
    {
      id: 1,
      imgSrc: require('@/assets/image/homepage/create-idea.png'),
      activeSrc: require('@/assets/image/homepage/dynamic/icon_0001.png'),
      title: '创建思路',
      subscription:
        '魔思科技（MOSI）启思DT时代的发展，智能创建大数据全生命周期应用与服务。帮您调整进入数字时代的高效运营与管理。',
    },
    {
      id: 2,
      imgSrc: require('@/assets/image/homepage/adjust-think.png'),
      activeSrc: require('@/assets/image/homepage/dynamic/icon_0002.png'),
      title: '调整思维',
      subscription:
        '可视化模式扫净视角盲区，大数据分析挖掘解析隐形问题。经营过程中，不该让运营控制你，你却不了解运营。',
    },
  ],
  [
    {
      id: 3,
      imgSrc: require('@/assets/image/homepage/think-ahead.png'),
      activeSrc: require('@/assets/image/homepage/dynamic/icon_0003.png'),
      title: '超前思度',
      subscription:
        '数字孪生，是物理世界与数字世界的桥梁技术。我们与世界尽情交互，更不断在交互中维持平衡。',
    },
    {
      id: 4,
      imgSrc: require('@/assets/image/homepage/more-than.png'),
      activeSrc: require('@/assets/image/homepage/dynamic/icon_0004.png'),
      title: '不止于思',
      subscription: '创新本身就是魔力，如果你在思考“未来”，答案就在我们这里。',
    },
  ],
]

export const applyDirectionList = [
  {
    defaultImgSrc: require('@/assets/image/homepage/data-acquisition-normal.png'),
    activeImgSrc: require('@/assets/image/homepage/data-acquisition-active.png'),
    video: require('@/assets/video/data1.webm'),
    title: '数据采集/管理',
    detail: [
      '多种数据采集方式，无碍对接客户系统。',
      '自动提取有效数据，避免人工操作错误。',
      '丰富数据提取接口，高效完整数据汇集。',
    ],
    active: true,
    detailSrc: require('@/assets/image/homepage/data-acquisition-animate.png'),
  },
  {
    defaultImgSrc: require('@/assets/image/homepage/data-governance-normal.png'),
    activeImgSrc: require('@/assets/image/homepage/data-governance-active.png'),
    video: require('@/assets/video/data2.webm'),
    title: '数据治理',
    detail: [
      '提高数据质量，挖掘数据隐藏价值。',
      '发现数据异常，加快业务响应速度。',
      '建立数据标准，降低开发利用难度。',
    ],
    active: false,
    detailSrc: require('@/assets/image/homepage/data-governance-animate.png'),
  },
  {
    defaultImgSrc: require('@/assets/image/homepage/data-storage-normal.png'),
    activeImgSrc: require('@/assets/image/homepage/data-storage-active.png'),
    video: require('@/assets/video/data3.webm'),
    title: '数据存储',
    detail: [
      '海量数据检索，支撑企业决策制定。',
      '优化存储成本，提高报表生成性能。',
      '防止数据泄露，维护用户数据安全。',
    ],
    active: false,
    detailSrc: require('@/assets/image/homepage/data-storage-animate.png'),
  },
  {
    defaultImgSrc: require('@/assets/image/homepage/data-twin-normal.png'),
    activeImgSrc: require('@/assets/image/homepage/data-twin-active.png'),
    video: require('@/assets/video/data4.webm'),
    title: '数据应用/数字孪生',
    detail: [
      '深耕大数据各环节，覆盖各行应用场景。',
      '管理全周期可视化，功能尽在“一屏”中。',
      '掌握未来管理模式，驱动运营业务发展。',
    ],
    active: false,
    detailSrc: require('@/assets/image/homepage/data-twin-animate.png'),
  },
]

export const partnersList = [
  {
    activeImgSrc: require('@/assets/image/common/sqjt-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/sqjt.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/hw-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/hw.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/dqtl-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/dqtl.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/zgdx-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/zgdx.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/zglt-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/zglt.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/hebyh-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/hebyh.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/sdjc-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/sdjc.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/gaj-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/gaj.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/wxyg-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/wxyg.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/zgyl-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/zgyl.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/zgyz-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/zgyz.png'),
    active: false,
  },
  {
    activeImgSrc: require('@/assets/image/common/wumq-active.png'),
    defaultImgSrc: require('@/assets/image/homepage/wumq.png'),
    active: false,
  },
]
export const developBottomArr = [30, 50, 70, 90, 126, 106, 162]
export const developLeftArr = [65, 226, 387, 548, 709, 870, 1031]
export const developList = [
  {
    date: '2017年',
    title: '上海市公安局黄浦分局',
    desc: '大客流防控管理预案系统',
    bottom: 30,
  },
  {
    date: '2017年',
    title: '上海市公安局静安分局',
    desc: '重点目标立体防护系统',
    bottom: 50,
  },
  {
    date: '2018年',
    title: '上海市公安局崇明分局',
    desc: '瀛洲智眼安防系统',
    bottom: 70,
  },
  {
    date: '2018年',
    title: '首届进口博览会',
    desc: '指挥中心社会面态势系统',
    bottom: 90,
  },
  {
    date: '2018年',
    title: '江苏省交通厅',
    desc: '智慧交通运输态势感知管理系统',
    bottom: 126,
  },
  {
    date: '2018年',
    title: '太原铁路局',
    desc: '重载铁路救援指挥系统',
    bottom: 106,
  },
  {
    date: '2018年',
    title: '中国邮政储蓄银行',
    desc: '数据中心3D可视化管理系统',
    bottom: 162,
  },
  {
    date: '2018年',
    title: '首都机场集团',
    desc: '数据中心3D可视化管理系统',
    bottom: 30,
  },
  {
    date: '2019年',
    title: '上海市公安局',
    desc: '智慧中心常态指挥可视化系统',
    bottom: 30,
  },
  {
    date: '2019年',
    title: '上汽集团',
    desc: '联网人机交互系统',
    bottom: 30,
  },
  {
    date: '2019年',
    title: '中国品牌日',
    desc: '重点目标立体防护系统',
    bottom: 30,
  },
  {
    date: '2019年',
    title: '西安武警部队某部',
    desc: '虚拟现实实战模拟系统',
    bottom: 30,
  },
  {
    date: '2019年',
    title: '中国电信集团',
    desc: '梦想校园运营管理平台',
    bottom: 30,
  },
  {
    date: '2020年',
    title: '乌鲁木齐铁路局',
    desc: '数字化汛情预警及应急救援管理平台',
    bottom: 30,
  },
]

export interface ICtrlBtn {
  key: Edirection
  status: EStatus
  normal: string
  active: string
  disabled: string
}

export const developCtrlBtn = [
  {
    key: Edirection.left,
    status: EStatus.disabled,
    normal: require('@/assets/image/common/left-arrow-normal.png'),
    active: require('@/assets/image/common/left-arrow-active.png'),
    disabled: require('@/assets/image/common/left-arrow-no.png'),
  },
  {
    key: Edirection.right,
    status: EStatus.normal,
    normal: require('@/assets/image/common/right-arrow-normal.png'),
    active: require('@/assets/image/common/right-arrow-hover.png'),
    disabled: require('@/assets/image/common/right-arrow-no.png'),
  },
]

export const BannerList = [
  {
    fullImg: require('@/assets/image/homepage/banner1.jpg'),
  },
  {
    fullImg: require('@/assets/image/homepage/banner2_1.png'),
  },
  {
    fullImg: require('@/assets/image/homepage/banner3.png'),
  },
]
