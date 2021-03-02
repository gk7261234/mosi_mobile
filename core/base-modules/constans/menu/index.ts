import { IMenu } from '@core/base-modules/domain/menu-domian/entity/MenuInfoDto'
import { ProcessEnv } from '@core/base-modules/constans/enum'
export const MenuSiderListCn: IMenu = {
  MenuExtra: {
    mode: 'horizontal',
    accordion: true,
  },
  MenuItemList: [
    {
      name: '关于我们',
      title: 'about-us',
      path: '/about-us',
      meta: {
        title: '关于我们',
        processEnv: ProcessEnv.all,
      },
      children: [],
    },
    {
      name: '加入我们',
      title: 'join-us',
      path: '/join-us',
      meta: {
        title: '加入我们',
        processEnv: ProcessEnv.all,
      },
      children: [],
    },
  ],
}
