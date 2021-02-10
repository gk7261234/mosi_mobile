import { ProcessEnv, MenuMode } from '@core/base-modules/constans/enum'
export interface IMenuStuff {
  mode: string // 菜单类型
  accordion: boolean // 是否开启手风琴
  theme?: string // 菜单主题
}
export enum MenuTypeEnum {
  children = 1,
  tab = 2,
}

export interface IMetaBase {
  title: string
  processEnv: number
}

export interface IMenuBase {
  name: string
  path: string
  meta: IMetaBase
  children?: IMenuBase[]
}
// 左侧菜单栏
export interface IMenuInfo {
  // 菜单ID
  Id: string
  // 菜单名称
  name: string
  // 父级ID
  parentid: string
  // 菜单图标
  icon: string
  // 路由地址
  path: string
  // 排序字段
  sort: number
  // 基本信息
  meta: IMetaBase
  component: string
  isShow: boolean
  redirect: string
  depth: number
  componentName: string
  // 子级
  children: IMenuInfo[]
  // tab页
  tabs: IMenuInfo[]
}

export interface IMenu {
  MenuExtra: IMenuStuff
  MenuItemList: IMenuBase[]
}

export class MetaBase implements IMetaBase {
  title = ''
  processEnv: number = ProcessEnv.all
}

export class MenuBase implements IMenuBase {
  name = ''
  path = ''
  meta: IMetaBase = new MetaBase()
  children?: IMenuBase[]
}
export class MenuInfo implements IMenuInfo {
  Id = ''
  name = ''
  parentid = ''
  icon = ''
  path = ''
  sort = 0
  redirect = ''
  depth = 0
  meta: IMetaBase = new MetaBase()
  component = ''
  isShow = true
  componentName = ''
  children: IMenuInfo[] = new Array<IMenuInfo>()
  tabs: IMenuInfo[] = new Array<IMenuInfo>()
}
export class MenuStuff implements IMenuStuff {
  mode: string = MenuMode.horizontal
  accordion = true
  theme?: string
  constructor(_istuff?: MenuStuff) {
    if (typeof _istuff !== 'undefined') {
      this.mode = _istuff.mode
      this.theme = _istuff.theme
      this.accordion = _istuff.accordion
    }
  }
}
export class MenuModal implements IMenu {
  MenuExtra: MenuStuff = new MenuStuff()
  MenuItemList: IMenuBase[] = new Array<MenuBase>()
  constructor(_menuextra: IMenuStuff) {
    this.MenuExtra.mode = _menuextra.mode
    this.MenuExtra.accordion = _menuextra.accordion
    this.MenuExtra.theme = _menuextra.theme
  }
}
