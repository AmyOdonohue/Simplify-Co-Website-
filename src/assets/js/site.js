(function () {
  var header = document.querySelector('header');
  var toggle = document.querySelector('.menu-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function netlifySubmit(form, successHtml, errorText) {
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var button = form.querySelector('[type="submit"]');
      if (button) button.disabled = true;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (res) {
        if (!res.ok) throw new Error('Form submission failed: ' + res.status);
        form.innerHTML = successHtml;
      }).catch(function () {
        if (button) button.disabled = false;
        var note = form.querySelector('.form-error');
        if (!note) {
          note = document.createElement('p');
          note.className = 'form-error';
          note.setAttribute('role', 'alert');
          form.appendChild(note);
        }
        note.textContent = errorText;
      });
    });
  }

  netlifySubmit(
    document.getElementById('contact-form'),
    '<p role="status" style="color:#fff;font-size:16px;font-weight:600;">Thanks — your message is on its way. We\'ll be in touch soon.</p>',
    'Something went wrong sending your message. Please email us directly at hello@simplifyco.com.au'
  );

  netlifySubmit(
    document.getElementById('community-form'),
    '<p role="status" style="color:var(--walnut-dark);font-weight:600;">Thanks for signing up — welcome to the community.</p>',
    'Something went wrong signing up. Please email us directly at hello@simplifyco.com.au'
  );
})();
