import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as l,b as n,d as s,a as p,f as e}from"./app-2d091527.js";const d={},u=e(`<h1 id="gitbook简易上手教程" tabindex="-1"><a class="header-anchor" href="#gitbook简易上手教程" aria-hidden="true">#</a> Gitbook简易上手教程</h1><p>Gitbok是一个本地写书工具，基于md语法，使用简单，易于上手。</p><h2 id="_1-1-如何使用gitbook" tabindex="-1"><a class="header-anchor" href="#_1-1-如何使用gitbook" aria-hidden="true">#</a> 1.1 如何使用gitbook</h2><h3 id="安装使用说明" tabindex="-1"><a class="header-anchor" href="#安装使用说明" aria-hidden="true">#</a> 安装使用说明</h3><p>安装：</p><p>npm install -g gitbook-cli --force</p><p>初始化目录：</p><p>mkdir gitbook &amp;&amp; cd gitbook<br> gitbook init</p><p>开始编辑目录：</p><p>vim <code>summary.md</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Summary

* [前言](README.md)
* [第一章](1/README.md)
    * [1.1，基本语法](1/基本语法.md)
* [第二章](2/README.md)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重建目录" tabindex="-1"><a class="header-anchor" href="#重建目录" aria-hidden="true">#</a> 重建目录</h3><p>添加相应手段后，执行<code>book sm</code>，即可自动生成相关章节。当然也可以手动添加章节文件。</p><h3 id="发布静态文件" tabindex="-1"><a class="header-anchor" href="#发布静态文件" aria-hidden="true">#</a> 发布静态文件</h3><p>gitbook build . ../../static/books/$dir</p>`,15),r={href:"http://xn--build-bi1hv64hwefdy4ch4ak11l.sh",target:"_blank",rel:"noopener noreferrer"},c=n("h3",{id:"输出pdf",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输出pdf","aria-hidden":"true"},"#"),s(" 输出PDF")],-1),v=n("p",null,"输出为PDF文件，需要先安装gitbook pdf",-1),m=n("p",null,"$ npm install gitbook-pdf -g",-1),b=n("p",null,"然后，用下面的命令就可以生成PDF文件了。",-1),g=n("p",{book_name:""},"$ gitbook pdf",-1),k=e(`<p>如果，你已经在编写的gitbook当前目录，也可以使用相对路径。</p><p>$ gitbook pdf .</p><p>然后，你就会发现，你的目录中多了一个名为book.pdf的文件。</p><h2 id="_1-2-解决installing-gitbook的错误" tabindex="-1"><a class="header-anchor" href="#_1-2-解决installing-gitbook的错误" aria-hidden="true">#</a> 1.2 解决Installing GitBook的错误</h2><blockquote><p>我是在win10 64位系统上遇到的这个问题。</p></blockquote><p>使用如下指令安装gitook：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo npm install -g gitbook-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可能会出现一个错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ gitbook serve .
Installing GitBook 3.2.3
C:\\Users\\LIYI\\AppData\\Roaming\\npm\\node_modules\\gitbook-cli\\node_modules\\npm\\node_modules\\graceful-fs\\polyfills.js:287
      if (cb) cb.apply(this, arguments)
                 ^
TypeError: cb.apply is not a function
    at C:\\Users\\LIYI\\AppData\\Roaming\\npm\\node_modules\\gitbook-cli\\node_modules\\npm\\node_modules\\graceful-fs\\polyfills.js:287:18
    at FSReqCallback.oncomplete (fs.js:184:5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个过程可能会很长，你可能需要先干别的事，过一段时间回来看，必现报错了。</p><p>我的node版本号是v14.15.5：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ node -v
v14.15.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>有人说是由于版本太高造成的错误，降低版本就可以了。</p><h3 id="使用nvm降低node版本" tabindex="-1"><a class="header-anchor" href="#使用nvm降低node版本" aria-hidden="true">#</a> 使用nvm降低node版本</h3><p>nvm与n的区别是，n是一个node模块，nvm是node之外的脚本。</p><p>下载与安装nvm：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/coreybutler/nvm-windows/releases
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>nvm -v</code>有输出，代表安装成功了。</p><p>nvm常用指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvm install 10.22   // 选择安装node 版本
nvm use 14.15       // 切换使用的node版本  
nvm list            // 查看已安装的 node 版本
nvm uninstall 6.2.0 // 卸载对应的版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决nvm安装失败问题" tabindex="-1"><a class="header-anchor" href="#解决nvm安装失败问题" aria-hidden="true">#</a> 解决nvm安装失败问题</h4><p>听说10.22好使，使用nvm install 10.22时，出现一个错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Could not retrieve https://nodejs.org/dist/latest/SHASUMS256.txt.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是由墙造成的，是下载源的问题。去nvm的安装目录：</p><p>C:\\Users\\LIYI\\AppData\\Roaming\\nvm</p><p>找到一个settings.txt文件，添加最后两行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root: C:\\Users\\LIYI\\AppData\\Roaming\\nvm
path: C:\\Program Files\\nodejs
node_mirror:npm.taobao.org/mirrors/node/
npm_mirror:npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好以后，重新安装nvm install 10.22就好使了。</p><p>安装好以后就是使用use指令切换：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ nvm use 10.22.0
Now using node v10.22.0 (64-bit)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这个切换必须在管理员模式下完成。还有，node版本的切换可能会对其它程序造成负面影响。</p><h3 id="重新安装gitbook" tabindex="-1"><a class="header-anchor" href="#重新安装gitbook" aria-hidden="true">#</a> 重新安装gitbook</h3><p>可以使用node -v查看降低后的版本。现在可以重装gitbook了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g gitbook-cli --force
npm install -g gitbook --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到普通指令模式下，再执行serve指令就可以了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ gitbook serve .
Installing GitBook 3.2.3
gitbook@3.2.3 C:\\Users\\LIYI\\AppData\\Local\\Temp\\tmp-19328QAP4WZytuKh5\\node_modules\\gitbook
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-如何自动生成目录" tabindex="-1"><a class="header-anchor" href="#_1-3-如何自动生成目录" aria-hidden="true">#</a> 1.3 如何自动生成目录</h2><p>先全局安装一个模块：</p><p>npm install -g gitbook-summary</p><p>然后在图书目录下执行：</p><p>book sm -i _book</p><p>-i参数用于忽略目录。_book是gitbook自动生成的输出目录，它是应该被忽略的。</p><p>如果有多个目录需要忽略，可以这样设置参数：</p><p>book sm -i [_book,node_modules, styles]</p><p>如果书籍目录下有book.json文件，就是配置文件在起作用了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;ignores&quot;: [&quot;_book&quot;,&quot;styles&quot;,&quot;node_modules&quot;],
  ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件优先级更高。</p><h2 id="_1-4-gitbook能不能自定义样式" tabindex="-1"><a class="header-anchor" href="#_1-4-gitbook能不能自定义样式" aria-hidden="true">#</a> 1.4 Gitbook能不能自定义样式?</h2><p>通过books.json自定义样式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;styles&quot;: {
    &quot;website&quot;: &quot;styles/website.css&quot;
  },
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>style code in styles/website.css:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.copyright{
  color: white;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果样式未起作用，要注意检查样式语法，还有在.bookignore文件中，不能将styles目录忽略。</p><h2 id="_1-5-安装常用插件" tabindex="-1"><a class="header-anchor" href="#_1-5-安装常用插件" aria-hidden="true">#</a> 1.5 安装常用插件</h2><p>在book.json中可以配置插件。</p><p>GitBook 默认自带5个插件：</p><ul><li>highlight： 代码高亮</li><li>search： 导航栏查询功能，据说默认不支持中文</li><li>sharing：右上角分享功能</li><li>font-settings：字体设置，最上方的&quot;A&quot;符号</li><li>livereload：为GitBook实时重新加载</li></ul><p>如果要替换默认插件，需要在book.json中将默认插件使用“-”号“减”去。</p><p>这是我用到的插件及插件配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  ...
    <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;auto-scroll-table&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sidebar-style&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;click-reveal&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;-lunr&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;-search&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;search-pro&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;back-to-top-button&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;insert-logo-link&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;chapter-fold&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;advanced-emoji&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;emphasize&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;splitter&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;expandable-chapters-small&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;page-toc-button&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;klipse&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;donate&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;alerts&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;sidebar-style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;艺术论&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LIYI&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;donate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;wechat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;images/wxpaycode.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;alipay&quot;</span><span class="token operator">:</span> <span class="token string">&quot;images/alipaycode.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;button&quot;</span><span class="token operator">:</span> <span class="token string">&quot;打赏&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;alipayText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;支付宝打赏&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;wechatText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信打赏&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;page-toc-button&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;maxTocDepth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;minTocSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;insert-logo-link&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.yishulun.com/avatar.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.yishulun.com&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;background: none; max-height: 50px; border-radius: 50%;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="back-to-top-button-回到顶部按钮" tabindex="-1"><a class="header-anchor" href="#back-to-top-button-回到顶部按钮" aria-hidden="true">#</a> back-to-top-button 回到顶部按钮</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;plugins&quot;: [
         &quot;back-to-top-button&quot;
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="code-代码添加行号-复制按钮" tabindex="-1"><a class="header-anchor" href="#code-代码添加行号-复制按钮" aria-hidden="true">#</a> code 代码添加行号&amp;复制按钮</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;plugins&quot; : [ &quot;code&quot; ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想去掉复制按钮，可配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;pluginsConfig&quot;: {
      &quot;code&quot;: {
        &quot;copyButtons&quot;: false
      }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="insert-logo-link-插入logo和链接" tabindex="-1"><a class="header-anchor" href="#insert-logo-link-插入logo和链接" aria-hidden="true">#</a> insert-logo-link 插入logo和链接</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;plugins&quot;: [ &quot;insert-logo-link&quot; ]
    &quot;pluginsConfig&quot;: {
      &quot;insert-logo&quot;: {
        &quot;src&quot;: &quot;https://yishulun.com&quot;,
        &quot;url&quot;: &quot;avator.jpg&quot;
      }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果插入的图片过大，样式不匹配，可以在styles/website.css中通过样式控制。</p><h3 id="search-pro-高级搜索" tabindex="-1"><a class="header-anchor" href="#search-pro-高级搜索" aria-hidden="true">#</a> search-pro 高级搜索</h3><p>在使用此插件之前，需要将默认的search和lunr 插件去掉；在搜索结果中，关键字会高亮；自带的 search 插件，关键字不会高亮</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;plugins&quot;: [
          &quot;-lunr&quot;, 
          &quot;-search&quot;, 
          &quot;search-pro&quot;
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emphasize-为文字加上底色" tabindex="-1"><a class="header-anchor" href="#emphasize-为文字加上底色" aria-hidden="true">#</a> emphasize 为文字加上底色</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;plugins&quot;: [
        &quot;emphasize&quot;
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在markdown / asciidoc内容中，使用以下内容突出显示一些文本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>This text is {% em %}highlighted !{% endem %}
This text is {% em %}highlighted with **markdown**!{% endem %}
This text is {% em type=&quot;green&quot; %}highlighted in green!{% endem %}
This text is {% em type=&quot;red&quot; %}highlighted in red!{% endem %}
This text is {% em color=&quot;#ff0000&quot; %}highlighted with a custom color!{% endem %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p>:::<br> This text is {% em %}highlighted !{% endem %}<br> This text is {% em %}highlighted with <strong>markdown</strong>!{% endem %}<br> This text is {% em type=&quot;green&quot; %}highlighted in green!{% endem %}<br> This text is {% em type=&quot;red&quot; %}highlighted in red!{% endem %}<br> This text is {% em color=&quot;#ff0000&quot; %}highlighted with a custom color!{% endem %}<br> :::</p><h3 id="splitter-侧边栏宽度可调节" tabindex="-1"><a class="header-anchor" href="#splitter-侧边栏宽度可调节" aria-hidden="true">#</a> splitter 侧边栏宽度可调节</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;plugins&quot;: [
        &quot;splitter&quot;
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="page-toc-button-悬浮目录" tabindex="-1"><a class="header-anchor" href="#page-toc-button-悬浮目录" aria-hidden="true">#</a> page-toc-button 悬浮目录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;plugins&quot; : [ &quot;page-toc-button&quot; ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选配置项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;pluginsConfig&quot;: {
        &quot;page-toc-button&quot;: {
            &quot;maxTocDepth&quot;: 2,
            &quot;minTocSize&quot;: 2
       }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>maxTocDept 标题的最大深度（2 = h1 + h2 + h3）。不支持值&gt; 2。 默认2<br> minTocSize 显示toc按钮的最小toc条目数。 默认 2</p><h3 id="打赏按钮-reward" tabindex="-1"><a class="header-anchor" href="#打赏按钮-reward" aria-hidden="true">#</a> 打赏按钮 reward</h3><p>这是国人铭哥开发的插件，配置：</p><pre><code>&quot;pluginsConfig&quot;: [&#39;
    &quot;reward&quot;: {
        &quot;wechat&quot;: &quot;http://unclealan.cn/usr/themes/seventeen/dist/images/weixin.JPG&quot;,
        &quot;alipay&quot;: &quot;http://unclealan.cn/usr/themes/seventeen/dist/images/alipay.JPG&quot;,
        &quot;button&quot;: &quot;打赏&quot;,
        &quot;alipayText&quot;: &quot;支付宝&quot;,
        &quot;wechatText&quot;: &quot;微信&quot;
    },
]
</code></pre><h3 id="klipse-嵌入类似ide的功能" tabindex="-1"><a class="header-anchor" href="#klipse-嵌入类似ide的功能" aria-hidden="true">#</a> klipse 嵌入类似IDE的功能</h3><p>Klipse配置:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;plugins&quot;: [&quot;klipse&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用法，在 markdown 中：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span> <span class="token punctuation">[</span>x <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>js:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1+2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="auto-scroll-table-表格滚动条" tabindex="-1"><a class="header-anchor" href="#auto-scroll-table-表格滚动条" aria-hidden="true">#</a> auto-scroll-table 表格滚动条</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;plugins&quot;: [&quot;auto-scroll-table&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认不够宽也是没有滚动条的。</p><h3 id="click-reveal-点击显示" tabindex="-1"><a class="header-anchor" href="#click-reveal-点击显示" aria-hidden="true">#</a> click-reveal 点击显示</h3><p>默认隐藏，点击可显示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;plugins&quot;: [
        &quot;click-reveal&quot;
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方式，markdown中。</p><p>代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% reveal %}
要被隐藏的内容
{% endreveal %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p>:::<br> {% reveal %}<br> 要被隐藏的内容<br> {% endreveal %}<br> :::</p><p>默认显示的文字是 Click to show , 使用text自定义显示文字。代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% reveal text=&quot;点击显示&quot; %}
要被隐藏的内容
{% endreveal %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p>:::<br> {% reveal text=&quot;点击显示&quot; %}<br> 要被隐藏的内容<br> {% endreveal %}<br> :::</p><p>支持html语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;click_reveal&quot;&gt;
    &lt;span&gt; 点击显示html &lt;/span&gt;
    &lt;div&gt;&lt;pre&gt;&lt;code&gt;隐藏的文字&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p>:::</p><div class="click_reveal"><span> 点击显示html </span><div><pre><code>隐藏的文字</code></pre></div></div>`,115),q=e(`<h3 id="使用npm安装单个插件" tabindex="-1"><a class="header-anchor" href="#使用npm安装单个插件" aria-hidden="true">#</a> 使用npm安装单个插件</h3><p>如果觉得使用gitbook install安装有点慢，可以单个下载、安装插件，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i gitbook-plugin-insert-logo-link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-6-如何上传图片" tabindex="-1"><a class="header-anchor" href="#_1-6-如何上传图片" aria-hidden="true">#</a> 1.6 如何上传图片</h2><p>上传图片是在typora中，间接使用Picgo上传到图床的。</p><p>推荐使用Picgo core，而非Picgo App。后者需要在本地启动一个web server，相当于往本地一个图片上传接口提交。显然Picgo core通过进程直接调用，效果更好。</p><p>推荐Picgo core配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;picBed&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token string">&quot;githubPlus&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;githubPlus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;branch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;master&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;customUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/rixingyike/images&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;github&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;repo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rixingyike/images&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在github上获取&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uploader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;githubPlus&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;transformer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;showUpdateTip&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rename&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;autoRename&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uploadNotification&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;picgoPlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;picgo-plugin-github-plus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;picgo-plugin-super-prefix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;picgo-plugin-compress&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;picgo-plugin-gitee&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;picgo-plugin-gitee-uploader&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;picgo-plugin-super-prefix&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefixFormat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYYMMDDHHmmss&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;picgo-plugin-github-plus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lastSync&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-03-28 02:27:30&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;picgo-plugin-compress&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;compress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imagemin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nameType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对该配置的说明：</p><ul><li>jsdelivr是用于cdn加速的，加速图片被用户快速访问到。</li><li>&quot;picgo-plugin-super-prefix&quot;这个插件是用于上传前重命名文件的，因为重名文件不允许上传，会报一个“sha不支持”的错误。使用这个插件，须确保默认配置&quot;autoRename&quot;为false。</li><li>上传使用&quot;picgo-plugin-github-plus&quot;插件，该插件在上传上优先默认上传功能及其它插件。它同时支持上传github、gitee两个图床。注意，当启用它时，需要将&quot;picgo-plugin-gitee&quot;和&quot;picgo-plugin-gitee-uploader&quot;都置为false。</li></ul><h2 id="_1-7-在vscode中定义markodwn代码版本" tabindex="-1"><a class="header-anchor" href="#_1-7-在vscode中定义markodwn代码版本" aria-hidden="true">#</a> 1.7 在vscode中定义markodwn代码版本</h2><p>有些内容是重复的，可以借助snippets功能快捷创建。共有两个配置需要完成。</p><p>现在假设我们需要一个与hugo对应的snippet，首先需要选择文件-&gt;用户片断，新建一个markdown.json文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;new hugo post header&quot;: {
    &quot;prefix&quot;: &quot;hugo&quot;,
    &quot;body&quot;: [
      &quot;---&quot;,
      &quot;title: $TM_FILENAME_BASE&quot;,
      &quot;sidebar: false
date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND&quot;,
      &quot;---&quot;
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为vscode默认没有这个模板，不像其它c、cpp片断，单是完成这一步好不好使。还需要在用户的settings.json文件中添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;[markdown]&quot;: {
    &quot;editor.formatOnSave&quot;: true,
    &quot;editor.renderWhitespace&quot;: &quot;all&quot;,
    &quot;editor.quickSuggestions&quot;: {
        &quot;other&quot;: true,
        &quot;comments&quot;: true,
        &quot;strings&quot;: true
    },
    &quot;editor.acceptSuggestionOnEnter&quot;: &quot;on&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function h(x,y){const a=i("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[n("a",r,[s("执行目录下的build.sh"),p(a)])]),c,v,m,b,g,k,s(" ::: "),q])}const w=t(d,[["render",h],["__file","19.html.vue"]]);export{w as default};
