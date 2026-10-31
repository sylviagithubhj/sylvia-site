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
    var ok = function () { if (btn) copyText.done(btn, true); else toast('DESIGN.md를 복사했어요'); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(ok, function () { fallback(text); ok(); });
    } else { fallback(text); ok(); }
  }
  copyText.done = function (btn) {
    var CHECK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
    btn.classList.add('done'); btn.innerHTML = CHECK;
    setTimeout(function () { btn.classList.remove('done'); btn.innerHTML = COPY_ICON; }, 1600);
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
    var html = '<button class="chip" data-cat="all" aria-pressed="' + (state.cat === 'all') + '">전체 분야</button>';
    keys.forEach(function (k) {
      html += '<button class="chip" data-cat="' + k + '" aria-pressed="' + (state.cat === k) + '">' + esc(state.cats[k] || k) + '<span class="n">' + counts[k] + '</span></button>';
    });
    $('#chips').innerHTML = html;
  }

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

  // The swatch is the document's primary button color, or its first main color.
  // A white or pale gray button says little about the brand, so the first main color wins then.
  function pale(hex) {
    var m = /^#([0-9a-f]{6})$/i.exec(hex || ''); if (!m) return true;
    var n = parseInt(m[1], 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    return Math.min(r, g, b) > 225 && Math.max(r, g, b) - Math.min(r, g, b) < 20;
  }
  function keyColor(it, pv) {
    var b = pv.btn && pv.btn.bg;
    if (b && /^#[0-9a-f]{6}$/i.test(b) && !pale(b)) return b;
    return it.colors[0] || b || '#333333';
  }
  var COPY_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/></svg>';

  function render() {
    var rows = state.items.filter(matches).sort(function (a, b) {
      // 국내 먼저, then by name; the sort button flips the name order
      if (a.region !== b.region) return a.region === 'ko' ? -1 : 1;
      return state.dir * a.name.localeCompare(b.name, 'ko');
    });
    count.textContent = rows.length + '개';
    if (!rows.length) { list.innerHTML = emptyHTML(); return; }
    var html = rows.map(function (it) {
      var href = 'detail.html#' + it.slug, pv = it.pv || {}, key = keyColor(it, pv);
      return '<li class="item row">' +
        '<a href="' + href + '" class="rsw" aria-hidden="true" tabindex="-1" style="background:' + key + '"></a>' +
        '<a href="' + href + '" class="body"><span class="top"><span class="name">' + esc(it.name) + '</span>' +
        '<span class="hex">' + esc(key.toUpperCase()) + '</span></span>' +
        '<span class="desc">' + esc(pv.point || it.desc) + '</span></a>' +
        '<button class="copy ico" data-slug="' + it.slug + '" aria-label="' + esc(it.name) + ' DESIGN.md 복사">' + COPY_ICON + '</button></li>';
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
    var c = e.target.closest('.chip');
    if (c) { state.cat = c.dataset.cat; renderChips(); render(); return; }
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
