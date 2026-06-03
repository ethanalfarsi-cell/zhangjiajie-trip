# Assets

把首页开场视频放在这里，并命名为：

```text
zhangjiajie-intro.mp4
```

手机端建议再放一个轻量版，并命名为：

```text
zhangjiajie-intro-mobile.mp4
```

建议规格：

- 时长：12-20 秒
- 画面：张家界峰林、云海、天门山、峡谷、玻璃桥等大气镜头
- 比例：16:9 或 9:16 都可以，网页会自动裁切铺满屏幕
- 大小：建议压缩到 20MB 以内，方便游客快速加载
- 手机版：建议 720p、6-10MB、H.264/AAC，并加 `faststart`

如果使用其他文件名，请在 `site-config.js` 里修改：

```js
introVideo: {
  src: "assets/your-video-name.mp4",
  mobileSrc: "assets/your-mobile-video-name.mp4"
}
```
