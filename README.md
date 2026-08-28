# TENDLY 发布网站

纯静态、无 JavaScript、无 Cookie、无追踪。发布前必须全局替换：

- `support.tendly@gmail.com`：公开客服邮箱
- `Yuanxiang Li`：个人开发者姓名或公司法定名称

本地预览：在本目录执行 `python3 -m http.server 8080`，访问 `http://localhost:8080`。

部署可任选一种：

1. GitHub Pages：把本目录推送到仓库，在 Settings → Pages 选择分支根目录。
2. Cloudflare Pages：连接仓库，Build command 留空，Output directory 指向 `release-site`。
3. 现有网站：将全部文件原样上传到同一公开目录。

上线后在 App Store Connect 填入公开 HTTPS 地址，例如：

- Privacy Policy URL：`https://example.com/privacy.html`
- Support URL：`https://example.com/support.html`

发布前逐页检查手机与桌面显示、邮件链接、HTTPS、主体名称及生效日期。
