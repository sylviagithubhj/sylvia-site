/* Free guide signup ("디자인 시스템 125개 톺아보기").
   Quiet by design: nothing on arrival. Offers appear as a card in the list,
   one line right after a DESIGN.md is copied, and a card at the end of a detail page.
   Closing the sheet snoozes the after-copy line for 14 days; signing up hides all offers.
   The form is live only when CONFIG.action is set (Stibee subscribe form). Add ?lead=preview to try it before that. */
(function () {
  var CONFIG = {
    action: 'https://stibee.com/api/v1.0/lists/Ev82VdoFDdiAZOHYGqclnE-jgNRD3A==/public/subscribers', // Stibee form (뉴스레터 "AI 디자인 공부, 계속 해나가요")
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

  var cover = '<span class="lead-cover" aria-hidden="true"><span class="k">SYLVIALAB · 구독자 전용</span>' +
    '<span class="t">디자인 시스템 125개 톺아보기</span>' +
    '<span class="s"><i style="background:#3182f6"></i><i style="background:#ff6600"></i><i style="background:#256ef4"></i><i style="background:#ff4800"></i><i style="background:#6157ea"></i></span></span>';

  function cardHTML(extraClass) {
    return '<button type="button" class="lead-card ' + (extraClass || '') + '" data-lead-open>' + cover +
      '<span class="lead-copy"><span class="lead-kicker">구독자 전용 · 디자인 시스템 분석</span>' +
      '<b>디자인 시스템 125개,<br>한 번에 톺아보기</b>' +
      '<span class="lead-sub">국내외 125개 서비스의 색·글자·컴포넌트를 분석해 총정리했어요.</span>' +
      '<span class="lead-cta">분석 받아 보기</span></span></button>';
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
      '<span class="lead-line-t">다른 124개도 궁금하다면, 구독자에게만 드리는 디자인 시스템 분석을 받아 보세요.</span><b>받기</b>';
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
      '<div><span class="lead-kicker">구독자 전용</span><h2 id="lead-title">구독자에게만 드리는<br>디자인 시스템 125개 분석</h2></div>' +
      '<button type="button" class="lead-x" aria-label="닫기" data-lead-close><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
      '<ul class="lead-list"><li>국내 37 · 해외 88개 시스템을 한눈에</li><li>국내 37곳의 특장점과 배울 점</li><li>색·글자·모서리를 서로 비교한 경향</li></ul>' +
      (mode === 'page' ?
      '<div class="lead-form">' +
      '<a class="lead-submit" href="' + CONFIG.pageUrl + '" target="_blank" rel="noopener" data-lead-page>이메일로 구독하고 분석 받기</a>' +
      '<span class="lead-hint">스티비 신청 페이지가 새 창으로 열려요. 이메일과 동의는 거기서 받아요.</span>' +
      '</div>' :
      '<form class="lead-form" novalidate>' +
      '<label for="lead-email">이메일</label>' +
      '<input id="lead-email" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com" aria-describedby="lead-hint" required>' +
      '<span id="lead-hint" class="lead-hint">뉴스레터 \'AI 디자인 공부, 계속 해나가요\'를 구독하면 분석 리포트를 바로 드려요. 언제든 해지할 수 있어요.</span>' +
      '<label class="lead-check"><input type="checkbox" id="lead-agree" required><span>(필수) 뉴스레터 발송을 위한 개인정보 수집·이용에 동의해요.</span></label>' +
      '<details class="lead-more"><summary>개인정보 수집 및 이용 자세히</summary><p>뉴스레터 발송을 위한 최소한의 개인정보(이메일)를 수집하고 이용합니다. 수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 파기됩니다. 구독자 관리는 스티비(Stibee)로 합니다. 문의: doyouknowhj@gmail.com</p></details>' +
      '<button type="submit" class="lead-submit" disabled>구독하고 분석 받기</button>' +
      '</form>') + '</div>' +
      '<div class="lead-done" role="status" hidden>' +
      '<span class="lead-ok" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>' +
      '<h2>' + (mode === 'page' ? '신청 페이지를 열었어요' : '구독 신청했어요') + '</h2><p>' + (mode === 'page' ? '신청을 마치셨다면 분석 리포트를 바로 받아 가세요.' : '구독자 전용 분석 리포트를 바로 받아 가세요.') + '</p>' +
      '<a class="lead-submit" href="' + CONFIG.guide + '" download>분석 리포트 내려받기 (PDF)</a>' +
      '<p class="lead-news-note" hidden>다음 AI 디자인 공부 소식은 메일로 보내 드릴게요.</p>' +
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
      btn = f.querySelector('.lead-submit'), hint = w.querySelector('#lead-hint');
    var ok = function () { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()); };
    var sync = function () { btn.disabled = !(ok() && agree.checked); };
    email.addEventListener('input', function () {
      email.setAttribute('aria-invalid', 'false'); hint.classList.remove('err'); hint.textContent = '뉴스레터 \'AI 디자인 공부, 계속 해나가요\'를 구독하면 분석 리포트를 바로 드려요. 언제든 해지할 수 있어요.';
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
        w.querySelector('.lead-news-note').hidden = !CONFIG.action;
        document.querySelectorAll('.lead-li, .lead-line, #lead-end').forEach(function (n) { n.hidden = true; });
        w.querySelector('.lead-done .lead-submit').focus();
      };
      if (!CONFIG.action) { done(); return; } // preview mode: nothing is sent
      // Post exactly like Stibee's own form does (a plain form POST), into a hidden frame so the page stays put.
      var frame = document.createElement('iframe');
      frame.name = 'lead-sink-' + Date.now(); frame.hidden = true; frame.setAttribute('aria-hidden', 'true'); frame.tabIndex = -1;
      document.body.appendChild(frame);
      var post = document.createElement('form');
      post.method = 'POST'; post.action = CONFIG.action; post.target = frame.name; post.acceptCharset = 'utf-8'; post.hidden = true;
      var field = document.createElement('input');
      field.type = 'hidden'; field.name = CONFIG.emailField; field.value = email.value.trim();
      post.appendChild(field); document.body.appendChild(post);
      var finished = false;
      var finish = function () { if (finished) return; finished = true; post.remove(); done(); };
      frame.addEventListener('load', finish);
      setTimeout(finish, 4000); // a cross-origin answer may not fire load in every browser
      post.submit();
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
