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
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				images: [],
			}
		},
		mounted() {
			this.generateRandomImages();
		},
		methods: {
			generateRandomImages() {
				const baseUrl = 'https://picsum.photos/1920/1080'; // 替换为你的基础URL
				for (let i = 0; i < 6; i++) {
					const randomNum = Math.floor(Math.random() * 100); // 生成随机数
					this.images.push(`${baseUrl}?${randomNum}`);
				}
			},
		}

	}
</script>

<style>
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.uni-margin-wrap .swiper {
		height: 300rpx;
	}

	.uni-margin-wrap .swiper .swiper-item {
		display: block;
		width: 100dvw;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.uni-margin-wrap .swiper .swiper-item image {
		width: 100%;
		height: 100%;
	}
</style>