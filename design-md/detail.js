(function () {
  var $ = function (s) { return document.querySelector(s); };
  var text = '', cats = {}, item = null, tok = null, fmt = 'css';
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function toast(t) {
    var el = document.createElement('div'); el.className = 'toast'; el.textContent = t; el.setAttribute('role', 'status');
    document.body.appendChild(el); setTimeout(function () { el.remove(); }, 1600);
  }
  function copy(t, done) {
    var fb = function () {
      var ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} ta.remove();
      ok ? done() : toast('복사하지 못했어요. 직접 선택해 주세요.');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, fb); else fb();
  }
  function save(name, body, type) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([body], { type: type || 'text/plain' }));
    a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function slugify(s, used) {
    var b = s.toLowerCase().replace(/[^\w가-힣]+/g, '-').replace(/^-|-$/g, '') || 'sec', k = b, n = 2;
    while (used[k]) k = b + '-' + n++;
    used[k] = 1; return 'h-' + k;
  }
  function key(s, used) {
    var b = String(s).toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9가-힣]+/g, '-').replace(/^-+|-+$/g, '') || 'token', k = b, n = 2;
    while (used[k]) k = b + '-' + n++;
    used[k] = 1; return k;
  }

  // ---- color helpers: pick readable ink on a swatch, flag near-background swatches
  function rgb(v) {
    var m = /^#([0-9a-f]{3,8})$/i.exec(v);
    if (m) {
      var h = m[1]; if (h.length <= 4) h = h.split('').map(function (c) { return c + c; }).join('');
      return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16), h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1];
    }
    m = /rgba?\(([^)]*)\)/i.exec(v);
    if (m) { var p = m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat); return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1]; }
    return null;
  }
  function lum(c) {
    var a = c.slice(0, 3).map(function (x) { x /= 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }
  function ink(v) { var c = rgb(v); if (!c || c[3] < 0.5) return '#fff'; return lum(c) > 0.42 ? '#111' : '#fff'; }

  // ---- style tab
  var LIMIT = 12, TYPE_LIMIT = 8, copyTimer;
  var COPY_LABEL = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/></svg>DESIGN.md 복사';
  function colorCard(c) {
    var dark = c.dark ? '<span class="dk" style="background:' + esc(c.dark) + '" title="다크 ' + esc(c.dark) + '"></span>' : '';
    return '<button type="button" class="cc" data-hex="' + esc(c.value) + '">' +
      '<span class="cs" style="background:' + esc(c.value) + ';color:' + ink(c.value) + '"><span class="aa">Aa</span>' + dark + '</span>' +
      '<span class="cn">' + esc(c.name) + '</span>' +
      '<span class="cv">' + esc(c.value) + (c.dark ? '<em>다크 ' + esc(c.dark) + '</em>' : '') + '</span>' +
      (c.role ? '<span class="cr">' + esc(c.role) + '</span>' : '') +
      '</button>';
  }
  function renderStyle() {
    var h = '';
    var hasRules = tok.strengths && tok.strengths.length;
    h += '<section class="ss" id="s-strength"><div class="sh"><h2>' + (hasRules ? '핵심 규칙' : '한 줄 요약') + '</h2>' + (hasRules ? '<span class="mono">눌러서 자세히</span>' : '') + '</div>' +
      '<p class="summary">' + esc(item.desc) + '</p>';
    if (hasRules) {
      h += '<ol class="str">';
      tok.strengths.forEach(function (x, i) {
        h += '<li><button type="button" class="str-row" aria-expanded="false"><span class="no" aria-hidden="true">' + (i + 1) + '</span>' +
          '<span class="str-t"><b>' + esc(x.title) + '</b>' + (x.why ? '<span class="why">' + esc(x.why) + '</span>' : '') + '</span></button></li>';
      });
      h += '</ol>';
      if (tok.learn && tok.learn.length) h += '<h3 class="learn-h">내 작업에 가져갈 점</h3><ul class="learn">' + tok.learn.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    }
    h += '</section>';
    var n = tok.colors.reduce(function (a, g) { return a + g.items.length; }, 0);
    if (n) {
      h += '<section class="ss" id="s-color"><div class="sh"><h2>색상</h2><span class="mono">' + n + '개 · 누르면 값 복사</span></div>';
      tok.colors.forEach(function (g, gi) {
        h += '<h3 class="gl">' + esc(g.name) + ' <span>' + g.items.length + '</span></h3><div class="cgrid">';
        g.items.forEach(function (c, i) { h += i < LIMIT ? colorCard(c) : ''; });
        h += '</div>';
        if (g.items.length > LIMIT) h += '<button type="button" class="more" data-more-color="' + gi + '">' + (g.items.length - LIMIT) + '개 더 보기</button>';
      });
      h += '</section>';
    } else {
      h += '<section class="ss"><div class="sh"><h2>색상</h2></div><p class="empty-note">아직 확인된 색값이 없어요. 문서 탭에서 조사 상황을 볼 수 있어요.</p></section>';
    }

    if (tok.type.length) {
      var sample = 'AI디자인 공부는 실비아랩';
      var fam = tok.fonts.length ? tok.fonts : [];
      h += '<section class="ss" id="s-type"><div class="sh"><h2>타이포그래피</h2><span class="mono">' + tok.type.length + '단계</span></div>';
      if (fam.length) h += '<div class="fonts">' + fam.map(function (f, i) { return '<span class="font"><b style="font-family:\'' + esc(f) + '\',var(--sans)">Ag 가</b><span>' + esc(f) + '</span><small>' + (i === 0 ? '대표 글꼴' : '보조 글꼴') + '</small></span>'; }).join('') + '</div>';
      h += '<div class="tbox">';
      tok.type.forEach(function (t, i) {
        var meta = [t.size + 'px', t.weight || '–', t.lh || '–'].join(' · ');
        var fs = t.family ? "'" + t.family.replace(/'/g, '') + "',var(--sans)" : (fam[0] ? "'" + fam[0].replace(/'/g, '') + "',var(--sans)" : 'var(--sans)');
        h += '<div class="trow' + (i >= TYPE_LIMIT ? ' extra' : '') + '"><div class="tm"><span class="tn">' + esc(t.name) + (t.role ? ' <i>' + esc(t.role) + '</i>' : '') + '</span><span class="tv">' + meta + '</span></div>' +
          '<p class="ts" style="font-size:' + t.size + 'px;font-weight:' + (t.weight || 400) + ';line-height:' + (t.lh || 1.3) + ';font-family:' + esc(fs) + '">' + sample + '</p></div>';
      });
      if (tok.type.length > TYPE_LIMIT) h += '<button type="button" class="tmore" data-more-type>모든 단계 보기 (' + tok.type.length + ')</button>';
      h += '</div><p class="note">크기 · 굵기 · 행간(배수) 순서예요. 전용 글꼴은 이 페이지에 없어서 비슷한 글꼴로 보여요.</p></section>';
    }

    if (tok.radius.length) {
      h += '<section class="ss" id="s-radius"><div class="sh"><h2>모서리</h2><span class="mono">' + tok.radius.length + '단계</span></div><div class="rgrid">';
      tok.radius.forEach(function (r) {
        var v = /9999|50%/.test(r.value) ? '999px' : r.value;
        h += '<div class="rc"><span class="rb" style="border-radius:' + esc(v) + '"></span><b>' + esc(r.name) + '</b><span class="mono">' + esc(r.value) + '</span></div>';
      });
      h += '</div></section>';
    }

    if (tok.spacing.length) {
      h += '<section class="ss" id="s-space"><div class="sh"><h2>간격</h2><span class="mono">' + tok.spacing.length + '단계</span></div><div class="sp">';
      tok.spacing.forEach(function (s) {
        var px = parseFloat(s.value) || 0;
        h += '<div class="sprow"><span class="mono sn">' + esc(s.name === s.value ? '' : s.name) + '</span><span class="sbar" style="width:' + Math.min(px, 240) + 'px"></span><span class="mono">' + esc(s.value) + '</span></div>';
      });
      h += '</div></section>';
    }
    $('#p-style').innerHTML = h;
  }

  // ---- code tab
  function buildCode() {
    var used = {}, out = [], dark = [], t = tok;
    var colors = [];
    var seen = {};
    t.colors.forEach(function (g) { g.items.forEach(function (c) { var id = c.name + '|' + c.value; if (seen[id]) return; seen[id] = 1; colors.push({ k: key(c.name, used), v: c.value, d: c.dark }); }); });
    var u2 = {}, types = t.type.map(function (x) { return { k: key(x.name, u2), s: x.size, w: x.weight, l: x.lh }; });
    var u3 = {}, rads = t.radius.map(function (x) { return { k: key(x.name, u3), v: x.value }; });
    var u4 = {}, sps = t.spacing.map(function (x) { return { k: key(x.name, u4), v: x.value }; });
    var head = '/* ' + item.name + ' · SylviaLab DESIGN.md에서 뽑은 토큰 */\n';
    if (fmt === 'css') {
      out.push(head + ':root {');
      colors.forEach(function (c) { out.push('  --color-' + c.k + ': ' + c.v + ';'); if (c.d) dark.push('    --color-' + c.k + ': ' + c.d + ';'); });
      if (t.fonts[0]) out.push('  --font-sans: "' + t.fonts[0] + '", system-ui, sans-serif;');
      types.forEach(function (x) { out.push('  --text-' + x.k + ': ' + x.s + 'px;'); if (x.l) out.push('  --leading-' + x.k + ': ' + x.l + ';'); if (x.w) out.push('  --weight-' + x.k + ': ' + x.w + ';'); });
      rads.forEach(function (x) { out.push('  --radius-' + x.k + ': ' + x.v + ';'); });
      sps.forEach(function (x) { out.push('  --space-' + x.k + ': ' + x.v + ';'); });
      out.push('}');
      if (dark.length) out.push('\n@media (prefers-color-scheme: dark) {\n  :root {\n' + dark.join('\n') + '\n  }\n}');
      return out.join('\n');
    }
    if (fmt === 'tw') {
      out.push(head + '@import "tailwindcss";\n\n@theme {');
      colors.forEach(function (c) { out.push('  --color-' + c.k + ': ' + c.v + ';'); });
      if (t.fonts[0]) out.push('  --font-sans: "' + t.fonts[0] + '", system-ui, sans-serif;');
      types.forEach(function (x) { out.push('  --text-' + x.k + ': ' + (x.s / 16).toFixed(4).replace(/0+$/, '').replace(/\.$/, '') + 'rem;'); if (x.l) out.push('  --text-' + x.k + '--line-height: ' + x.l + ';'); if (x.w) out.push('  --text-' + x.k + '--font-weight: ' + x.w + ';'); });
      rads.forEach(function (x) { out.push('  --radius-' + x.k + ': ' + x.v + ';'); });
      sps.forEach(function (x) { out.push('  --spacing-' + x.k + ': ' + x.v + ';'); });
      out.push('}');
      colors.forEach(function (c) { if (c.d) dark.push('    --color-' + c.k + ': ' + c.d + ';'); });
      if (dark.length) out.push('\n@layer base {\n  @media (prefers-color-scheme: dark) {\n    :root {\n' + dark.map(function (l) { return '  ' + l; }).join('\n') + '\n    }\n  }\n}');
      return out.join('\n');
    }
    var j = { $description: item.name + ' · SylviaLab DESIGN.md', color: {}, typography: {}, radius: {}, spacing: {} };
    colors.forEach(function (c) { j.color[c.k] = { $type: 'color', $value: c.v }; if (c.d) j.color[c.k].$extensions = { dark: c.d }; });
    types.forEach(function (x) { j.typography[x.k] = { $type: 'typography', $value: { fontFamily: t.fonts[0] || 'system-ui', fontSize: x.s + 'px', fontWeight: x.w || 400, lineHeight: x.l || 1.3 } }; });
    rads.forEach(function (x) { j.radius[x.k] = { $type: 'dimension', $value: x.v }; });
    sps.forEach(function (x) { j.spacing[x.k] = { $type: 'dimension', $value: x.v }; });
    ['color', 'typography', 'radius', 'spacing'].forEach(function (k) { if (!Object.keys(j[k]).length) delete j[k]; });
    return JSON.stringify(j, null, 2);
  }
  function renderCode() {
    $('#code-out').textContent = tok ? buildCode() : '토큰을 불러오지 못했어요.';
    document.querySelectorAll('#code-seg button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.fmt === fmt); });
  }

  function setTab(id) {
    var tabOf = id === 'raw' ? 'doc' : id;
    ['style', 'doc', 'code'].forEach(function (n) { $('#t-' + n).setAttribute('aria-selected', n === tabOf); });
    ['style', 'doc', 'code', 'raw'].forEach(function (n) { $('#p-' + n).hidden = n !== id; });
    $('#doc-mode').hidden = tabOf !== 'doc';
    document.querySelectorAll('#doc-mode button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.mode === id); });
    $('#toc').hidden = id !== 'doc';
    $('.reader').classList.toggle('with-toc', id === 'doc');
  }

  function show(it) {
    item = it;
    document.title = it.name + ' DESIGN.md · SylviaLab';
    $('#d-name').textContent = it.name;
    $('#d-lede').textContent = it.name + '의 색·글자·모서리 규칙을 한 파일에 정리했어요. 복사해서 AI 도구에 붙여 넣으면 이 톤으로 화면을 만들어요.';
    $('#d-region').textContent = it.region === 'ko' ? '국내' : '해외';
    $('#d-cat').textContent = cats[it.category] || it.category;
    $('#d-size').textContent = (it.bytes / 1024).toFixed(1) + ' KB';
    $('#d-basis').innerHTML = it.region === 'ko'
      ? '근거 · ' + esc(it.basis || '확인 필요') + ' <button type="button" class="link" data-refs>참고 자료 보기</button>'
      : '출처 · <a class="link" href="https://github.com/VoltAgent/awesome-design-md" rel="noopener" target="_blank">VoltAgent/awesome-design-md</a> (MIT)';
    clearTimeout(copyTimer); $('#b-copy').classList.remove('done'); $('#b-copy').innerHTML = COPY_LABEL;
    $('#b-dl').href = 'md/' + it.slug + '.md';
    $('#b-dl').setAttribute('download', it.slug.replace(/^(ko|en)-/, '') + '-DESIGN.md');
    $('#b-src').href = it.source;
    if (window.SylviaLead) window.SylviaLead.endCard($('#lead-end'));
    $('#d-credit').innerHTML = '원본 · <a href="' + esc(it.source) + '" rel="noopener" target="_blank">' + esc(it.license) + '</a>';

    fetch('tokens/' + it.slug + '.json').then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (t) {
      tok = t; renderStyle(); renderCode();
    }).catch(function () {
      tok = null; $('#p-style').innerHTML = '<p class="empty-note">스타일 미리보기를 불러오지 못했어요. 문서 탭을 봐 주세요.</p>'; renderCode();
    });

    fetch('md/' + it.slug + '.md').then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (t) {
      text = t;
      $('#p-raw').textContent = t;
      var m = t.match(/^---\n([\s\S]*?)\n---\n/), fm = m ? m[1] : '', body = m ? t.slice(m[0].length) : t;
      var html = window.marked ? marked.parse(body, { gfm: true }) : '<pre>' + esc(body) + '</pre>';
      if (window.DOMPurify) html = DOMPurify.sanitize(html);
      var head = fm ? '<details class="fm"><summary>토큰 (YAML 머리말) 펼치기</summary><pre><code>' + esc(fm) + '</code></pre></details>' : '';
      $('#p-doc').innerHTML = head + html;
      var used = {}, toc = '<p>목차</p>';
      document.querySelectorAll('#p-doc h2').forEach(function (h) { h.id = slugify(h.textContent, used); toc += '<a href="#' + it.slug + '" data-go="' + h.id + '">' + esc(h.textContent) + '</a>'; });
      $('#toc').innerHTML = toc;
    }).catch(function () { $('#p-doc').innerHTML = '<p>파일을 불러오지 못했어요. 새로고침해 주세요.</p>'; });
  }

  document.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    if (go) { e.preventDefault(); var t = document.getElementById(go.dataset.go); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    var cc = e.target.closest('.cc');
    if (cc) { copy(cc.dataset.hex, function () { toast(cc.dataset.hex + ' 복사했어요'); }); return; }
    var mc = e.target.closest('[data-more-color]');
    if (mc) {
      var g = tok.colors[+mc.dataset.moreColor], grid = mc.previousElementSibling;
      grid.insertAdjacentHTML('beforeend', g.items.slice(LIMIT).map(colorCard).join('')); mc.remove(); return;
    }
    var mt = e.target.closest('[data-more-type]');
    if (mt) { mt.parentNode.classList.add('open'); mt.remove(); return; }
    var seg = e.target.closest('#code-seg button');
    if (seg) { fmt = seg.dataset.fmt; renderCode(); return; }
    if (e.target.closest('#code-copy')) { copy($('#code-out').textContent, function () { toast('코드를 복사했어요'); }); return; }
    if (e.target.closest('#code-dl')) {
      var base = item.slug.replace(/^(ko|en)-/, '');
      save(base + (fmt === 'json' ? '.tokens.json' : fmt === 'tw' ? '.theme.css' : '.tokens.css'), $('#code-out').textContent, fmt === 'json' ? 'application/json' : 'text/css');
      return;
    }
    if (e.target.closest('#b-copy')) {
      var b = $('#b-copy');
      if (!text) return;
      copy(text, function () { if (window.SylviaLead) window.SylviaLead.afterCopy(document.querySelector('.actions')); b.classList.add('done'); b.textContent = '복사됨 · AI 도구에 붙여 넣으세요'; clearTimeout(copyTimer); copyTimer = setTimeout(function () { b.classList.remove('done'); b.innerHTML = COPY_LABEL; }, 2200); });
      return;
    }
    var sr = e.target.closest('.str-row');
    if (sr) { var o = sr.getAttribute('aria-expanded') !== 'true'; sr.setAttribute('aria-expanded', o); return; }
    var dm = e.target.closest('#doc-mode button');
    if (dm) { setTab(dm.dataset.mode); return; }
    if (e.target.closest('[data-refs]')) {
      setTab('doc');
      var hs = document.querySelectorAll('#p-doc h2'), ref = null;
      hs.forEach(function (x) { if (/참고|Reference|Sources?/i.test(x.textContent)) ref = x; });
      if (ref) ref.scrollIntoView({ behavior: 'smooth', block: 'start' }); else $('.tabs').scrollIntoView({ behavior: 'smooth' });
      return;
    }
    var tab = e.target.closest('[role="tab"]');
    if (tab) setTab(tab.id.slice(2));
  });

  function load() {
    var slug = (location.hash || '').slice(1);
    fetch('catalog.json').then(function (r) { return r.json(); }).then(function (data) {
      cats = data.categories;
      var it = data.items.filter(function (i) { return i.slug === slug; })[0];
      if (!it) { $('#d-name').textContent = '찾는 DESIGN.md가 없어요'; $('#p-style').innerHTML = '<p><a href="./">전체 목록</a>에서 다시 골라 주세요.</p>'; return; }
      window.scrollTo(0, 0); setTab('style'); show(it);
    });
  }
  window.addEventListener('hashchange', function () { if (/^#(ko|en)-/.test(location.hash)) load(); });
  load();
})();
