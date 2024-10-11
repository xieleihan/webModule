<template>
	<view class="uni-margin-wrap">
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<swiper-item v-for="(image, index) in images" :key="index">
				<view class="swiper-item">
					<image :src="image" class="swiper-image"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
	<view>
		<view class="title">
			<view class="time">
				{{nowTime}}
			</view>
			<view class="weather">
				<div class="left">
					<i :class="`qi-${iconnum}`"></i>
				</div>
				<div class="right">
					<div class="temp">{{temp}}℃</div>
					<div class="city">{{city}}</div>
				</div>
			</view>
		</view>
		<div class="inputBox">
			<input class="searchInput" type="text" placeholder="搜索看看吧" />
			<img class="searchIcon" src="../../static/icon/搜索.png" alt="" />
		</div>
		<section class="daily">每日日报</section>
		<ul class="container">
			<br />
			<li v-for="(item,index) in cardList" :key="index"
				:style="`background: url(${item.images[0]});background-repeat:no-repeat;background-size:cover`">
				<!-- <img :src="`${item.images[0]}`" alt="" /> -->
				<div class="mask" :style="`background: linear-gradient(transparent, ${setColor(item.image_hue)});`">
					<div class="cardTitle">{{item.title}}</div>
					<div class="hint">{{item.hint}}</div>
				</div>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 1500,
				images: [],
				nowTime: "",
				latitude: '22.27',
				longitude: '114.16',
				city: '香港',
				temp: 'NaN',
				iconnum: '',
				cardList: [],
			}
		},
		mounted() {
			this.generateRandomImages();
			this.getNowTime();
			setInterval(this.getNowTime, 1000); // 每秒更新时间
		},
		methods: {
			setColor(hex) {
				// 将颜色字符串去掉前面的 "0x"
				hex = hex.replace(/^0x/, '');
				// 如果长度不足 6 位，前面补足 0
				hex = hex.padStart(6, '0');
				// 加上 "#"
				hex = `#${hex}`;
				console.log(hex);
				return hex;
			},
			generateRandomImages() {
				const baseUrl = 'https://picsum.photos/3840/2160'; // 替换为你的基础URL
				for (let i = 0; i < 6; i++) {
					const randomNum = Math.floor(Math.random() * 100); // 生成随机数
					this.images.push(`${baseUrl}?${randomNum}`);
				}
			},
			getNowTime() {
				const now = new Date();
				this.nowTime = now.toLocaleString(); // 格式化日期和时间
			},
			getWeatherAndCity() {
				const hefengapi = '7d2051100a0a467386d0cafa66e3ecb9';

				// 请求城市信息
				uni.request({
					url: `https://geoapi.qweather.com/v2/city/lookup?key=${hefengapi}&location=${this.longitude},${this.latitude}`,
					method: 'GET',
					dataType: 'json',
					success: (res) => {
						if (res.data && res.data.location && res.data.location.length > 0) {
							// console.log(res.data)
							this.city = res.data.location[0].adm2;
						}
					},
					fail: (err) => {
						console.error("请求城市信息失败：", err);
					}
				});

				// 请求天气信息
				uni.request({
					url: `https://devapi.qweather.com/v7/weather/now?key=${hefengapi}&location=${this.longitude},${this.latitude}`,
					method: 'GET',
					dataType: 'json',
					success: (res) => {
						if (res.data && res.data.now) {
							this.temp = res.data.now.temp;
							this.iconnum = res.data.now.icon;
						}
					},
					fail: (err) => {
						console.error("请求天气信息失败：", err);
					}
				});
			}
		},
		beforeDestroy() {
			if (this.timer) {
				clearInterval(this.timer);
			}
		},
		created() {
			uni.request({
					url: 'https://ipapi.co/json/',
					method: 'GET',
					dataType: 'json',
					success: (res) => {
						// console.log(res.data)
						this.latitude = res.data.latitude;
						this.longitude = res.data.longitude;
						this.getWeatherAndCity();
					}
				}),
				uni.request({
					url: 'https://apis.netstart.cn/zhihudaily/stories/latest',
					method: 'GET',
					dataType: 'json',
					success: (res) => {
						// console.log(res)
						const length = res.data.stories.length;
						let arr = [];
						for (let i = 0; i < length; i++) {
							arr.push(res.data.stories[i])
							console.log(res.data.stories[i])
						}
						this.cardList = arr;
					}
				})
		}
	}
</script>


<style lang="less" scoped>
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.uni-margin-wrap .swiper {
		height: 400rpx;
	}

	.uni-margin-wrap .swiper .swiper-item {
		display: block;
		width: 100dvw;
		height: 400rpx;
		line-height: 400rpx;
		text-align: center;
	}

	.uni-margin-wrap .swiper .swiper-item image {
		width: 100%;
		height: 100%;
	}

	.inputBox {
		position: relative;

		.searchIcon {
			position: absolute;
			right: 50rpx;
			top: 50%;
			transform: translateY(-50%);
			width: 30rpx;
			height: 30rpx;
		}
	}

	.searchInput {
		display: block;
		border: none;
		outline: none;
		width: 85%;
		height: 80rpx;
		border: 1rpx solid #ccc;
		padding: 0 30rpx;
		margin: 0 auto;
		border-radius: 40rpx;
		margin-top: 30rpx;
	}

	.title {
		width: 90%;
		margin: 0 auto;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10rpx;

		.time {
			font-weight: bold;
			color: #ccc;
			font-size: 35rpx;
			display: flex;
			height: 100%;
			align-items: center;
		}

		.weather {
			height: 100%;
			display: flex;
			flex-direction: row;
			// width: 150rpx;

			i {
				font-size: 60rpx;
			}

			.left {
				margin-right: 25rpx;
			}

			.right {
				display: flex;
				flex-direction: column;

				.city {
					text-wrap: nowrap;
				}
			}

		}
	}

	.daily {
		width: 90%;
		margin: 0 auto;
		font-size: 40rpx;
		font-weight: bold;
		margin-top: 10rpx;
	}

	.container {
		border-top: 1px solid #ccc;
		padding: 0;
		width: 90%;
		margin: 0 auto;
		margin-top: 10rpx;
		height: 650rpx;
		overflow-y: scroll;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		list-style: none;
		scrollbar-width: none;
		// justify-content: space-between;

		// background-color: skyblue;
		li {
			width: 45%;
			height: 400rpx;
			border: 1px solid #ccc;
			margin-bottom: 20rpx;
			margin-top: 20rpx;
			margin-right: 11rpx;
			padding: 10rpx;
			display: flex;
			justify-content: space-evenly;
			flex-direction: column;
			position: relative;
			border-radius: 20rpx;
			overflow: hidden;

			.mask {
				width: 100%;
				height: 100%;
				position: absolute;
				bottom: 0%;
				left: 0%;
				display: flex;
				justify-content: end;
				flex-direction: column;
			}

			.cardTitle {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				margin-bottom: 20rpx;
				padding: 0 10rpx;
				mix-blend-mode: difference;
				color: white;
			}

			.hint {
				font-size: 20rpx;
				color: #ccc;
				text-align: right;
				margin-right: 10rpx;
				margin-bottom: 10rpx;
			}
		}
	}
</style>