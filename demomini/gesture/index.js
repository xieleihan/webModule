const { shared } = wx.worklet

Page({
  data: {
    current: 0,
    scrollWithAnimation: true,
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3', 'demo-text-4'],
    indicatorDots: true,
    vertical: true,
    autoplay: false,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    multiItems: 1,
    enabled: true,
    layoutType: 'transformer'
  },

  onLoad() {
    this.enabledScroll = shared(true)
    this.offset = shared(0)
    this.applyAnimatedStyle('.box', () => {
      'worklet'
      return {
        transform: `translateX(${this.offset.value}px)`
      }
    })
  },

  toggleLayoutType() {
    this.setData({
      layoutType: this.data.layoutType === 'transformer' ? 'stackLeft' : 'transformer'
    })
  },

  toggleSwiper() {
    this.setData({
      enabled: !this.data.enabled
    })
    this.enabledScroll.value = this.data.enabled
  },

  handleOuterDrag(e) {
    'worklet'
    // console.log('@@@ handleOuterDrag ', e.state)
    const oldValue = this.offset.value
    let newValue = oldValue + e.deltaY
    if (newValue > 300) {
      newValue = 300
    } else if (newValue < 0) {
      newValue = 0
    }
    this.offset.value = newValue
  },

  handlerInnerDrag(e) {
    'worklet'
    // console.log('@@@ handlerInnerDrag ', e.state)
  },

  shouldResponse() {
    'worklet'
    return this.enabledScroll.value
  },
})
