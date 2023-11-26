import{_ as a,o as n,c as p,a as l,Q as s,k as o}from"./chunks/framework.25d5caa7.js";const m=JSON.parse('{"title":"Gitbook简易上手教程","description":"","frontmatter":{"sidebar":false,"date":"2021-12-21T23:22:59.000Z"},"headers":[],"relativePath":"posts/2021/19.md","filePath":"posts/2021/19.md"}'),e={name:"posts/2021/19.md"},t=s(`<h1 id="gitbook简易上手教程" tabindex="-1">Gitbook简易上手教程 <a class="header-anchor" href="#gitbook简易上手教程" aria-label="Permalink to &quot;Gitbook简易上手教程&quot;">​</a></h1><p>Gitbok是一个本地写书工具，基于md语法，使用简单，易于上手。</p><h2 id="_1-1-如何使用gitbook" tabindex="-1">1.1 如何使用gitbook <a class="header-anchor" href="#_1-1-如何使用gitbook" aria-label="Permalink to &quot;1.1 如何使用gitbook&quot;">​</a></h2><h3 id="安装使用说明" tabindex="-1">安装使用说明 <a class="header-anchor" href="#安装使用说明" aria-label="Permalink to &quot;安装使用说明&quot;">​</a></h3><p>安装：</p><p>npm install -g gitbook-cli --force</p><p>初始化目录：</p><p>mkdir gitbook &amp;&amp; cd gitbook gitbook init</p><p>开始编辑目录：</p><p>vim <code>summary.md</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Summary</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">* [前言](README.md)</span></span>
<span class="line"><span style="color:#e1e4e8;">* [第一章](1/README.md)</span></span>
<span class="line"><span style="color:#e1e4e8;">    * [1.1，基本语法](1/基本语法.md)</span></span>
<span class="line"><span style="color:#e1e4e8;">* [第二章](2/README.md)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Summary</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">* [前言](README.md)</span></span>
<span class="line"><span style="color:#24292e;">* [第一章](1/README.md)</span></span>
<span class="line"><span style="color:#24292e;">    * [1.1，基本语法](1/基本语法.md)</span></span>
<span class="line"><span style="color:#24292e;">* [第二章](2/README.md)</span></span></code></pre></div><h3 id="重建目录" tabindex="-1">重建目录 <a class="header-anchor" href="#重建目录" aria-label="Permalink to &quot;重建目录&quot;">​</a></h3><p>添加相应手段后，执行<code>book sm</code>，即可自动生成相关章节。当然也可以手动添加章节文件。</p><h3 id="发布静态文件" tabindex="-1">发布静态文件 <a class="header-anchor" href="#发布静态文件" aria-label="Permalink to &quot;发布静态文件&quot;">​</a></h3><p>gitbook build . ../../static/books/$dir</p><p>执行目录下的build.sh</p><h3 id="输出pdf" tabindex="-1">输出PDF <a class="header-anchor" href="#输出pdf" aria-label="Permalink to &quot;输出PDF&quot;">​</a></h3><p>输出为PDF文件，需要先安装gitbook pdf</p><p>$ npm install gitbook-pdf -g</p><p>然后，用下面的命令就可以生成PDF文件了。</p>`,20),c=o("p",{book_name:""},"$ gitbook pdf",-1),r=s(`<p>如果，你已经在编写的gitbook当前目录，也可以使用相对路径。</p><p>$ gitbook pdf .</p><p>然后，你就会发现，你的目录中多了一个名为book.pdf的文件。</p><h2 id="_1-2-解决installing-gitbook的错误" tabindex="-1">1.2 解决Installing GitBook的错误 <a class="header-anchor" href="#_1-2-解决installing-gitbook的错误" aria-label="Permalink to &quot;1.2 解决Installing GitBook的错误&quot;">​</a></h2><blockquote><p>我是在win10 64位系统上遇到的这个问题。</p></blockquote><p>使用如下指令安装gitook：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sudo npm install -g gitbook-cli</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sudo npm install -g gitbook-cli</span></span></code></pre></div><p>可能会出现一个错误：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ gitbook serve .</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing GitBook 3.2.3</span></span>
<span class="line"><span style="color:#e1e4e8;">C:\\Users\\LIYI\\AppData\\Roaming\\npm\\node_modules\\gitbook-cli\\node_modules\\npm\\node_modules\\graceful-fs\\polyfills.js:287</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (cb) cb.apply(this, arguments)</span></span>
<span class="line"><span style="color:#e1e4e8;">                 ^</span></span>
<span class="line"><span style="color:#e1e4e8;">TypeError: cb.apply is not a function</span></span>
<span class="line"><span style="color:#e1e4e8;">    at C:\\Users\\LIYI\\AppData\\Roaming\\npm\\node_modules\\gitbook-cli\\node_modules\\npm\\node_modules\\graceful-fs\\polyfills.js:287:18</span></span>
<span class="line"><span style="color:#e1e4e8;">    at FSReqCallback.oncomplete (fs.js:184:5)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ gitbook serve .</span></span>
<span class="line"><span style="color:#24292e;">Installing GitBook 3.2.3</span></span>
<span class="line"><span style="color:#24292e;">C:\\Users\\LIYI\\AppData\\Roaming\\npm\\node_modules\\gitbook-cli\\node_modules\\npm\\node_modules\\graceful-fs\\polyfills.js:287</span></span>
<span class="line"><span style="color:#24292e;">      if (cb) cb.apply(this, arguments)</span></span>
<span class="line"><span style="color:#24292e;">                 ^</span></span>
<span class="line"><span style="color:#24292e;">TypeError: cb.apply is not a function</span></span>
<span class="line"><span style="color:#24292e;">    at C:\\Users\\LIYI\\AppData\\Roaming\\npm\\node_modules\\gitbook-cli\\node_modules\\npm\\node_modules\\graceful-fs\\polyfills.js:287:18</span></span>
<span class="line"><span style="color:#24292e;">    at FSReqCallback.oncomplete (fs.js:184:5)</span></span></code></pre></div><p>这个过程可能会很长，你可能需要先干别的事，过一段时间回来看，必现报错了。</p><p>我的node版本号是v14.15.5：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ node -v</span></span>
<span class="line"><span style="color:#e1e4e8;">v14.15.5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ node -v</span></span>
<span class="line"><span style="color:#24292e;">v14.15.5</span></span></code></pre></div><p>有人说是由于版本太高造成的错误，降低版本就可以了。</p><h3 id="使用nvm降低node版本" tabindex="-1">使用nvm降低node版本 <a class="header-anchor" href="#使用nvm降低node版本" aria-label="Permalink to &quot;使用nvm降低node版本&quot;">​</a></h3><p>nvm与n的区别是，n是一个node模块，nvm是node之外的脚本。</p><p>下载与安装nvm：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">https://github.com/coreybutler/nvm-windows/releases</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">https://github.com/coreybutler/nvm-windows/releases</span></span></code></pre></div><p><code>nvm -v</code>有输出，代表安装成功了。</p><p>nvm常用指令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nvm install 10.22   // 选择安装node 版本</span></span>
<span class="line"><span style="color:#e1e4e8;">nvm use 14.15       // 切换使用的node版本  </span></span>
<span class="line"><span style="color:#e1e4e8;">nvm list            // 查看已安装的 node 版本</span></span>
<span class="line"><span style="color:#e1e4e8;">nvm uninstall 6.2.0 // 卸载对应的版本</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nvm install 10.22   // 选择安装node 版本</span></span>
<span class="line"><span style="color:#24292e;">nvm use 14.15       // 切换使用的node版本  </span></span>
<span class="line"><span style="color:#24292e;">nvm list            // 查看已安装的 node 版本</span></span>
<span class="line"><span style="color:#24292e;">nvm uninstall 6.2.0 // 卸载对应的版本</span></span></code></pre></div><h4 id="解决nvm安装失败问题" tabindex="-1">解决nvm安装失败问题 <a class="header-anchor" href="#解决nvm安装失败问题" aria-label="Permalink to &quot;解决nvm安装失败问题&quot;">​</a></h4><p>听说10.22好使，使用nvm install 10.22时，出现一个错误：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Could not retrieve https://nodejs.org/dist/latest/SHASUMS256.txt.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Could not retrieve https://nodejs.org/dist/latest/SHASUMS256.txt.</span></span></code></pre></div><p>这是由墙造成的，是下载源的问题。去nvm的安装目录：</p><p>C:\\Users\\LIYI\\AppData\\Roaming\\nvm</p><p>找到一个settings.txt文件，添加最后两行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">root: C:\\Users\\LIYI\\AppData\\Roaming\\nvm</span></span>
<span class="line"><span style="color:#e1e4e8;">path: C:\\Program Files\\nodejs</span></span>
<span class="line"><span style="color:#e1e4e8;">node_mirror:npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span style="color:#e1e4e8;">npm_mirror:npm.taobao.org/mirrors/npm/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">root: C:\\Users\\LIYI\\AppData\\Roaming\\nvm</span></span>
<span class="line"><span style="color:#24292e;">path: C:\\Program Files\\nodejs</span></span>
<span class="line"><span style="color:#24292e;">node_mirror:npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span style="color:#24292e;">npm_mirror:npm.taobao.org/mirrors/npm/</span></span></code></pre></div><p>配置好以后，重新安装nvm install 10.22就好使了。</p><p>安装好以后就是使用use指令切换：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ nvm use 10.22.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Now using node v10.22.0 (64-bit)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ nvm use 10.22.0</span></span>
<span class="line"><span style="color:#24292e;">Now using node v10.22.0 (64-bit)</span></span></code></pre></div><p>注意，这个切换必须在管理员模式下完成。还有，node版本的切换可能会对其它程序造成负面影响。</p><h3 id="重新安装gitbook" tabindex="-1">重新安装gitbook <a class="header-anchor" href="#重新安装gitbook" aria-label="Permalink to &quot;重新安装gitbook&quot;">​</a></h3><p>可以使用node -v查看降低后的版本。现在可以重装gitbook了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install -g gitbook-cli --force</span></span>
<span class="line"><span style="color:#e1e4e8;">npm install -g gitbook --force</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install -g gitbook-cli --force</span></span>
<span class="line"><span style="color:#24292e;">npm install -g gitbook --force</span></span></code></pre></div><p>切换到普通指令模式下，再执行serve指令就可以了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ gitbook serve .</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing GitBook 3.2.3</span></span>
<span class="line"><span style="color:#e1e4e8;">gitbook@3.2.3 C:\\Users\\LIYI\\AppData\\Local\\Temp\\tmp-19328QAP4WZytuKh5\\node_modules\\gitbook</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ gitbook serve .</span></span>
<span class="line"><span style="color:#24292e;">Installing GitBook 3.2.3</span></span>
<span class="line"><span style="color:#24292e;">gitbook@3.2.3 C:\\Users\\LIYI\\AppData\\Local\\Temp\\tmp-19328QAP4WZytuKh5\\node_modules\\gitbook</span></span>
<span class="line"><span style="color:#24292e;">...</span></span></code></pre></div><h2 id="_1-3-如何自动生成目录" tabindex="-1">1.3 如何自动生成目录 <a class="header-anchor" href="#_1-3-如何自动生成目录" aria-label="Permalink to &quot;1.3 如何自动生成目录&quot;">​</a></h2><p>先全局安装一个模块：</p><p>npm install -g gitbook-summary</p><p>然后在图书目录下执行：</p><p>book sm -i _book</p><p>-i参数用于忽略目录。_book是gitbook自动生成的输出目录，它是应该被忽略的。</p><p>如果有多个目录需要忽略，可以这样设置参数：</p><p>book sm -i [_book,node_modules, styles]</p><p>如果书籍目录下有book.json文件，就是配置文件在起作用了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;ignores&quot;: [&quot;_book&quot;,&quot;styles&quot;,&quot;node_modules&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">  ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;ignores&quot;: [&quot;_book&quot;,&quot;styles&quot;,&quot;node_modules&quot;],</span></span>
<span class="line"><span style="color:#24292e;">  ...</span></span></code></pre></div><p>配置文件优先级更高。</p><h2 id="_1-4-gitbook能不能自定义样式" tabindex="-1">1.4 Gitbook能不能自定义样式? <a class="header-anchor" href="#_1-4-gitbook能不能自定义样式" aria-label="Permalink to &quot;1.4 Gitbook能不能自定义样式?&quot;">​</a></h2><p>通过books.json自定义样式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;styles&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;website&quot;: &quot;styles/website.css&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;styles&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;website&quot;: &quot;styles/website.css&quot;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>style code in styles/website.css:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.copyright{</span></span>
<span class="line"><span style="color:#e1e4e8;">  color: white;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.copyright{</span></span>
<span class="line"><span style="color:#24292e;">  color: white;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>如果样式未起作用，要注意检查样式语法，还有在.bookignore文件中，不能将styles目录忽略。</p><h2 id="_1-5-安装常用插件" tabindex="-1">1.5 安装常用插件 <a class="header-anchor" href="#_1-5-安装常用插件" aria-label="Permalink to &quot;1.5 安装常用插件&quot;">​</a></h2><p>在book.json中可以配置插件。</p><p>GitBook 默认自带5个插件：</p><ul><li>highlight： 代码高亮</li><li>search： 导航栏查询功能，据说默认不支持中文</li><li>sharing：右上角分享功能</li><li>font-settings：字体设置，最上方的&quot;A&quot;符号</li><li>livereload：为GitBook实时重新加载</li></ul><p>如果要替换默认插件，需要在book.json中将默认插件使用“-”号“减”去。</p><p>这是我用到的插件及插件配置：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;plugins&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;auto-scroll-table&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;sidebar-style&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;click-reveal&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;-lunr&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;-search&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;search-pro&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;back-to-top-button&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;insert-logo-link&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;chapter-fold&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;code&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;advanced-emoji&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;emphasize&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;splitter&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;expandable-chapters-small&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;page-toc-button&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;klipse&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;donate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;alerts&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;pluginsConfig&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;sidebar-style&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;艺术论&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;author&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;LIYI&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;donate&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;wechat&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;images/wxpaycode.jpg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;alipay&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;images/alipaycode.jpg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;button&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;打赏&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;alipayText&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;支付宝打赏&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;wechatText&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;微信打赏&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;page-toc-button&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;maxTocDepth&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;minTocSize&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;insert-logo-link&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;src&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://yishulun.com/avatar.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://yishulun.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;style&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;background: none; max-height: 50px; border-radius: 50%;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;plugins&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;auto-scroll-table&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;sidebar-style&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;click-reveal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;-lunr&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;-search&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;search-pro&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;back-to-top-button&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;insert-logo-link&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;chapter-fold&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;code&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;advanced-emoji&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;emphasize&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;splitter&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;expandable-chapters-small&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;page-toc-button&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;klipse&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;donate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;alerts&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;pluginsConfig&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;sidebar-style&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;艺术论&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;author&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;LIYI&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;donate&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;wechat&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;images/wxpaycode.jpg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;alipay&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;images/alipaycode.jpg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;button&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;打赏&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;alipayText&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;支付宝打赏&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;wechatText&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;微信打赏&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;page-toc-button&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;maxTocDepth&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;minTocSize&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;insert-logo-link&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;src&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://yishulun.com/avatar.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://yishulun.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;style&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;background: none; max-height: 50px; border-radius: 50%;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="back-to-top-button-回到顶部按钮" tabindex="-1">back-to-top-button 回到顶部按钮 <a class="header-anchor" href="#back-to-top-button-回到顶部按钮" aria-label="Permalink to &quot;back-to-top-button 回到顶部按钮&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">         &quot;back-to-top-button&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">         &quot;back-to-top-button&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="code-代码添加行号-复制按钮" tabindex="-1">code 代码添加行号&amp;复制按钮 <a class="header-anchor" href="#code-代码添加行号-复制按钮" aria-label="Permalink to &quot;code 代码添加行号&amp;复制按钮&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;plugins&quot; : [ &quot;code&quot; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;plugins&quot; : [ &quot;code&quot; ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>如果想去掉复制按钮，可配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;pluginsConfig&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;code&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;copyButtons&quot;: false</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;pluginsConfig&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;code&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;copyButtons&quot;: false</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="insert-logo-link-插入logo和链接" tabindex="-1">insert-logo-link 插入logo和链接 <a class="header-anchor" href="#insert-logo-link-插入logo和链接" aria-label="Permalink to &quot;insert-logo-link 插入logo和链接&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;plugins&quot;: [ &quot;insert-logo-link&quot; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;pluginsConfig&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;insert-logo&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;src&quot;: &quot;https://yishulun.com&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;url&quot;: &quot;avator.jpg&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;plugins&quot;: [ &quot;insert-logo-link&quot; ]</span></span>
<span class="line"><span style="color:#24292e;">    &quot;pluginsConfig&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;insert-logo&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;src&quot;: &quot;https://yishulun.com&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;url&quot;: &quot;avator.jpg&quot;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>如果插入的图片过大，样式不匹配，可以在styles/website.css中通过样式控制。</p><h3 id="search-pro-高级搜索" tabindex="-1">search-pro 高级搜索 <a class="header-anchor" href="#search-pro-高级搜索" aria-label="Permalink to &quot;search-pro 高级搜索&quot;">​</a></h3><p>在使用此插件之前，需要将默认的search和lunr 插件去掉；在搜索结果中，关键字会高亮；自带的 search 插件，关键字不会高亮</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;-lunr&quot;, </span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;-search&quot;, </span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;search-pro&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">          &quot;-lunr&quot;, </span></span>
<span class="line"><span style="color:#24292e;">          &quot;-search&quot;, </span></span>
<span class="line"><span style="color:#24292e;">          &quot;search-pro&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="emphasize-为文字加上底色" tabindex="-1">emphasize 为文字加上底色 <a class="header-anchor" href="#emphasize-为文字加上底色" aria-label="Permalink to &quot;emphasize 为文字加上底色&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;emphasize&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        &quot;emphasize&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>然后在markdown / asciidoc内容中，使用以下内容突出显示一些文本：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">This text is {% em %}highlighted !{% endem %}</span></span>
<span class="line"><span style="color:#e1e4e8;">This text is {% em %}highlighted with **markdown**!{% endem %}</span></span>
<span class="line"><span style="color:#e1e4e8;">This text is {% em type=&quot;green&quot; %}highlighted in green!{% endem %}</span></span>
<span class="line"><span style="color:#e1e4e8;">This text is {% em type=&quot;red&quot; %}highlighted in red!{% endem %}</span></span>
<span class="line"><span style="color:#e1e4e8;">This text is {% em color=&quot;#ff0000&quot; %}highlighted with a custom color!{% endem %}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292e;">This text is {% em %}highlighted !{% endem %}</span></span>
<span class="line"><span style="color:#24292e;">This text is {% em %}highlighted with **markdown**!{% endem %}</span></span>
<span class="line"><span style="color:#24292e;">This text is {% em type=&quot;green&quot; %}highlighted in green!{% endem %}</span></span>
<span class="line"><span style="color:#24292e;">This text is {% em type=&quot;red&quot; %}highlighted in red!{% endem %}</span></span>
<span class="line"><span style="color:#24292e;">This text is {% em color=&quot;#ff0000&quot; %}highlighted with a custom color!{% endem %}</span></span></code></pre></div><p>效果：</p><p>::: This text is {% em %}highlighted !{% endem %} This text is {% em %}highlighted with <strong>markdown</strong>!{% endem %} This text is {% em type=&quot;green&quot; %}highlighted in green!{% endem %} This text is {% em type=&quot;red&quot; %}highlighted in red!{% endem %} This text is {% em color=&quot;#ff0000&quot; %}highlighted with a custom color!{% endem %} :::</p><h3 id="splitter-侧边栏宽度可调节" tabindex="-1">splitter 侧边栏宽度可调节 <a class="header-anchor" href="#splitter-侧边栏宽度可调节" aria-label="Permalink to &quot;splitter 侧边栏宽度可调节&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;splitter&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        &quot;splitter&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="page-toc-button-悬浮目录" tabindex="-1">page-toc-button 悬浮目录 <a class="header-anchor" href="#page-toc-button-悬浮目录" aria-label="Permalink to &quot;page-toc-button 悬浮目录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;plugins&quot; : [ &quot;page-toc-button&quot; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;plugins&quot; : [ &quot;page-toc-button&quot; ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>可选配置项：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;pluginsConfig&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;page-toc-button&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;maxTocDepth&quot;: 2,</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;minTocSize&quot;: 2</span></span>
<span class="line"><span style="color:#e1e4e8;">       }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;pluginsConfig&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;page-toc-button&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;maxTocDepth&quot;: 2,</span></span>
<span class="line"><span style="color:#24292e;">            &quot;minTocSize&quot;: 2</span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>maxTocDept 标题的最大深度（2 = h1 + h2 + h3）。不支持值&gt; 2。 默认2 minTocSize 显示toc按钮的最小toc条目数。 默认 2</p><h3 id="打赏按钮-reward" tabindex="-1">打赏按钮 reward <a class="header-anchor" href="#打赏按钮-reward" aria-label="Permalink to &quot;打赏按钮 reward&quot;">​</a></h3><p>这是国人铭哥开发的插件，配置：</p><pre><code>&quot;pluginsConfig&quot;: [&#39;
    &quot;reward&quot;: {
        &quot;wechat&quot;: &quot;http://unclealan.cn/usr/themes/seventeen/dist/images/weixin.JPG&quot;,
        &quot;alipay&quot;: &quot;http://unclealan.cn/usr/themes/seventeen/dist/images/alipay.JPG&quot;,
        &quot;button&quot;: &quot;打赏&quot;,
        &quot;alipayText&quot;: &quot;支付宝&quot;,
        &quot;wechatText&quot;: &quot;微信&quot;
    },
]
</code></pre><h3 id="klipse-嵌入类似ide的功能" tabindex="-1">klipse 嵌入类似IDE的功能 <a class="header-anchor" href="#klipse-嵌入类似ide的功能" aria-label="Permalink to &quot;klipse 嵌入类似IDE的功能&quot;">​</a></h3><p>Klipse配置:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;plugins&quot;: [&quot;klipse&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;plugins&quot;: [&quot;klipse&quot;]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>用法，在 markdown 中：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;"> [x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;"> [x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)]</span></span></code></pre></div><p>js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1+2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1+2</span></span></code></pre></div><h3 id="auto-scroll-table-表格滚动条" tabindex="-1">auto-scroll-table 表格滚动条 <a class="header-anchor" href="#auto-scroll-table-表格滚动条" aria-label="Permalink to &quot;auto-scroll-table 表格滚动条&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;plugins&quot;: [&quot;auto-scroll-table&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;plugins&quot;: [&quot;auto-scroll-table&quot;]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>默认不够宽也是没有滚动条的。</p><h3 id="click-reveal-点击显示" tabindex="-1">click-reveal 点击显示 <a class="header-anchor" href="#click-reveal-点击显示" aria-label="Permalink to &quot;click-reveal 点击显示&quot;">​</a></h3><p>默认隐藏，点击可显示。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;click-reveal&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        &quot;click-reveal&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>使用方式，markdown中。</p><p>代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{% reveal %}</span></span>
<span class="line"><span style="color:#e1e4e8;">要被隐藏的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">{% endreveal %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{% reveal %}</span></span>
<span class="line"><span style="color:#24292e;">要被隐藏的内容</span></span>
<span class="line"><span style="color:#24292e;">{% endreveal %}</span></span></code></pre></div><p>效果：</p><p>::: {% reveal %} 要被隐藏的内容 {% endreveal %} :::</p><p>默认显示的文字是 Click to show , 使用text自定义显示文字。代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{% reveal text=&quot;点击显示&quot; %}</span></span>
<span class="line"><span style="color:#e1e4e8;">要被隐藏的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">{% endreveal %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{% reveal text=&quot;点击显示&quot; %}</span></span>
<span class="line"><span style="color:#24292e;">要被隐藏的内容</span></span>
<span class="line"><span style="color:#24292e;">{% endreveal %}</span></span></code></pre></div><p>效果：</p><p>::: {% reveal text=&quot;点击显示&quot; %} 要被隐藏的内容 {% endreveal %} :::</p><p>支持html语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;click_reveal&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;span&gt; 点击显示html &lt;/span&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div&gt;&lt;pre&gt;&lt;code&gt;隐藏的文字&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;click_reveal&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;span&gt; 点击显示html &lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div&gt;&lt;pre&gt;&lt;code&gt;隐藏的文字&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div><p>效果：</p><p>:::</p><div class="click_reveal"><span> 点击显示html </span><div><pre><code>隐藏的文字</code></pre></div></div>`,115),i=s(`<h3 id="使用npm安装单个插件" tabindex="-1">使用npm安装单个插件 <a class="header-anchor" href="#使用npm安装单个插件" aria-label="Permalink to &quot;使用npm安装单个插件&quot;">​</a></h3><p>如果觉得使用gitbook install安装有点慢，可以单个下载、安装插件，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm i gitbook-plugin-insert-logo-link</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm i gitbook-plugin-insert-logo-link</span></span></code></pre></div><h2 id="_1-6-如何上传图片" tabindex="-1">1.6 如何上传图片 <a class="header-anchor" href="#_1-6-如何上传图片" aria-label="Permalink to &quot;1.6 如何上传图片&quot;">​</a></h2><p>上传图片是在typora中，间接使用Picgo上传到图床的。</p><p>推荐使用Picgo core，而非Picgo App。后者需要在本地启动一个web server，相当于往本地一个图片上传接口提交。显然Picgo core通过进程直接调用，效果更好。</p><p>推荐Picgo core配置：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;picBed&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;current&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;githubPlus&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;githubPlus&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;branch&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;master&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;customUrl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://cdn.jsdelivr.net/gh/rixingyike/images&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;origin&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;github&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;path&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2021&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;repo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;rixingyike/images&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;token&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;在github上获取&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;uploader&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;githubPlus&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;transformer&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;path&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;settings&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;showUpdateTip&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;rename&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;autoRename&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;uploadNotification&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;picgoPlugins&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;picgo-plugin-github-plus&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;picgo-plugin-super-prefix&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;picgo-plugin-compress&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;picgo-plugin-gitee&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;picgo-plugin-gitee-uploader&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;picgo-plugin-super-prefix&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;prefixFormat&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;YYYYMMDDHHmmss&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;picgo-plugin-github-plus&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;lastSync&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2021-03-28 02:27:30&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;picgo-plugin-compress&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;compress&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;imagemin&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;nameType&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;none&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;picBed&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;current&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;githubPlus&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;githubPlus&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;branch&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;master&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;customUrl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://cdn.jsdelivr.net/gh/rixingyike/images&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;origin&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;github&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;path&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2021&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;repo&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;rixingyike/images&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;token&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;在github上获取&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;uploader&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;githubPlus&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;transformer&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;path&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;settings&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;showUpdateTip&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;rename&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;autoRename&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;uploadNotification&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;picgoPlugins&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;picgo-plugin-github-plus&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;picgo-plugin-super-prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;picgo-plugin-compress&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;picgo-plugin-gitee&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;picgo-plugin-gitee-uploader&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;picgo-plugin-super-prefix&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;prefixFormat&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;YYYYMMDDHHmmss&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;picgo-plugin-github-plus&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;lastSync&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2021-03-28 02:27:30&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;picgo-plugin-compress&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;compress&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;imagemin&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;nameType&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;none&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>对该配置的说明：</p><ul><li>jsdelivr是用于cdn加速的，加速图片被用户快速访问到。</li><li>&quot;picgo-plugin-super-prefix&quot;这个插件是用于上传前重命名文件的，因为重名文件不允许上传，会报一个“sha不支持”的错误。使用这个插件，须确保默认配置&quot;autoRename&quot;为false。</li><li>上传使用&quot;picgo-plugin-github-plus&quot;插件，该插件在上传上优先默认上传功能及其它插件。它同时支持上传github、gitee两个图床。注意，当启用它时，需要将&quot;picgo-plugin-gitee&quot;和&quot;picgo-plugin-gitee-uploader&quot;都置为false。</li></ul><h2 id="_1-7-在vscode中定义markodwn代码版本" tabindex="-1">1.7 在vscode中定义markodwn代码版本 <a class="header-anchor" href="#_1-7-在vscode中定义markodwn代码版本" aria-label="Permalink to &quot;1.7 在vscode中定义markodwn代码版本&quot;">​</a></h2><p>有些内容是重复的，可以借助snippets功能快捷创建。共有两个配置需要完成。</p><p>现在假设我们需要一个与hugo对应的snippet，首先需要选择文件-&gt;用户片断，新建一个markdown.json文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;new hugo post header&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;prefix&quot;: &quot;hugo&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;body&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;---&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;title: $TM_FILENAME_BASE&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;sidebar: false</span></span>
<span class="line"><span style="color:#e1e4e8;">date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;---&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;new hugo post header&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;prefix&quot;: &quot;hugo&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;body&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">      &quot;---&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;title: $TM_FILENAME_BASE&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;sidebar: false</span></span>
<span class="line"><span style="color:#24292e;">date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;---&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>因为vscode默认没有这个模板，不像其它c、cpp片断，单是完成这一步好不好使。还需要在用户的settings.json文件中添加：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;[markdown]&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;editor.renderWhitespace&quot;: &quot;all&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;editor.quickSuggestions&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;other&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;comments&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;strings&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;editor.acceptSuggestionOnEnter&quot;: &quot;on&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;[markdown]&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;editor.renderWhitespace&quot;: &quot;all&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;editor.quickSuggestions&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;other&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;comments&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;strings&quot;: true</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;editor.acceptSuggestionOnEnter&quot;: &quot;on&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,16);function u(y,E,d,q,g,h){return n(),p("div",null,[t,c,r,l(" ::: "),i])}const k=a(e,[["render",u]]);export{m as __pageData,k as default};
