export const dataAcquisitionArr = [
  {
    title: '产品架构',
    link: '#architecture',
  },
  {
    title: '产品功能',
    link: '#function',
  },
  {
    title: '产品优势',
    link: '#advantages',
  },
  {
    title: '应用场景',
    link: '#scene',
  },
]

export const featuresArr = [
  {
    title: '可视化ETL设计',
    desc:
      '图形化的设计ETL全流程：从数据的清洗、格式和内容的处理和转换，到数据的分级分拣，再到加载进数据仓库，均节点化、流程化。',
    img: require('@/assets/image/productSystem/dataAcquisition/etl-icon.png'),
  },
  {
    title: '可视化任务调度',
    desc:
      '图形化展示任务执行日志、任务运行情况变化曲线及作业执行状态与成功率；支持从多角度 多维度对任务进行排序与监控。',
    img: require('@/assets/image/productSystem/dataAcquisition/task-icon.png'),
  },
  {
    title: '高自由度预警机制',
    desc:
      '自由定义制定任务的报警规则、报警渠道与报警信息接收者；支持根据需要控制告警规则的启用与关闭。',
    img: require('@/assets/image/productSystem/dataAcquisition/alarm-icon.png'),
  },
]

export const advantagesArr = [
  {
    title: '复杂异构数据源',
    desc:
      '在企业信息化建设过程中，由于各业务系统建设和实施数据管理系统受阶段性、技术性以及其它经济和人为因素等因素影响，导致企业在发展过程中积累了大量采用不同存储方式的业务数据。MOSI自主采集汇总平台可以快速对这些“孤岛”进行串联。',
    img: require('@/assets/image/productSystem/dataAcquisition/advantage-data-icon.png'),
  },
  {
    title: '实时性传输',
    desc:
      '有些业务场景下需要看一些实时数据，比如商品的访问量，用户登陆情况，实时交易额等。这些数据中有些从数据库中查询不到（如：商品访问，用户登陆），有些数据库有但是统计慢（如：实时交易量，订单数等），MOSI自主采集汇总平台可以将这些数据进行实时统计。',
    img: require('@/assets/image/productSystem/dataAcquisition/advantage-realtime-icon.png'),
  },
  {
    title: '兼容大数据技术栈',
    desc:
      '历经多年的发展，整套大数据技术栈体系中，每个节点、中间件、系统都已有了多种技术实 现方案与成品。MOSI自主采集汇总平台主要针对数据采集阶段所遇到的问题，整个系统通过 API/gRPC方式进行数据传输，保证了各系统间的高兼容性。',
    img: require('@/assets/image/productSystem/dataAcquisition/advantage-technology-icon.png'),
  },
]

export const applicationScenarioList = [
  {
    defaultImg: require('@/assets/image/productSystem/dataAcquisition/scene-datacenter.png'),
    activeImg: require('@/assets/image/productSystem/dataAcquisition/scene-data-center-selected.png'),
    text: '搭建数据中台',
  },
  {
    defaultImg: require('@/assets/image/productSystem/dataAcquisition/scene-bigdata-app-defaultt.png'),
    activeImg: require('@/assets/image/productSystem/dataAcquisition/scene-bigdataapp.png'),
    text: '开发大数据应用',
  },
]
