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
    var ok = function () { if (btn) { btn.classList.add('done'); btn.textContent = '복사됨'; setTimeout(function () { btn.classList.remove('done'); btn.textContent = '복사'; }, 1600); } toast('DESIGN.md를 복사했어요'); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(ok, function () { fallback(text); ok(); });
    } else { fallback(text); ok(); }
  }
  copyText.done = function (btn) {
    btn.classList.add('done'); btn.textContent = '복사됨';
    setTimeout(function () { btn.classList.remove('done'); btn.textContent = '복사'; }, 1600);
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

  function render() {
    var rows = state.items.filter(matches).sort(function (a, b) {
      // 국내 먼저, then by name; the sort button flips the name order
      if (a.region !== b.region) return a.region === 'ko' ? -1 : 1;
      return state.dir * a.name.localeCompare(b.name, 'ko');
    });
    count.textContent = rows.length + '개';
    if (!rows.length) { list.innerHTML = '<li class="empty">찾는 결과가 없어요. 다른 이름이나 "핀테크", "AI"처럼 분야로 찾아보세요.</li>'; return; }
    var html = rows.map(function (it) {
      var sw = (it.colors.length ? it.colors : ['#333333']).map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('');
      return '<li class="item">' +
        '<a href="detail.html#' + it.slug + '" class="sw" aria-hidden="true" tabindex="-1">' + sw + '</a>' +
        '<a href="detail.html#' + it.slug + '" class="body"><span class="top"><span class="name">' + esc(it.name) + '</span>' +
        '<span class="tag ' + it.region + '">' + (it.region === 'ko' ? '국내' : '해외') + '</span>' +
        '<span class="tag">' + esc(state.cats[it.category] || it.category) + '</span></span>' +
        '<p class="desc">' + esc(it.desc) + '</p></a>' +
        '<span class="side"><span class="size">' + kb(it.bytes) + '</span>' +
        '<button class="copy" data-slug="' + it.slug + '" aria-label="' + esc(it.name) + ' DESIGN.md 복사">복사</button></span></li>';
    });
    // free guide card sits in the 9th slot so people meet it while browsing, never on arrival
    var lead = window.SylviaLead ? window.SylviaLead.listCard() : '';
    if (lead) html.splice(Math.min(8, html.length), 0, lead);
    list.innerHTML = html.join('');
  }

  document.addEventListener('click', function (e) {
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
    $('#n-all').textContent = state.items.length; $('#n-ko').textContent = ko; $('#n-intl').textContent = state.items.length - ko; $('#n-ko2').textContent = ko; $('#n-intl2').textContent = state.items.length - ko;
    renderChips(); render();
  }).catch(function () { list.innerHTML = '<li class="empty">목록을 불러오지 못했어요. 새로고침해 주세요.</li>'; });
})();
