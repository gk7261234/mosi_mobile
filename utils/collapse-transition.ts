const transitionStyle = '0.3s height ease-in-out'

const tranFunction = {
  beforeEnter(el: any) {
    el.style.transition = transitionStyle
    if (!el.dataset) el.dataset = {}

    el.style.height = 0
  },

  enter(el: any) {
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
    } else {
      el.style.height = ''
    }
    el.style.overflow = 'hidden'
  },

  afterEnter(el: any) {
    el.style.transition = ''
    el.style.height = ''
  },

  beforeLeave(el: any) {
    if (!el.dataset) el.dataset = {}
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },

  leave(el: any) {
    if (el.scrollHeight !== 0) {
      el.style.transition = transitionStyle
      el.style.height = 0
    }
  },
  afterLeave(el: any) {
    el.style.transition = ''
    el.style.height = ''
  },
}

export default {
  name: 'CollapseTransition',
  functional: true,
  render(h: any, { children }: any) {
    const data = {
      on: tranFunction,
    }
    return h('transition', data, children)
  },
}
