import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

/** Lightweight magnetic pull for elements marked [data-magnetic]. */
function mountMagnetic(): () => void {
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!finePointer || prefersReduced) return () => {};

  const cleanups: Array<() => void> = [];
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = Number(el.dataset.magnetic) || 0.3;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const reset = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', reset);
    cleanups.push(() => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', reset);
      reset();
    });
  });
  return () => cleanups.forEach((fn) => fn());
}

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Hash navigation: scroll to section after render
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [location.pathname, location.hash]);

  // Scroll-reveal: observe any `.reveal` element on the current route.
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));

    if (prefersReduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const raf = requestAnimationFrame(() => els.forEach((el) => io.observe(el)));
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [location.pathname]);

  // Magnetic buttons — re-bind per route.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {});
    const cleanup = mountMagnetic();
    return () => {
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, [location.pathname]);

  const isQuotePage = location.pathname === '/quote';

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col justify-between">
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />

      {/* Floating Action Button (Request Quote) on Mobile */}
      {!isQuotePage && (
        <a
          href="/quote"
          aria-label="Request a quote"
          className="fixed bottom-7 right-6 z-[60] bg-safety-orange text-white w-15 h-15 rounded-full shadow-xl glow-orange flex items-center justify-center btn-press hover:scale-110 md:hidden"
        >
          <span className="material-symbols-outlined text-[30px]">request_quote</span>
        </a>
      )}
    </div>
  );
}

export default App;
