<script>
  import { t } from '../lib/store.svelte.js';

  // The original shop takes orders by phone and email, so we keep that as an
  // option. These are PLACEHOLDERS. Put the real contact details here.
  const phone = '+47 000 00 000';
  const email = 'post@example.com';
</script>

<footer>
  <div class="container">
    <p>
      {t('footerContact')}
      <a href="tel:{phone.replaceAll(' ', '')}">{phone}</a>
      ·
      <a href="mailto:{email}">{email}</a>
    </p>
  </div>
</footer>

<style>
  footer {
    padding-block: 1.5rem;
    border-top: 1px solid var(--border);
    background: var(--surface);
  }

  p {
    margin: 0 0 0.4rem;
  }

  .note {
    color: var(--muted);
    font-size: 0.9rem;
  }
</style>
