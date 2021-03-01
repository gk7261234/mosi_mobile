import { IMenu } from '@core/base-modules/domain/menu-domian/entity/MenuInfoDto'
import { ProcessEnv } from '@core/base-modules/constans/enum'
export const MenuSiderListCn: IMenu = {
  MenuExtra: {
    mode: 'horizontal',
    accordion: true,
  },
  MenuItemList: [
    // {
    //   name: "产品体系",
    //   path: "/prouct-system",
    //   meta: {
    //     title: "产品体系",
    //     processEnv: ProcessEnv.all
    //   },
    //   children: []
    // },
    // {
    //   name: "解决方案",
    //   path: "/",
    //   meta: {
    //     title: "解决方案",
    //     processEnv: ProcessEnv.all
    //   },
    //   children: []
    // },
    {
      name: '成功案例',
      path: '/success-stories',
      meta: {
        title: '成功案例',
        processEnv: ProcessEnv.all,
      },
      children: [],
    },
    {
      name: '关于我们',
      path: '/about-us',
      meta: {
        title: '关于我们',
        processEnv: ProcessEnv.all,
      },
      children: [],
    },
    {
      name: '加入我们',
      path: '/join-us',
      meta: {
        title: '加入我们',
        processEnv: ProcessEnv.all,
      },
      children: [],
    },
  ],
}

// export const MenuSiderListUs: IMenu = {
//   MenuExtra: {
//     mode: "horizontal",
//     accordion: true
//   },
//   MenuItemList: [
//     {
//       name: "homepage",
//       path: "/",
//       meta: {
//         title: "homepage",
//         processEnv: ProcessEnv.all
//       },
//       children: []
//     },
//     {
//       name: "aboutUs",
//       path: "/aboutUs",
//       meta: {
//         title: "aboutUs",
//         processEnv: ProcessEnv.all
//       },
//       children: []
//     },
//     {
//       name: "game Studio",
//       path: "/game",
//       meta: {
//         title: "GAME STUDIO",
//         processEnv: ProcessEnv.all
//       },
//       children: []
//     },
//     {
//       name: "animation Studio",
//       path: "/animation",
//       meta: {
//         title: "ANIMATION STUDIO",
//         processEnv: ProcessEnv.all
//       },
//       children: []
//     },
//     {
//       name: "news",
//       path: "/news",
//       meta: {
//         title: "news",
//         processEnv: ProcessEnv.all
//       },
//       children: []
//     },
//     {
//       name: "join",
//       path: "/join",
//       meta: {
//         title: "join",
//         processEnv: ProcessEnv.all
//       },
//       children: []
//     },
//     {
//       name: "contact",
//       path: "/contact",
//       meta: {
//         title: "contact",
//         processEnv: ProcessEnv.all
//       },
//       children: []
//     }
//   ]
// };
