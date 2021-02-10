import { Guid } from 'guid-typescript'
import { IBreadcrumb, ICommonMenu } from '..'
export const solutionAchor = [
  {
    title: '现状分析',
    link: '#general',
  },
  {
    title: '方案概述',
    link: '#summarize',
  },
  {
    title: '应用价值',
    link: '#value',
  },
]

export const solutionBreadcrumbs: IBreadcrumb[] = [
  {
    key: 'homepage',
    title: '首页',
    route: '/',
  },
  {
    key: 'soluteCase',
    title: '解决方案',
    route: '/solute-case',
  },
]

export const leftMenu: ICommonMenu[] = [
  {
    id: Guid.create().toString(),
    name: '1',
    title: '通用方案',
    children: [
      {
        id: Guid.create().toString(),
        name: '1-1',
        title: '数据生命周期一站式服务（包容性采集渠道，自定义API）',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '1-2',
        title: '全局式可视化分析',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '1-3',
        title: '智能实时数据分析',
        children: [],
      },
    ],
  },
  {
    id: Guid.create().toString(),
    name: '2',
    title: '智慧公安',
    children: [
      {
        id: Guid.create().toString(),
        name: '2-1',
        title: '可视化态势感知系统',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '2-2',
        title: '场景立体防护系统',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '2-3',
        title: '警务中心综合智慧系统',
        children: [],
      },
    ],
  },
  {
    id: Guid.create().toString(),
    name: '3',
    title: '智慧医疗',
    children: [],
  },
  {
    id: Guid.create().toString(),
    name: '4',
    title: '智慧公安',
    children: [
      {
        id: Guid.create().toString(),
        name: '4-1',
        title: '可视化态势感知系统',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '4-2',
        title: '场景立体防护系统',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '4-3',
        title: '警务中心综合智慧系统',
        children: [],
      },
    ],
  },
  {
    id: Guid.create().toString(),
    name: '5',
    title: '智慧IDC运维',
    children: [
      {
        id: Guid.create().toString(),
        name: '5-1',
        title: 'IDC机房设计规划',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '5-2',
        title: 'IDC机房配电建设',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '5-3',
        title: 'IDC机房可视化管理',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '5-4',
        title: '魔思IDN智慧数据中心管理平台',
        children: [],
      },
    ],
  },
  {
    id: Guid.create().toString(),
    name: '6',
    title: '智慧城市',
    children: [
      {
        id: Guid.create().toString(),
        name: '6-1',
        title: 'D仿真还原技术',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '6-2',
        title: '公共安全监看系统',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '6-3',
        title: '道路拥堵监测分析',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '6-4',
        title: '交互式可视化管理分析',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '6-5',
        title: '大客流监看测算引擎',
        children: [],
      },
      {
        id: Guid.create().toString(),
        name: '6-6',
        title: '出入境分析管理',
        children: [],
      },
    ],
  },
]

export const situationAnalysisList = [
  {
    imgSrc: require('@/assets/image/solution/general/analysis-icon1.png'),
    desOne: '数据源结构复杂',
    desTwo: '内容琐碎、难以整理',
  },
  {
    imgSrc: require('@/assets/image/solution/general/analysis-icon2.png'),
    desOne: '对接传统多系统数据困难',
    desTwo: '',
  },
  {
    imgSrc: require('@/assets/image/solution/general/analysis-icon3.png'),
    desOne: '数据价值利用率低',
    desTwo: '',
  },
]

export const applyValueList = [
  {
    imgSrc: require('@/assets/image/solution/general/value-icon1.png'),
    title: '简化运营模式',
    text: '解决人力反复作业，缩短业务交付周期',
  },
  {
    imgSrc: require('@/assets/image/solution/general/value-icon2.png'),
    title: '提高数据利用',
    text: '扫除数据利用盲区，拓展运营思维',
  },
  {
    imgSrc: require('@/assets/image/solution/general/value-icon3.png'),
    title: '简易系统交互',
    text: '解决多部门，多级管理数据交流障碍',
  },
  {
    imgSrc: require('@/assets/image/solution/general/value-icon4.png'),
    title: '多维度可视化分析管理',
    text: '实时获取分析结果，交互操作深度下钻',
  },
  {
    imgSrc: require('@/assets/image/solution/general/value-icon5.png'),
    title: '在线实时查看',
    text: '应用平台使用便利，随时发现解决问题',
  },
]
