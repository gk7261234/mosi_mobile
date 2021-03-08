// 移動方向
export enum Edirection {
  left,
  right,
  top,
  bottom,
  leftTop,
  leftBottom,
  rightTop,
  rightBottom,
}

export enum EUnit {
  px,
  vw,
  vh,
}
export interface IDirection {
  direction: Edirection // 方向
  distance: number // 带单位
}
export class Direction implements IDirection {
  direction: Edirection = Edirection.left
  distance: number = -1
}

export interface IInputBase {
  displayHorizontalCount: number[]
  displayVaticalCount: number[]
  selector: string
  nowIndex?: number
  wUnit: EUnit
  hUnit: EUnit
}
export default class Translate {
  private static inst: Translate
  public static Inst(): Translate {
    if (typeof this.inst === 'undefined') {
      this.inst = new Translate()
    }
    return this.inst
  }

  // 移動的信息
  private direction: IDirection = new Direction()
  // 元素集合
  private htmlArr: any
  // 显示元素的位置
  private displayHorizontalCount: number[] = []
  private displayVaticalCount: number[] = []
  // 当前索引的元素，默认最左边元素
  private nowIndex: number = 0
  private wUnit: string = EUnit[EUnit.vw]
  private hUnit: string = EUnit[EUnit.vh]
  init(_base: IInputBase) {
    this.initUnit(_base.wUnit, _base.hUnit)
    this.initCount(
      _base.displayHorizontalCount,
      _base.displayVaticalCount,
      _base.nowIndex
    )
    _base.selector && this.getAllSelector(_base.selector)
  }

  /**
   *
   * @param _direction 方向
   */
  translateInst(_direction: Edirection, add: boolean): boolean {
    if (typeof this.htmlArr !== 'undefined') {
      let updateHArr: HTMLElement[] = []
      switch (_direction) {
        case Edirection.left:
          break
        case Edirection.bottom:
          break
        case Edirection.leftBottom:
          this.leftMove()
          updateHArr = this.collectToLeft()
          for (let index = 0; index < updateHArr.length; index++) {
            const hEement = this.displayHorizontalCount[index]
            const vElement = this.displayVaticalCount[index]
            const element = updateHArr[index]
            element.style.left = `${hEement}${this.wUnit}`
            element.style.bottom = `${vElement}${this.hUnit}`
          }
          break
        case Edirection.rightBottom:
          this.rightMove()
          updateHArr = this.collectToRight()
          for (let index = 0; index < updateHArr.length; index++) {
            const hEement = this.displayHorizontalCount[index]
            const vElement = this.displayVaticalCount[index]
            const element = updateHArr[index]
            element.style.left = `${hEement}${this.wUnit}`
            element.style.bottom = `${vElement}${this.hUnit}`
          }
          break
        default:
          break
      }
      add ? (this.nowIndex += 1) : (this.nowIndex -= 1)
      return this.nowIndex <= this.htmlArr.length - 8 && this.nowIndex >= 1
    }
    return true
  }

  private leftMove() {
    if (typeof this.htmlArr !== 'undefined') {
      for (let index = 0; index < this.htmlArr.length; index++) {
        const element = this.htmlArr[index]
        if (index <= this.nowIndex) {
          element.style.left = `${element.offsetLeft - 500}px`
        }
      }
    }
  }

  private rightMove() {
    if (typeof this.htmlArr !== 'undefined') {
      for (let index = 0; index < this.htmlArr.length; index++) {
        const element = this.htmlArr[index]
        if (index > this.nowIndex + this.displayHorizontalCount.length - 2) {
          element.style.left = `${element.offsetLeft + 500}px`
        }
      }
    }
  }

  // 向左走
  private collectToLeft(): HTMLElement[] {
    const updateArr: HTMLElement[] = []
    if (typeof this.htmlArr !== 'undefined') {
      for (let index = 0; index < this.htmlArr.length; index++) {
        const element = this.htmlArr[index]
        if (
          index > this.nowIndex &&
          index <= this.nowIndex + this.displayHorizontalCount.length
        ) {
          !updateArr.includes(element) && updateArr.push(element)
        }
      }
    }
    return updateArr
  }

  // 向右走
  private collectToRight(): HTMLElement[] {
    const updateArr: HTMLElement[] = []
    if (typeof this.htmlArr !== 'undefined') {
      for (let index = 0; index < this.htmlArr.length; index++) {
        const element = this.htmlArr[index]
        if (
          index >= this.nowIndex - 1 &&
          index <= this.nowIndex + this.displayHorizontalCount.length - 2
        ) {
          // console.log(index);
          !updateArr.includes(element) && updateArr.push(element)
        }
      }
    }
    return updateArr
  }

  // 初始化信息

  private initCount(
    _disHplayCount: number[],
    _displayVplayCount: number[],
    _nowIndex?: number
  ) {
    this.displayHorizontalCount = _disHplayCount
    this.displayVaticalCount = _displayVplayCount
    typeof _nowIndex !== 'undefined' && (this.nowIndex = _nowIndex)
  }

  private initUnit(_wUnit: EUnit, _hUnit: EUnit) {
    this.wUnit = EUnit[_wUnit]
    this.hUnit = EUnit[_hUnit]
  }

  private getAllSelector(_selector: string) {
    const htmlArr = document.querySelectorAll(_selector)
    this.htmlArr = htmlArr
  }
}
