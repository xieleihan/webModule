
const indicatorTypes = {
  normal : 0,
  worm : 1 ,
  wormThin : 2 ,
  wormUnderground : 3 ,
  wormThinUnderground : 4 ,
  expand : 5 ,
  jump : 6 ,
  jumpWithOffset : 7 ,
  scroll : 8 ,
  scrollFixedCenter : 9 ,
  slide : 10 ,
  slideUnderground : 11,
  scale : 12 ,
  swap : 13 ,
  swapYRotation : 14 ,
  color : 15 ,
}

const types = Object.keys(indicatorTypes)

const indicatorAlignments = {
  topLeft: [-1.0, -1.0],
  topCenter: [0.0, -1.0],
  topRight: [1.0, -1.0],
  centerLeft: [-1.0, 0.0],
  center: [0.0, 0.0],
  centerRight: [1.0, 0.0],
  bottomLeft: [-1.0, 1.0],
  bottomCenter: [0.0, 1.0],
  bottomRight: [1.0, 1.0]
}

const alignments = Object.keys(indicatorAlignments)

const dotColors = [
  {
    id: 0,
    name: 'default',
    dotColor: 'rgba(0, 0, 0, .3)',
    dotActiveColor: '#000000'
  },
  {
    id: 1,
    name: 'custom',
    dotColor: '#D2691E',
    dotActiveColor: '#8A2BE2'
  }
]

const offsets = [
  {
    id: 0,
    name: 'default',
    value: [0, 0],
  },

  {
    id: 0,
    name: 'custom',
    value: [0, 30],
  }
]

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    multiItems: 1,

    types,
    typeValue: types[9],
    dotColors,
    dotColorValue: 1,
    offsets,
    offsetValue: 1,
    indicatorAlignments,
    alignments,
    alignmentValue: alignments[7],
    margin: 10,
    spacing: 4,
    radius: 4,
    width: 8,
    height: 8,
  },

  add(e) {
    const prop = e.currentTarget.dataset.prop
    const value = this.data[prop]
    const opt = {}
    opt[prop] = value + 1
    console.info('@@@ add ', opt)
    this.setData(opt)
  },

  minus(e) {
    const prop = e.currentTarget.dataset.prop
    const value = this.data[prop]
    const opt = {}
    opt[prop] = value - 1
    console.info('@@@ add ', opt)
    this.setData(opt)
  },

  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    console.info('@@@ changeProperty ', propertyName)
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changeCircular: function (e) {
    this.setData({
      circular: !this.data.circular
    })
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  chooseDotColor(e) {
    const idx = e.currentTarget.dataset.idx
    this.setData({
      dotColorValue: parseInt(idx)
    })
  },
  chooseOffset(e) {
    const idx = e.currentTarget.dataset.idx
    this.setData({
      offsetValue: parseInt(idx)
    })
  },
  changeDuration: function(e) {
    const duration = this.data.duration === 1000 ? 500 : 1000
    this.setData({
      duration
    })
  },
  changeInterval: function(e) {
    const interval = this.data.interval === 2000 ? 1000 : 2000
    this.setData({
      interval
    })
  },
  changeMultiItems: function(e) {
    const multiItems = this.data.multiItems === 1 ? 2: 1
    this.setData({
      multiItems
    })
  },
  pickType(e) {
    const index = e.detail.value
    this.setData({
      typeValue: types[index]
    })
  },
  pickAlignment(e) {
    const index = e.detail.value
    this.setData({
      alignmentValue: alignments[index]
    })
  },
  onChange(e) {
    console.info('@@@ onchange ', e.detail)
  },
  onAnimationfinish(e) {
    console.info('@@@ onAnimationfinish ', e.detail)
  },
  onscrollstart(e) {
    'worklet'
    console.info('@@@ onscrollstart ', JSON.stringify(e.detail))
  },
  onscrollend(e) {
    'worklet'
    console.info('@@@ onscrollend ', JSON.stringify(e.detail))
  }
})
