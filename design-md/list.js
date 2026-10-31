(function () {
  var state = { q: '', region: 'all', cat: 'all', items: [], cats: {}, dir: 1 };
  var $ = function (s) { return document.querySelector(s); };
  var list = $('#list'), count = $('#count');

  function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function kb(b) { return (b / 1024).toFixed(b < 10240 ? 1 : 0) + ' KB'; }
  function toast(t) {
    var el = document.createElement('div'); el.className = 'toast'; el.textContent = t; el.setAttribute('role', 'status');
    document.body.appendChild(el); setTimeout(function () { el.remove(); }, 1600);
  }
  function copyText(text, btn) {
    var ok = function () { if (btn) copyText.done(btn); else toast('DESIGN.md를 복사했어요'); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(ok, function () { fallback(text); ok(); });
    } else { fallback(text); ok(); }
  }
  copyText.done = function (btn) {
    btn.classList.add('done'); btn.textContent = '복사됨';
    setTimeout(function () { btn.classList.remove('done'); btn.innerHTML = COPY_LABEL; }, 1600);
    toast('DESIGN.md를 복사했어요');
  };
  function fallback(text) {
    var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} ta.remove();
  }

  function matches(it) {
    if (state.region !== 'all' && it.region !== state.region) return false;
    if (state.cat !== 'all' && it.category !== state.cat) return false;
    if (!state.q) return true;
    var q = state.q.toLowerCase();
    return (it.name + ' ' + it.desc + ' ' + (state.cats[it.category] || '') + ' ' + it.slug).toLowerCase().indexOf(q) > -1;
  }

  function renderChips() {
    var pool = state.items.filter(function (it) { return state.region === 'all' || it.region === state.region; });
    var counts = {}; pool.forEach(function (it) { counts[it.category] = (counts[it.category] || 0) + 1; });
    var keys = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
    if (state.cat !== 'all' && !counts[state.cat]) state.cat = 'all';
    var html = '<option value="all">전체 분야</option>';
    keys.forEach(function (k) { html += '<option value="' + k + '"' + (state.cat === k ? ' selected' : '') + '>' + esc(state.cats[k] || k) + ' ' + counts[k] + '</option>'; });
    $('#cat').innerHTML = html; $('#cat').value = state.cat;
  }

  // Card helpers. Key color = the document's primary button color, or its first main color
  // when the button is white or pale gray. Nothing here is made up: values come from catalog.json.
  function ink(hex) {
    var m = /^#([0-9a-f]{6})/i.exec(hex || ''); if (!m) return '#ffffff';
    var c = [0, 2, 4].map(function (i) { var x = parseInt(m[1].substr(i, 2), 16) / 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2] > 0.4 ? '#111111' : '#ffffff';
  }
  function pale(hex) {
    var m = /^#([0-9a-f]{6})$/i.exec(hex || ''); if (!m) return true;
    var n = parseInt(m[1], 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    return Math.min(r, g, b) > 225 && Math.max(r, g, b) - Math.min(r, g, b) < 20;
  }
  function keyColor(it, pv) {
    var b = pv.btn && pv.btn.bg;
    if (b && /^#[0-9a-f]{6}$/i.test(b) && !pale(b)) return b;
    // no usable button: the first clearly colored main color, else the most saturated one
    var chroma = function (x) { var n = parseInt(x.slice(1), 16); var r = n >> 16, g = (n >> 8) & 255, bl = n & 255; return Math.max(r, g, bl) - Math.min(r, g, bl); };
    var first = it.colors.filter(function (x) { return /^#[0-9a-f]{6}$/i.test(x) && !pale(x) && chroma(x) > 60; })[0];
    if (first) return first;
    var best = null, bc = -1;
    it.colors.forEach(function (x) {
      var m = /^#([0-9a-f]{6})$/i.exec(x); if (!m || pale(x)) return;
      var n = parseInt(m[1], 16), r = n >> 16, g = (n >> 8) & 255, bl = n & 255, ch = Math.max(r, g, bl) - Math.min(r, g, bl);
      if (ch > bc) { bc = ch; best = x; }
    });
    return best || '#2b2f36';
  }
  function mono(name) { var m = /^[0-9]+/.exec(name); return m ? m[0].slice(0, 2) : name.charAt(0).toUpperCase(); }
  var COPY_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/></svg>';
  var COPY_LABEL = COPY_ICON + '가이드 복사';

  // No result: if the filters hide matches, offer to drop them; otherwise offer a request.
  function emptyHTML() {
    if (!state.q) return '<li class="empty">이 조건에 맞는 곳이 없어요.</li>';
    var keep = { region: state.region, cat: state.cat };
    state.region = 'all'; state.cat = 'all';
    var hidden = state.items.filter(matches).length;
    state.region = keep.region; state.cat = keep.cat;
    if (hidden) return '<li class="empty">이 필터에서는 없지만 전체에서는 ' + hidden + '개가 나와요.<br><button type="button" class="req-all" data-clear-filters>전체에서 보기</button></li>';
    var tips = ['금융·결제', 'AI', '커머스·서비스'];
    if (window.SylviaRequest) return window.SylviaRequest.emptyHTML(state.q, tips);
    return '<li class="empty">찾는 결과가 없어요. 다른 이름이나 "금융·결제", "AI"처럼 분야로 찾아보세요.</li>';
  }

  function render() {
    var rows = state.items.filter(matches).sort(function (a, b) {
      // 국내 먼저, then by name; the sort button flips the name order
      if (a.region !== b.region) return a.region === 'ko' ? -1 : 1;
      return state.dir * a.name.localeCompare(b.name, 'ko');
    });
    count.textContent = rows.length + '개의 디자인 가이드';
    if (!rows.length) { list.innerHTML = emptyHTML(); return; }
    var html = rows.map(function (it) {
      var href = 'detail.html#' + it.slug, pv = it.pv || {}, key = keyColor(it, pv), keyInk = ink(key);
      var bg = pv.bg && /^#[0-9a-f]{6}$/i.test(pv.bg) ? pv.bg : '#ffffff', txt = ink(bg);
      var btn = pv.btn && pv.btn.bg ? pv.btn : { bg: key, fg: keyInk, r: null };
      var dots = it.colors.slice(0, 4).map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('');
      return '<li class="card">' +
        '<div class="c-info">' +
        '<a class="c-head" href="' + href + '">' + (it.logo ? '<span class="c-mono c-logo" aria-hidden="true"><img src="' + esc(it.logo) + '" alt="" loading="lazy"></span>' : '<span class="c-mono" aria-hidden="true" style="background:' + key + ';color:' + keyInk + '">' + esc(mono(it.name)) + '</span>') +
        '<span class="c-tt"><b class="name">' + esc(it.name) + '</b><span class="c-sub">' + esc(pv.point || it.desc) + '</span></span></a>' +
        '<span class="c-dots" aria-hidden="true">' + dots + '</span>' +
        '<span class="c-act"><a class="c-more" href="' + href + '">자세히 보기<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg></a>' +
        '<button class="copy c-copy" data-slug="' + it.slug + '" aria-label="' + esc(it.name) + ' DESIGN.md 복사" style="background:' + key + ';color:' + keyInk + '">' + COPY_LABEL + '</button></span>' +
        '</div>' +
        '<a class="c-pv" href="' + href + '" tabindex="-1" aria-hidden="true" style="background:' + bg + ';color:' + txt + '">' +
        '<b>AI디자인,<br> 실비아랩</b><span class="c-pvs">아이디어를 나만의 서비스로 만들어 보세요.</span>' +
        '<span class="c-btn" style="background:' + btn.bg + ';color:' + (btn.fg || ink(btn.bg)) + ';border-radius:' + (btn.r || '8px') + (pale(btn.bg) && pale(bg) ? ';box-shadow:inset 0 0 0 1px rgba(0,0,0,.18)' : '') + '">시작하기</span>' +
        '<span class="c-link" style="color:' + (pale(bg) === pale(key) ? txt : key) + '">더 알아보기 →</span></a>' +
        '</li>';
    });
    // free guide card sits in the 9th slot so people meet it while browsing, never on arrival
    var lead = window.SylviaLead ? window.SylviaLead.listCard() : '';
    if (lead) html.splice(Math.min(8, html.length), 0, lead);
    if (window.SylviaRequest) html.push(window.SylviaRequest.footHTML());
    list.innerHTML = html.join('');
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-clear-filters]')) {
      state.region = 'all'; state.cat = 'all';
      document.querySelectorAll('.scope button').forEach(function (x) { x.setAttribute('aria-pressed', x.dataset.region === 'all'); });
      renderChips(); render(); return;
    }
    var tr = e.target.closest('[data-try]');
    if (tr) { input.value = tr.dataset.try; state.q = input.value; render(); input.focus(); return; }
    var so = e.target.closest('#sort');
    if (so) {
      state.dir = -state.dir;
      so.classList.toggle('desc', state.dir < 0);
      so.setAttribute('aria-label', state.dir > 0 ? '이름순, 가나다순. 누르면 역순으로 바꿔요' : '이름순, 역순. 누르면 가나다순으로 바꿔요');
      render(); return;
    }
    var b = e.target.closest('.scope button');
    if (b) { state.region = b.dataset.region; document.querySelectorAll('.scope button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); renderChips(); render(); return; }
    var cp = e.target.closest('.copy');
    if (cp) {
      e.preventDefault();
      var slug = cp.dataset.slug;
      var get = function () { return fetch('md/' + slug + '.md').then(function (r) { if (!r.ok) throw 0; return r.text(); }); };
      var fail = function () { toast('복사하지 못했어요. 상세 페이지에서 복사해 주세요.'); };
      // ClipboardItem with a promise keeps the click's permission while the file loads (Safari needs this)
      if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
        var blob = get().then(function (t) { return new Blob([t], { type: 'text/plain' }); });
        navigator.clipboard.write([new ClipboardItem({ 'text/plain': blob })]).then(function () { copyText.done(cp); },
          function () { get().then(function (t) { copyText(t, cp); }, fail); });
      } else {
        get().then(function (t) { copyText(t, cp); }, fail);
      }
    }
  });
  $('#cat').addEventListener('change', function () { state.cat = this.value; render(); });
  var input = $('#q');
  input.addEventListener('input', function () { state.q = input.value.trim(); render(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input) { e.preventDefault(); input.focus(); }
  });

  fetch('catalog.json').then(function (r) { return r.json(); }).then(function (data) {
    state.items = data.items.sort(function (a, b) { return a.region === b.region ? a.name.localeCompare(b.name, 'ko') : (a.region === 'ko' ? -1 : 1); });
    state.cats = data.categories;
    var ko = state.items.filter(function (i) { return i.region === 'ko'; }).length;
    var setN = function (sel, v) { var el = $(sel); if (el) el.textContent = v; };
    setN('#n-all', state.items.length); setN('#n-ko', ko); setN('#n-intl', state.items.length - ko); setN('#n-ko2', ko); setN('#n-intl2', state.items.length - ko);
    renderChips(); render();
  }).catch(function () { list.innerHTML = '<li class="empty">목록을 불러오지 못했어요. 새로고침해 주세요.</li>'; });
})();
