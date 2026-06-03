# Zhangjiajie Trip Map App Prototype

这是一个张家界旅游引流 App 的静态原型，面向国际游客使用。

## 打开方式

直接双击 `index.html`，或在浏览器中打开：

```text
C:\Users\Administrator\Documents\AI短剧\index.html
```

## 当前功能

- 支持中文、英文、韩文、日文、法文、德文、西班牙文、俄文、阿拉伯文切换。
- 支持根据游客 IP 所在国家/地区推荐语言，并显示在语言选择栏上方；识别失败时默认使用英语。
- 支持游客选择旅行天数、旅行风格和服务需求。
- 支持点击地图点位或景点卡片，自由组合张家界路线。
- 支持推荐路线：经典首游、亲子轻松、深度延伸。
- 支持生成咨询信息，并引导游客联系 WhatsApp、微信、邮箱或服务团队。
- 支持 PWA：网站上线到 HTTPS 后，游客可以把网站安装到手机桌面，作为轻量 App 使用。
- 支持网站/App 同步：网站和 App 使用同一套文件，更新网站内容后，手机 App 会通过缓存刷新同步。
- 支持视频化首页：打开网站优先静音自动播放开场视频；如果浏览器拦截自动播放，则显示视频海报图和播放按钮。
- 支持国际游客体验图：展示全球游客在张家界的旅行氛围。
- 支持游客提交旅行视频：游客上传的视频进入待审核队列，审核通过后再公开展示。

## APP 与网站同步方案

当前版本采用 PWA 方案：

1. 网站端打开 `index.html`。
2. 手机端访问同一个网址后，可以安装到桌面，显示为 App。
3. `site-config.js` 作为统一配置文件，联系方式和同步提示在这里维护。
4. `sw.js` 作为离线缓存和更新脚本，网站更新后会刷新 App 缓存。
5. 后续如果接后台，网站和 App 都读取同一个 API，例如 `/api/routes`、`/api/spots`、`/api/leads`。

这比先分别开发网站、iOS、Android 成本更低，也方便快速引流测试。

## 后续开发建议

1. 接入真实地图：高德地图、Google Maps 或 Mapbox。
2. 接入后台：保存游客姓名、国家、人数、日期、路线和服务需求。
3. 接入翻译系统：将景点介绍和路线说明扩展为专业多语言文案。
4. 接入客服：WhatsApp、微信二维码、邮箱、电话、在线表单。
5. 封装移动端：先做 PWA，再按需要封装 iOS/Android。

## 需要替换的信息

- `site-config.js` 中的 `service@example.com` 替换为你的真实邮箱。
- `site-config.js` 中的 `whatsappNumber` 替换为你的 WhatsApp 号码，例如：

```text
8613800000000
```

- `index.html` 的联系区域可以加入微信二维码图片。
- 把首页开场视频放到 `assets/zhangjiajie-intro.mp4`。
- 把首页视频第一帧或海报图放到 `assets/zhangjiajie-intro-poster.png`。
- 把游客体验图片放到 `assets/traveler-group-wide.png` 和 `assets/traveler-selfie-square.png`。
- 建议准备三套首页视频：`assets/zhangjiajie-intro-desktop.mp4`、`assets/zhangjiajie-intro-mobile-portrait.mp4`、`assets/zhangjiajie-intro-mobile-landscape.mp4`。网站会根据电脑/手机和横屏/竖屏自动选择。

## 游客视频审核

当前静态版本已经有游客视频提交入口，但不会直接公开展示，避免产生违规内容风险。

正式上线建议这样接后台：

1. 视频文件上传到 Vercel Blob、阿里云 OSS、腾讯云 COS 或 S3。
2. 投稿信息保存到数据库，例如 Supabase、Neon、MongoDB 或 Airtable。
3. 后台管理页显示待审核视频。
4. 管理员点击通过后，视频才进入公开展示列表。
5. 未通过的视频保留在后台，不展示给游客。

`site-config.js` 里的 `moderation.endpoint` 是预留接口。后续有后台后，把接口地址填进去即可。

## 上线注意

PWA 安装和 Service Worker 同步需要 HTTPS 环境。也就是说：

- 本地双击 `index.html` 可以预览页面。
- 放到正式网站并启用 HTTPS 后，才会出现浏览器安装 App 的能力。
- IP 语言识别依赖在线接口，正式部署到 HTTPS 后体验更稳定；如果识别失败，默认显示英语。
- 更新 `site-config.js`、`app.js` 或 `styles.css` 后，重新发布到网站，用户再次打开 App 会同步更新。

## 手机视频不更新时

如果电脑能播放，手机不播放，先按这个顺序检查：

1. 直接在手机浏览器打开 `https://你的域名/assets/zhangjiajie-intro.mp4`，确认视频本身能播放。
2. 不要先用桌面图标打开 PWA，先用 Safari/Chrome 打开网站测试。
3. 如果手机之前安装过 App，删除桌面图标后重新添加到主屏幕。
4. 手机浏览器清理该网站缓存，或换一个无痕窗口测试。
5. 视频建议使用 MP4 / H.264 / AAC，控制在 10-20MB。

如果手机直链能播放但速度慢，说明路径没问题，主要是视频太大、码率太高或海外节点加载慢。建议：

- 电脑横屏版：`zhangjiajie-intro-desktop.mp4`，1920x1080，12-20MB。
- 手机竖屏版：`zhangjiajie-intro-mobile-portrait.mp4`，720x1280 或 1080x1920，6-10MB。
- 手机横屏版：`zhangjiajie-intro-mobile-landscape.mp4`，1280x720，6-10MB。
- 视频时长控制在 12-18 秒。
- 导出时开启 H.264/AAC 和 faststart。

浏览器通常不允许打开网页时自动播放带声音的视频。当前首页会优先尝试静音自动播放；如果手机或浏览器拦截，再退回“视频第一帧海报图 + 播放按钮”。

如果已经上传三套视频，请在 `site-config.js` 里填写：

```js
introVideo: {
  src: "assets/zhangjiajie-intro.mp4",
  desktopLandscapeSrc: "assets/zhangjiajie-intro-desktop.mp4",
  mobilePortraitSrc: "assets/zhangjiajie-intro-mobile-portrait.mp4",
  mobileLandscapeSrc: "assets/zhangjiajie-intro-mobile-landscape.mp4"
}
```
