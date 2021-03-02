export interface IAnchor {
  title: string
  link: string
}

export interface IBreadcrumb {
  key: string
  title: string
  route?: string
}

export interface ICommonMenu {
  id: string
  name: string
  title: string
  children: ICommonMenu[]
}
