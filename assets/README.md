# Assets

把首页开场视频放在这里，并命名为：

```text
zhangjiajie-intro.mp4
```

建议准备三套视频，网站会自动按设备选择：

```text
zhangjiajie-intro-desktop.mp4
zhangjiajie-intro-mobile-portrait.mp4
zhangjiajie-intro-mobile-landscape.mp4
```

如果只上传 `zhangjiajie-intro.mp4`，所有设备都会回退使用它。

建议规格：

- 时长：12-20 秒
- 画面：张家界峰林、云海、天门山、峡谷、玻璃桥等大气镜头
- 比例：16:9 或 9:16 都可以，网页会自动裁切铺满屏幕
- 大小：建议压缩到 20MB 以内，方便游客快速加载
- 电脑横屏版：建议 1920x1080，12-20MB
- 手机竖屏版：建议 720x1280 或 1080x1920，6-10MB
- 手机横屏版：建议 1280x720，6-10MB
- 编码：H.264/AAC，并加 `faststart`

如果使用其他文件名，请在 `site-config.js` 里修改：

```js
introVideo: {
  src: "assets/your-video-name.mp4",
  desktopLandscapeSrc: "assets/your-desktop-video-name.mp4",
  mobilePortraitSrc: "assets/your-mobile-portrait-video-name.mp4",
  mobileLandscapeSrc: "assets/your-mobile-landscape-video-name.mp4"
}
```
