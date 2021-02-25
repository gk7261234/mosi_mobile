export interface ICardBase {
  title: string
  img: string
}

export interface IToolsDesc extends ICardBase {
  path: string
}
export interface IMessage extends ICardBase {
  hoverImg: string
  disabled: boolean
  list: IMessageList[]
}
export interface IMessageList {
  name: string
  path: string
  desc: string
  img: string
  icon: string
  // _name?: string;
}

export const systemBigDataPlatform: IMessage[] = [
  {
    title: '数据采集/管理平台',
    img: require('@/assets/image/productSystem/platform-data-acquisition.png'),
    disabled: false,
    hoverImg: require('@/assets/image/productSystem/platform-data-acquisition-active.png'),
    list: [
      {
        // _name: 'solution-general',
        name: '自主采集汇总平台',
        path: '/data-acquisition',
        desc:
          '自主采集汇总平台，全流程利用ETL技术。能面对各种采集环境，简易系统对接。有效解决运营、管理因传统系统结构造成的“数据孤岛”问题。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img1.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-acquisition-icon1.png'),
      },
      {
        name: '数字工厂系统',
        path: '',
        desc:
          '为海量结构化数据提供高可用的数据处理服务，提供大数据实时分析洞察能力，帮助企业透析业务数据，实现大数据应用落地升级。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img2.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-acquisition-icon2.png'),
      },
      {
        name: '数据建模系统',
        path: '',
        desc:
          '从业务的最终目的出发，根据不同业务类型梳理业务模块，打通数据之间的关系，找到关键性的数据指标。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img3.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-acquisition-icon3.png'),
      },
    ],
  },
  {
    title: '数据治理平台',
    img: require('@/assets/image/productSystem/platform-data-governance.png'),
    disabled: true,
    hoverImg: require('@/assets/image/productSystem/platform-data-governance-active.png'),
    list: [
      {
        name: '元数据管理',
        path: '',
        desc:
          '通过对企业所有元数据进行整体规划、抽象描述，进而设计出所需元模型。从而可以自动采集企业元数据，全面梳理企业信息资产。让不同类型数据之间的采集、传播、共享更加便捷。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img4.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-governance-icon1.png'),
      },
      {
        name: '主数据管理',
        path: '',
        desc:
          '整合现有纵向结构中的客户信息以及其他知识和深层次信息，创建和维护一个权威的、可靠的、可持续的、精确的、安全的数据环境，形成一个一致的主数据视图。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img5.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-governance-icon2.png'),
      },
      {
        name: '数据质量管理',
        path: '',
        desc:
          '对数据整个生命周期的每个阶段里可能引发的各类数据质量问题，进行识别、度量、监控、预警等一系列管理活动，并通过改善和提高组织的管理水平使得数据质量获得进一步提高。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img6.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-governance-icon3.png'),
      },
      {
        name: '数据标准管理',
        path: '',
        desc:
          '建立执行规范的数据应用标准，改善数据一致性差的问题，从根本上改善和提升各系统的数据质量，实现数据资源的有效共享，并为后续质量检查提供依据。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img7.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-governance-icon4.png'),
      },
      {
        name: '数据资产管理',
        path: '',
        desc:
          '采集、清洗、加工企业全量数据，汇总、统计、分析有价值的数据资源，提供数据资产地图，帮助管理者快速发现、清理冗余无效的不良资产。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img8.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-governance-icon5.png'),
      },
    ],
  },
  {
    title: '数据储存平台',
    img: require('@/assets/image/productSystem/platform-data-storage.png'),
    disabled: true,
    hoverImg: require('@/assets/image/productSystem/platform-data-storage-active.png'),
    list: [
      {
        name: '实时大数据演算平台',
        path: '',
        desc:
          '通过对于流计算技术来传输数据，更迅速、更完整地获取数据，更快、更充分地挖掘出数据价值，在各个行业的不同领域中发挥重要作用。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img9.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-storage-icon1.png'),
      },
      {
        name: '分析型分布式数据存储',
        path: '',
        desc:
          '提供PB级在线高并发即席查询的联机分析处理的MPP列存数据库，使得用户具备PB级别大数据集的在线多维查询能力，该平台适合有海量结构化数据存储、高并发查询、高吞吐即席查询、多维分析和实时查询需求的客户使用。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img10.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-storage-icon2.png'),
      },
    ],
  },
  {
    title: '数据应用/数字孪生平台',
    img: require('@/assets/image/productSystem/platform-data-twin.png'),
    disabled: true,
    hoverImg: require('@/assets/image/productSystem/platform-data-twin-active.png'),
    list: [
      {
        name: '可视化数据分析平台(VBI)',
        path: '',
        desc:
          '自研类MapD型的GPU数据库，帮助分析海量数据；产品提供灵活自由的流程建模工具，帮助企业数据工程师，快速构建适合企业自身的业务数据分析模型，分析企业数据，定位节点问题。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img11.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-twin-icon1.png'),
      },
      {
        name: '可视化数屏构建平台',
        path: '',
        desc:
          '提供可视化的工具帮助客户展示复杂的数据，帮助非专业的工程师通过图形化的界面轻松搭建专业水准的可视化应用。产品提供丰富的可视化模板，满足从会议展览、业务监控、风险预警到地理信息分析等多种业务、各个维度的可视化演示需求。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img12.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-twin-icon2.png'),
      },
      {
        name: '综合智慧+套件构建平台',
        path: '',
        desc:
          '利用数字孪生体将区域管理工作视角从2D升级为3D，集中整合包括BIM、GIS、CAD、IoT、ERP等数据，打通规划、设计、施工、招商、物业、运营的全周期场景，帮助客户完成数字化、智能化转型，提升管理效率。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img13.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-twin-icon3.png'),
      },
      {
        name: '数据挖掘平台',
        path: '',
        desc:
          '融合ETL可视化数据处理、数据可视化建模、指标可视化建模、数据触发式分析、多终端联动应用等功能，提供一体化全能型数据分析能力，为企业数字化转型建设保驾护航。',
        img: require('@/assets/image/productSystem/bigDataPlatform/pic/img14.png'),
        icon: require('@/assets/image/productSystem/bigDataPlatform/icons/data-twin-icon4.png'),
      },
    ],
  },
]

export const tools: IToolsDesc[] = [
  {
    title: '通用流程设计工具',
    img: require('@/assets/image/productSystem/general-process.png'),
    path: '',
  },
  {
    title: '通用表单设计工具',
    img: require('@/assets/image/productSystem/general-form.png'),
    path: '',
  },
  {
    title: '简易建筑构建器',
    img: require('@/assets/image/productSystem/easy-build.png'),
    path: '',
  },
]

export const VisualizationTools = [
  '通用流程设计工具',
  '通用表单设计工具',
  '简易建筑构建器',
  '',
]
