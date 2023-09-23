import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.25d5caa7.js";const A=JSON.parse('{"title":"编写干净、清晰代码的9个小技巧","description":"","frontmatter":{"sidebar":false,"date":"2022-10-10T00:00:00.000Z","category":["编程"],"tags":["编码规范"]},"headers":[],"relativePath":"posts/2022/1010.md","filePath":"posts/2022/1010.md"}'),l={name:"posts/2022/1010.md"},o=p(`<h1 id="编写干净、清晰代码的9个小技巧" tabindex="-1">编写干净、清晰代码的9个小技巧 <a class="header-anchor" href="#编写干净、清晰代码的9个小技巧" aria-label="Permalink to &quot;编写干净、清晰代码的9个小技巧&quot;">​</a></h1><p><strong>问题</strong></p><p>如题，以下这些编程技巧，可以让代码编写的更清晰，使初学者看起来更像一位老手。让初学者代码看起来老练的技巧，并不是什么奇巧淫技，而是谁都能看得懂、学得会的，很平常的技巧。相反，在代码中为了展示水平而刻意显得与众不同，这是不自信的表现，也是初学者的主要特征之一，反而自爆了初学者的短板。对于初学者，学会这些小技巧足矣。</p><hr><p>软件开发不仅仅是编写代码，更是编写团队其他开发人员可以轻松理解的简洁代码。下面提到的 9 个技巧，它们将帮助你编写更清晰易读的代码。</p><blockquote><p>这些技巧并不分什么编程语言，基本适用于所有编程语言，尤其是与 C 语言风格一致的语言。</p></blockquote><p>（1）使用描述性名称</p><p>干净的代码很容易别人理解。在编写代码时，我们在局部代码中使用 i、j、k 等短名称，但有时候我们更应该使用有意义的描述词，来声明变量、参数和函数名称等。</p><p>例如，不要这样写：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">it</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">it</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">;</span></span></code></pre></div><p>而要这样：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">iterations</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">iterations</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">;</span></span></code></pre></div><p>（2）使用适当的空格和缩进</p><p>我们程序员中的许多人认为，使用空格和缩进会影响编译器的速度，但这是不正确的，在编译型语言中它们的影响可以忽略不计，在解释型语言中的影响也不高于因代码不易读而带来的负面影响。</p><p>你应该在代码中使用空格和适当的缩进，因为这会使你的代码更容易阅读与理解。</p><blockquote><p><strong>像艺术家一样，像国画或篆刻一样，把代码安排得错落有致。</strong></p></blockquote><p>举个例子，不要这样做：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;LIYI&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">start</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;LIYI&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> code </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>而要这样：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;LIYI&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> code </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">start</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;LIYI&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> code </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>除非你想故意写出自己不能被团队随意替换的代码，否则在任何时候，保持缩进和空格都是一条基础黄金准则。与其相关的还有空行，保持空行除了让代码行数增加，更主要的能让代码清晰。</p></blockquote><p>（3）尽量减少函数中的参数个数</p><p>因为我们在努力使我们的代码清晰，因此我们应该尽量编写更易于阅读的函数，我们应该通过减少形参的个数以使函数变小，特别当这个函数及它的同类函数有不定数目参数的时候。如果我们需要使用两个或三个以上的参数，那么我们可以声明一个参数对象来代替。</p><p>例如，不要这样做：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">email</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">password</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">phone</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">address</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">intresets</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">email</span><span style="color:#24292E;">, </span><span style="color:#E36209;">password</span><span style="color:#24292E;">, </span><span style="color:#E36209;">phone</span><span style="color:#24292E;">, </span><span style="color:#E36209;">address</span><span style="color:#24292E;">, </span><span style="color:#E36209;">intresets</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>可以这样做：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在 options 实参对象中，可以传递 name、email 等信息。</p><blockquote><p>过度简化参数会让函数的调用条件不明确，简化参数其实一把双刃剑。在开始编写代码的时候，初学者可以简单遵照这样一条标准：凡函数有三个以上的参数，并且这个函数也不是高频调用的函数，就可以将其参数对象化。</p><p>在小程序的平台 API 中，由于基本每个接口都有三个以上的参数，所以所有接口的参数，都是以一个 options 参数对象定义的。</p></blockquote><p>（4）每个函数仅负责执行一个任务</p><p>多个任务放在一起处理，这很棒，但在编写清晰的代码方面不是。在许多情况下，开发人员会创建一个有能力执行多个任务的函数，但我们一般需要避免这种情况，因为这通常会使其他人难以理解。通过为一项任务创建一个函数，我们可以更轻松地组织复杂的代码。</p><blockquote><p>某些任务，是需要分别用一个函数完成的；某类任务，是可以用一个函数完成的。代码就是要智能、批量处理问题的，如果不能这样做，还写代码干什么？有些初学者写代码，在解决某些问题时，用了很多 if else，如下所示，有时候嵌套还很深，这种情况完全可以智能处理一下，用一套代码处理一类问题就可以了，例如针对下面的代码利用 switch 语句等技巧改写。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onClick</span><span style="color:#E1E4E8;">(View v) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v.</span><span style="color:#B392F0;">getId</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button1) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, StandardActivity.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button2) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTopActivity.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button3) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTaskActivity.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button4) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleInstanceActivity.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button4) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleInstanceActivity.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button5) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTopActivity.SingleTopActivity1.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button6) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTopActivity.SingleTopActivity2.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button7) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTopActivity.SingleTopActivity3.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button8) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTopActivity.SingleTopActivity4.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button9) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTopActivity.SingleTopActivity5.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button10) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTaskActivity.SingleTaskActivity1.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button11) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTaskActivity.SingleTaskActivity2.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button12) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTaskActivity.SingleTaskActivity3.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (id </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> R.id.button13) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">startActivity</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Intent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, SingleTaskActivity.SingleTaskActivity4.class));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onClick</span><span style="color:#24292E;">(View v) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v.</span><span style="color:#6F42C1;">getId</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button1) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, StandardActivity.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button2) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTopActivity.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button3) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTaskActivity.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button4) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleInstanceActivity.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button4) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleInstanceActivity.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button5) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTopActivity.SingleTopActivity1.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button6) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTopActivity.SingleTopActivity2.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button7) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTopActivity.SingleTopActivity3.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button8) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTopActivity.SingleTopActivity4.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button9) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTopActivity.SingleTopActivity5.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button10) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTaskActivity.SingleTaskActivity1.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button11) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTaskActivity.SingleTaskActivity2.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button12) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTaskActivity.SingleTaskActivity3.class));</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (id </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> R.id.button13) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">startActivity</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Intent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, SingleTaskActivity.SingleTaskActivity4.class));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>但有时候又不是这样，有时候我们为了让代码更直观，故意不使用 switch，而不厌其烦地使用大量 if else，这种情况一般发生在项目配置代码上。这类代码仅仅执行一次，它们本来就像配置文件，写得像配置文件也不足奇怪了。</p><p>不要迷信任何规则，包括这篇文章里提到的规则。所有规则都有不使用的场景，这篇描述的仅是针对初学者，在大多数编程场景下适用的技巧。</p></blockquote><p>（5）尽量减少函数体的大小</p><p>小型函数比大型函数，或包含大量代码的函数更容易理解。如果你正在处理大型项目，你可以使用类来封装函数，尤其是那些具有共同属性或同属一类的函数。</p><p>（6）尽量减少一行中的字符</p><p>因为我们正在编写易于阅读和理解的代码，因此我们需要减少每行代码行中的字符。这样我们的代码可以很容易适应屏幕，不需要水平滚动就可以查看代码。也不需要换行，因为在这种情况下阅读者需要左右晃动脑袋。</p><blockquote><p>每行多少字符没有硬性标准，一般的说法是每行不超过 70 个字符，但现在程序员的浏览器尺寸越来越大，一行在不换行的情况下，能够容纳的字符也越来越多，所以具体字符轻视自己或团队的情况而定。</p></blockquote><p>（7）提交代码时，总是描述提交的原因</p><p>你应该始终定义为什么要在 github 仓库中提交代码，就是每次提交代码时，都编写一下参数<code>-m</code>。这个习惯可以让我们了解几个月前代码中存在哪些错误，以及我们对代码做过哪些更改。你应该用 4 到 10 个词来定义描述信息，或者你也可以使用 1 个词轻松定义，总之要能够让自己很快想起修改的原因就好。</p><p>（8）避免代码重复</p><p>专注于创建可重复使用的代码。</p><p>大多数初学者不会这样做——初学者一般把精力放在了代码能用上，但至少 70% 的初学者代码应该是可以重用重构的。这可以减少我们代码的大小。简单的方法是，你可以将你的工作分解为小任务，并为每个小任务创建一个单独的函数。</p><blockquote><p>面向对象编程中有一个 DRY 原则，它是 Don&#39;t repeat yourself 的简写，意思是<strong>不要重复自己</strong>。重复编写已经编过的代码，有时候会让程序员感到羞赧，很多聪明的程序员不会因为违反 DRY 原则而编写愚蠢的代码，反而会因为避免这种愚蠢而陷入<strong>过度设计</strong>的泥沼，这种情况同样也值得警惕。</p><p>对于初学者而言，简单的规则是，只要发现有三处代码一样，甚至只是十分相似，就可以考虑将它们重构为一个函数。至于将这个函数放在哪里，放在需要它的最小范围里。能放在一个类里，就不要放在包（package）里；能放在一个包里，就不要放在一个模块（module）里，总之范围尽量缩小就是。</p></blockquote><p>（9）不要过度注释</p><p>通过以上的技巧，由于我们已经给了变量、参数、函数名以有意义的描述，因此代码中一般不需要注释。仅在使用某些第三方 API、应用程序、模块或处理外部调用请求时，才需要编写注释。要避免因编写注释，而使代码显得累赘冗余。</p><blockquote><p>程序员很容易从一个极端走向另一个极端，由从来不写注释变得为每行代码、每个函数都写注释，这没有必要。阅读注释也需要消耗精力，除非你想故意为某些代码留下「烟雾弹」，例如「此行代码千万别动，动它的人全都开除了」，否则不要为了写注释而写注释。</p></blockquote><p>通过编写其他人易于理解的简洁代码，你可以快速成为一名出色的程序员；通过阅读其他人编写的优秀代码，你可以迅速领会和掌握这些技巧。</p><p><strong>总结</strong></p><p>以上这些只是简单的初学者技巧，学会它们可以避免自己看起来很菜，甚至看起来像一个有经验的老手，就像一个人他的长相无论是否普通，但需要他把个人卫生打扫好，衣着干净整洁，给人的整体印象总不会太差。后续具体到每一门编程语言，都有专门的编程规范，可以再进一步具体地学习加强。</p><p>参考链接</p><ul><li><a href="https://programmersallaroundtheworld.quora.com/9-tips-for-writing-clean-code" target="_blank" rel="noreferrer">https://programmersallaroundtheworld.quora.com/9-tips-for-writing-clean-code</a></li><li><a href="https://zhuanlan.zhihu.com/p/20573365" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/20573365</a></li></ul>`,51),t=[o];function e(c,r,y,E,i,F){return n(),a("div",null,t)}const v=s(l,[["render",e]]);export{A as __pageData,v as default};