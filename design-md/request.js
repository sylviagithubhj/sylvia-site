/* "아직 없는 곳" 분석 요청.
   There is no server here, so a request leaves as an email (mailto) or a GitHub issue.
   Requested names are remembered in this browser only, so the button can say "요청했어요". */
(function () {
  var TO = 'doyouknowhj@gmail.com';
  var ISSUES = 'https://github.com/sylviagithubhj/sylvialab-design-md/issues/new';
  var KEY = 'sl-req-v1';

  function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function remember(name) { var l = load(); if (l.indexOf(name) < 0) l.push(name); try { localStorage.setItem(KEY, JSON.stringify(l.slice(-50))); } catch (e) {} }
  function requested(name) { return load().indexOf(name) > -1; }
  // 은/는 by the last letter's final consonant (non-Korean endings get 는)
  function topic(w) { var c = w.charCodeAt(w.length - 1); return c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 ? '은' : '는'; }
  function subscribed() { try { return !!(JSON.parse(localStorage.getItem('sl-lead-v1')) || {}).subscribed; } catch (e) { return false; } }

  // Empty search result: the "아직 없어요" card. tips = category labels to try instead.
  function emptyHTML(q, tips) {
    var done = requested(q);
    return '<li class="req-empty">' +
      '<div class="req-card">' +
      '<h2>' + esc(q) + topic(q) + ' 아직 없어요</h2>' +
      '<p>요청이 모인 곳부터 분석해서 추가해요.</p>' +
      '<button type="button" class="req-btn' + (done ? ' done' : '') + '" data-req="' + esc(q) + '">' +
      (done ? '요청했어요 · 다시 보내기' : esc(q) + ' 분석 요청하기') + '</button>' +
      '</div>' +
      (tips && tips.length ? '<p class="req-tip">이렇게도 찾아보세요 ' + tips.map(function (t) {
        return '<button type="button" class="req-try" data-try="' + esc(t) + '">' + esc(t) + '</button>';
      }).join('') + '</p>' : '') +
      '</li>';
  }

  // One quiet line under the list, for people who scrolled to the end.
  function footHTML() {
    return '<li class="req-foot"><span>찾는 디자인 시스템이 없나요?</span><button type="button" data-req="">요청하기</button></li>';
  }

  var sheet, lastFocus;
  function build() {
    var w = document.createElement('div');
    w.className = 'lead-overlay req-overlay'; w.hidden = true;
    w.innerHTML =
      '<div class="lead-dim" data-req-close></div>' +
      '<section class="lead-sheet" role="dialog" aria-modal="true" aria-labelledby="req-title">' +
      '<span class="lead-handle" aria-hidden="true"></span>' +
      '<div class="req-wrap">' +
      '<div class="req-head"><h2 id="req-title">분석 요청하기</h2>' +
      '<button type="button" class="lead-x" aria-label="닫기" data-req-close><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
      '<p class="req-lead">보고 싶은 서비스를 알려 주세요. 요청이 모인 곳부터 분석해요.</p>' +
      '<form class="lead-form req-form" novalidate>' +
      '<label for="req-name">서비스 이름</label>' +
      '<input id="req-name" type="text" autocomplete="off" placeholder="예: 카카오뱅크" required>' +
      '<label for="req-note">궁금한 점 (선택)</label>' +
      '<textarea id="req-note" rows="3" placeholder="예: 앱의 다크 모드 색이 궁금해요"></textarea>' +
      '<button type="submit" class="lead-submit" disabled>메일로 요청 보내기</button>' +
      '<a class="req-alt" href="' + ISSUES + '" target="_blank" rel="noopener" data-req-gh>GitHub 이슈로 남기기</a>' +
      '<span class="lead-hint">메일 앱이 열리고 내용이 채워져 있어요. 보내기만 누르면 돼요.</span>' +
      '</form>' +
      '</div>' +
      '<div class="lead-done req-done" role="status" hidden>' +
      '<span class="lead-ok" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>' +
      '<h2 class="req-done-h">요청을 남겼어요</h2>' +
      '<p class="req-done-t"></p>' +
      '<button type="button" class="lead-submit req-news" hidden>추가되면 알림 받기</button>' +
      '<button type="button" class="lead-ghost" data-req-close>계속 둘러보기</button></div>' +
      '</section>';
    document.body.appendChild(w);

    var f = w.querySelector('form'), name = w.querySelector('#req-name'), note = w.querySelector('#req-note'),
      btn = f.querySelector('.lead-submit'), gh = w.querySelector('[data-req-gh]');
    var sync = function () {
      var n = name.value.trim();
      btn.disabled = !n;
      gh.href = ISSUES + '?title=' + encodeURIComponent('분석 요청: ' + n) + '&body=' + encodeURIComponent(body(n));
      gh.setAttribute('aria-disabled', String(!n));
    };
    function body(n) {
      return '서비스: ' + n + '\n' + (note.value.trim() ? '궁금한 점: ' + note.value.trim() + '\n' : '') + '\n(sylvialab.kr/design-md 에서 보낸 요청)';
    }
    function finish(n, how) {
      remember(n);
      w.querySelector('.req-wrap').hidden = true;
      w.querySelector('.req-done').hidden = false;
      w.querySelector('.req-done-h').textContent = how === 'gh' ? '요청을 남겼어요' : '메일 앱을 열었어요';
      w.querySelector('.req-done-t').textContent = how === 'gh'
        ? n + ' 요청을 GitHub에 남겼어요. 진행 상황도 거기서 볼 수 있어요.'
        : n + ' 요청 메일을 보내 주시면 바로 확인할게요.';
      var news = w.querySelector('.req-news');
      news.hidden = !(window.SylviaLead && window.SylviaLead.enabled) || subscribed();
      if (!news.hidden) w.querySelector('.req-done-t').textContent += ' 새로 추가된 곳은 AI 디자인 뉴스레터로 알려 드려요.';
      document.querySelectorAll('.req-btn[data-req="' + n.replace(/"/g, '') + '"]').forEach(function (b) { b.classList.add('done'); b.textContent = '요청했어요 · 다시 보내기'; });
      (news.hidden ? w.querySelector('.req-done .lead-ghost') : news).focus();
    }
    name.addEventListener('input', sync);
    note.addEventListener('input', sync);
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var n = name.value.trim(); if (!n) return;
      location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent('[DESIGN.md 분석 요청] ' + n) + '&body=' + encodeURIComponent(body(n));
      setTimeout(function () { finish(n, 'mail'); }, 400);
    });
    gh.addEventListener('click', function (e) {
      var n = name.value.trim();
      if (!n) { e.preventDefault(); name.focus(); return; }
      setTimeout(function () { finish(n, 'gh'); }, 300);
    });
    w.querySelector('.req-news').addEventListener('click', function () { close(); window.SylviaLead.open(); });
    w.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') {
        var fs = Array.prototype.filter.call(w.querySelectorAll('button, a[href], input, textarea'), function (n) { return !n.disabled && n.offsetParent !== null; });
        if (!fs.length) return;
        if (e.shiftKey && document.activeElement === fs[0]) { e.preventDefault(); fs[fs.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === fs[fs.length - 1]) { e.preventDefault(); fs[0].focus(); }
      }
    });
    w._sync = sync;
    return w;
  }

  function open(n) {
    if (!sheet) sheet = build();
    lastFocus = document.activeElement;
    sheet.querySelector('.req-wrap').hidden = false;
    sheet.querySelector('.req-done').hidden = true;
    var name = sheet.querySelector('#req-name');
    name.value = n || ''; sheet.querySelector('#req-note').value = ''; sheet._sync();
    sheet.hidden = false; document.documentElement.classList.add('lead-lock');
    (n ? sheet.querySelector('#req-note') : name).focus();
  }
  function close() {
    if (!sheet || sheet.hidden) return;
    sheet.hidden = true; document.documentElement.classList.remove('lead-lock');
    if (lastFocus && lastFocus.focus && document.contains(lastFocus)) lastFocus.focus();
  }
  document.addEventListener('click', function (e) {
    var r = e.target.closest('[data-req]');
    if (r) { e.preventDefault(); open(r.getAttribute('data-req')); return; }
    if (e.target.closest('[data-req-close]')) { e.preventDefault(); close(); }
  });

  window.SylviaRequest = { emptyHTML: emptyHTML, footHTML: footHTML, open: open };
})();
