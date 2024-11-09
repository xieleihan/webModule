Page({
  data: {
    current: 0,
    scrollWithAnimation: true,
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3', 'demo-text-4'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    multiItems: 1
  },
  changeScrollWithAnimation() {
    this.setData({
      scrollWithAnimation: !this.data.scrollWithAnimation
    })
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
  jump2() {
    this.setData({
      current: 2
    })
  },
  onChange(e) {
    this.setData({
      current: e.detail.current
    })
    console.info('@@@ onchange ', e.detail)
  },
  onTransition(e) {
    console.info('@@@ onTransition ', e.detail)
  },
  onAnimationfinish(e) {
    console.info('@@@ onAnimationfinish ', e.detail)
  },
  onscrollstart(e) {
    'worklet'
    console.info('@@@ onscrollstart ', JSON.stringify(e.detail))
  },
  onscrollupdate(e) {
    'worklet'
    console.info('@@@ onscrollupdate ', JSON.stringify(e.detail))
  },
  onscrollend(e) {
    'worklet'
    console.info('@@@ onscrollend ', JSON.stringify(e.detail))
  }
})
