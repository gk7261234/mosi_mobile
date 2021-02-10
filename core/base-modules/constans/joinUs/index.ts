import { Guid } from 'guid-typescript'

export interface IWorkType {
  category: string
  detail: IWorkDetail[]
}

export interface IWorkDetail {
  id: string
  name: string
}

export interface IWorkDetailInfo {
  jobName: string
  jobDuty: string[]
  qualifications: string[]
  open: boolean
}

export const workTypeList: IWorkType[] = [
  {
    category: '职位类别',
    detail: [
      {
        name: '技术研发类',
        id: Guid.create().toString(),
      },
      {
        name: '市场类',
        id: Guid.create().toString(),
      },
      {
        name: '产品类',
        id: Guid.create().toString(),
      },
      {
        name: '设计类',
        id: Guid.create().toString(),
      },
      {
        name: '职能类',
        id: Guid.create().toString(),
      },
      {
        name: '销售类',
        id: Guid.create().toString(),
      },
    ],
  },
  {
    category: '工作地点',
    detail: [
      {
        name: '上海',
        id: Guid.create().toString(),
      },
    ],
  },
]

export const workDeatil: IWorkDetailInfo[] = [
  {
    open: true,
    jobName: 'UE4开发工程师',
    jobDuty: [
      '1、根据需求完成UE4项目开发，有很强的逻辑思维和独立解决问题的能力',
      '2、使用UE4进行核心功能模块开发，框架搭建，算法编写等工作',
      '3、精通UE4引擎中的功能模块，精通C++以及蓝图，有技术攻关能力',
      '4、对渲染和物理引擎有很深入的了解和研究',
      '5、扎实图形学和3D数学能力',
      '6、了解服务器端制作流程和相关代码',
    ],
    qualifications: [
      '1、具有UE4引擎游戏开发经验优先',
      '2、数学基础扎实，逻辑思维能力突出，具备良好的数据结构及算法基础',
      '3、熟练掌握3D图形学原理',
      '4、具有较强的学习能力、解决问题能力',
    ],
  },
  {
    open: false,
    jobName: '技术美术-TA',
    jobDuty: [],
    qualifications: [],
  },
  {
    open: false,
    jobName: '产品经理',
    jobDuty: [],
    qualifications: [],
  },
  {
    open: false,
    jobName: '前端开发工程师',
    jobDuty: [],
    qualifications: [],
  },
  {
    open: false,
    jobName: '售前工程师',
    jobDuty: [],
    qualifications: [],
  },
  {
    open: false,
    jobName: 'UI设计师',
    jobDuty: [],
    qualifications: [],
  },
  {
    open: false,
    jobName: 'C++开发',
    jobDuty: [],
    qualifications: [],
  },
  {
    open: false,
    jobName: '大客户销售',
    jobDuty: [],
    qualifications: [],
  },
  {
    open: false,
    jobName: 'GIS软工程师',
    jobDuty: [],
    qualifications: [],
  },
]
