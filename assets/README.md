# Assets

把首页开场视频放在这里，并命名为：

```text
zhangjiajie-intro.mp4
```

建议规格：

- 时长：12-20 秒
- 画面：张家界峰林、云海、天门山、峡谷、玻璃桥等大气镜头
- 比例：16:9 或 9:16 都可以，网页会自动裁切铺满屏幕
- 大小：建议压缩到 20MB 以内，方便游客快速加载

如果使用其他文件名，请在 `site-config.js` 里修改：

```js
introVideo: {
  src: "assets/your-video-name.mp4"
}
```
