/* Free guide signup ("디자인 시스템 125개 톺아보기").
   Quiet by design: nothing on arrival. Offers appear as a card in the list,
   one line right after a DESIGN.md is copied, and a card at the end of a detail page.
   Closing the sheet snoozes the after-copy line for 14 days; signing up hides all offers.
   The form is live only when CONFIG.action is set (Stibee subscribe form). Add ?lead=preview to try it before that. */
(function () {
  var CONFIG = {
    action: '',            // Stibee form action URL (from the form's HTML code), e.g. https://stibee.com/api/v1.0/lists/XXXX/public/subscribers
    pageUrl: 'https://page.stibee.com/subscriptions/527185', // Stibee hosted signup page, used when there is no action URL
    emailField: 'email',   // field names from the Stibee form code
    adField: '',           // Stibee's ad-consent field name, if the form has one
    adValue: 'Y',
    guide: 'guide/design-systems-125.pdf',
    snoozeDays: 14
  };
  var KEY = 'sl-lead-v1';
  var preview = /[?&]lead=preview\b/.test(location.search);
  var mode = CONFIG.action ? 'form' : (CONFIG.pageUrl ? 'page' : '');
  var enabled = !!mode || preview;

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  var st = load();
  function subscribed() { return !!st.subscribed; }
  function snoozed() { return st.snoozeUntil && Date.now() < st.snoozeUntil; }
  var shownAfterCopy = false;

  var cover = '<span class="lead-cover" aria-hidden="true"><span class="k">SYLVIALAB · PDF</span>' +
    '<span class="t">디자인 시스템 125개 톺아보기</span>' +
    '<span class="s"><i style="background:#3182f6"></i><i style="background:#ff6600"></i><i style="background:#256ef4"></i><i style="background:#ff4800"></i><i style="background:#6157ea"></i></span></span>';

  function cardHTML(extraClass) {
    return '<button type="button" class="lead-card ' + (extraClass || '') + '" data-lead-open>' + cover +
      '<span class="lead-copy"><span class="lead-kicker">무료 가이드</span>' +
      '<b>디자인 시스템 125개,<br>한 번에 톺아보기</b>' +
      '<span class="lead-sub">국내외 125개 서비스의 색·글자·컴포넌트를 분석해 총정리했어요.</span>' +
      '<span class="lead-cta">무료로 받기</span></span></button>';
  }

  // ① list: returns an <li> to insert at the 9th position, or '' when offers are off.
  function listCard() {
    if (!enabled || subscribed()) return '';
    return '<li class="lead-li">' + cardHTML() + '</li>';
  }

  // ② one line under the copy button, right after a copy.
  function afterCopy(anchor) {
    if (!enabled || subscribed() || snoozed() || shownAfterCopy || !anchor) return;
    shownAfterCopy = true;
    var el = document.createElement('button');
    el.type = 'button'; el.className = 'lead-line'; el.setAttribute('data-lead-open', '');
    el.innerHTML = '<span class="lead-mini" aria-hidden="true"><i style="background:#3182f6"></i><i style="background:#ff6600"></i><i style="background:#ff4800"></i></span>' +
      '<span class="lead-line-t">다른 124개도 궁금하다면, 디자인 시스템 총정리를 무료로 받아 보세요.</span><b>받기</b>';
    anchor.insertAdjacentElement('afterend', el);
  }

  // detail page end card.
  function endCard(container) {
    if (!enabled || subscribed() || !container) return;
    container.innerHTML = cardHTML('wide');
    container.hidden = false;
  }

  // ③ the sheet.
  var sheet, lastFocus;
  function buildSheet() {
    var w = document.createElement('div');
    w.className = 'lead-overlay'; w.hidden = true;
    w.innerHTML =
      '<div class="lead-dim" data-lead-close></div>' +
      '<section class="lead-sheet" role="dialog" aria-modal="true" aria-labelledby="lead-title">' +
      '<span class="lead-handle" aria-hidden="true"></span>' +
      '<div class="lead-form-wrap">' +
      '<div class="lead-head">' + cover +
      '<div><span class="lead-kicker">무료 가이드</span><h2 id="lead-title">디자인 시스템 125개,<br>총정리해서 드려요</h2></div>' +
      '<button type="button" class="lead-x" aria-label="닫기" data-lead-close><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
      '<ul class="lead-list"><li>국내 37 · 해외 88개 시스템을 한눈에</li><li>국내 37곳의 특장점과 배울 점</li><li>색·글자·모서리를 서로 비교한 경향</li></ul>' +
      (mode === 'page' ?
      '<div class="lead-form">' +
      '<a class="lead-submit" href="' + CONFIG.pageUrl + '" target="_blank" rel="noopener" data-lead-page>이메일로 신청하고 가이드 받기</a>' +
      '<span class="lead-hint">스티비 신청 페이지가 새 창으로 열려요. 이메일과 동의는 거기서 받아요.</span>' +
      '</div>' :
      '<form class="lead-form" novalidate>' +
      '<label for="lead-email">가이드를 받을 이메일</label>' +
      '<input id="lead-email" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com" aria-describedby="lead-hint" required>' +
      '<span id="lead-hint" class="lead-hint">스팸 없이 가이드와 고른 소식만 보내요.</span>' +
      '<label class="lead-check"><input type="checkbox" id="lead-agree" required><span>(필수) 가이드 제공과 신청 안내를 위해 이메일을 수집·이용하는 데 동의해요.</span></label>' +
      '<details class="lead-more"><summary>수집 내용 자세히</summary><p>수집 항목: 이메일 · 목적: 무료 가이드 제공, 선택 동의 시 AI 디자인 스터디 소식 발송 · 보유 기간: 구독 해지 또는 삭제 요청 시까지 · 문의: doyouknowhj@gmail.com</p></details>' +
      '<label class="lead-check"><input type="checkbox" id="lead-news"><span>(선택) AI 디자인 스터디 소식과 꿀팁도 받을래요. 광고성 정보 수신에 동의해요.</span></label>' +
      '<button type="submit" class="lead-submit" disabled>무료로 받기</button>' +
      '</form>') + '</div>' +
      '<div class="lead-done" role="status" hidden>' +
      '<span class="lead-ok" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>' +
      '<h2>' + (mode === 'page' ? '신청 페이지를 열었어요' : '신청했어요') + '</h2><p>' + (mode === 'page' ? '신청을 마치셨다면 가이드를 바로 받아 가세요.' : '가이드를 바로 받아 가세요.') + '</p>' +
      '<a class="lead-submit" href="' + CONFIG.guide + '" download>가이드 내려받기 (PDF)</a>' +
      '<p class="lead-news-note" hidden>소식 구독 확인 메일을 보냈어요. 메일 속 버튼을 누르면 구독이 끝나요.</p>' +
      '<button type="button" class="lead-ghost" data-lead-close>계속 둘러보기</button></div>' +
      '</section>';
    document.body.appendChild(w);
    var pageBtn = w.querySelector('[data-lead-page]');
    if (pageBtn) {
      pageBtn.addEventListener('click', function () {
        st.subscribed = true; save(st);
        setTimeout(function () {
          w.querySelector('.lead-form-wrap').hidden = true;
          w.querySelector('.lead-done').hidden = false;
          document.querySelectorAll('.lead-li, .lead-line, #lead-end').forEach(function (n) { n.hidden = true; });
        }, 300);
      });
      return w;
    }
    var f = w.querySelector('form'), email = w.querySelector('#lead-email'), agree = w.querySelector('#lead-agree'),
      news = w.querySelector('#lead-news'), btn = f.querySelector('.lead-submit'), hint = w.querySelector('#lead-hint');
    var ok = function () { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()); };
    var sync = function () { btn.disabled = !(ok() && agree.checked); };
    email.addEventListener('input', function () {
      email.setAttribute('aria-invalid', 'false'); hint.classList.remove('err'); hint.textContent = '스팸 없이 가이드와 고른 소식만 보내요.';
      sync();
    });
    email.addEventListener('blur', function () {
      if (email.value && !ok()) { email.setAttribute('aria-invalid', 'true'); hint.classList.add('err'); hint.textContent = '이메일 주소를 example@domain.com 형식으로 적어 주세요.'; }
    });
    agree.addEventListener('change', sync);
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (btn.disabled) return;
      btn.disabled = true; btn.textContent = '보내는 중…';
      var done = function () {
        st.subscribed = true; save(st);
        w.querySelector('.lead-form-wrap').hidden = true;
        w.querySelector('.lead-done').hidden = false;
        w.querySelector('.lead-news-note').hidden = !(news.checked && CONFIG.action);
        document.querySelectorAll('.lead-li, .lead-line, #lead-end').forEach(function (n) { n.hidden = true; });
        w.querySelector('.lead-done .lead-submit').focus();
      };
      if (!CONFIG.action) { done(); return; } // preview mode: nothing is sent
      var fd = new FormData();
      fd.append(CONFIG.emailField, email.value.trim());
      if (CONFIG.adField && news.checked) fd.append(CONFIG.adField, CONFIG.adValue);
      fetch(CONFIG.action, { method: 'POST', mode: 'no-cors', body: fd }).then(done, function () {
        btn.disabled = false; btn.textContent = '무료로 받기';
        hint.classList.add('err'); hint.textContent = '보내지 못했어요. 잠시 뒤 다시 시도해 주세요.';
      });
    });
    w.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') { // keep focus inside the sheet
        var fs = Array.prototype.filter.call(w.querySelectorAll('button, a[href], input, summary'), function (n) { return !n.disabled && n.offsetParent !== null; });
        if (!fs.length) return;
        if (e.shiftKey && document.activeElement === fs[0]) { e.preventDefault(); fs[fs.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === fs[fs.length - 1]) { e.preventDefault(); fs[0].focus(); }
      }
    });
    return w;
  }
  function open() {
    if (!sheet) sheet = buildSheet();
    lastFocus = document.activeElement;
    sheet.hidden = false; document.documentElement.classList.add('lead-lock');
    var t = sheet.querySelector('#lead-email'); if (t && !sheet.querySelector('.lead-form-wrap').hidden) t.focus();
  }
  function close() {
    if (!sheet || sheet.hidden) return;
    sheet.hidden = true; document.documentElement.classList.remove('lead-lock');
    if (!subscribed()) { st.snoozeUntil = Date.now() + CONFIG.snoozeDays * 864e5; save(st); }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-lead-open]')) { e.preventDefault(); open(); return; }
    if (e.target.closest('[data-lead-close]')) { e.preventDefault(); close(); }
  });

  window.SylviaLead = { enabled: enabled, listCard: listCard, afterCopy: afterCopy, endCard: endCard, open: open };
})();
