'use strict';
(() => {
  const world = document.querySelector('.mdt-world');
  if (!world) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const primaryPath = document.querySelector('#mdt-main-route');
  const secondaryPath = document.querySelector('#mdt-second-route');
  const rover = document.querySelector('#mdt-rover');
  const secondary = document.querySelector('#mdt-rover-secondary');
  const speed = document.querySelector('#mdt-demo-speed');
  const pauseButton = world.querySelector('.mdt-animation-control');
  let paused = reduced.matches, visible = true, progress = .38, lastTime = 0, frame = 0;
  let mode = 'tracking';
  const primaryLength = primaryPath.getTotalLength();
  const secondaryLength = secondaryPath.getTotalLength();
  function render() {
    const point = primaryPath.getPointAtLength(progress * primaryLength);
    const other = secondaryPath.getPointAtLength(((progress + .25) % 1) * secondaryLength);
    rover.setAttribute('transform', `translate(${point.x} ${point.y})`);
    secondary.setAttribute('transform', `translate(${other.x} ${other.y})`);
    speed.textContent = mode === 'history' ? '—' : String(Math.round(61 + Math.sin(progress * Math.PI * 8) * 7));
  }
  function animate(time) {
    const delta = lastTime ? Math.min(time - lastTime, 64) : 0;
    lastTime = time;
    progress = (progress + delta / (mode === 'history' ? 14000 : 24000)) % 1;
    render();
    frame = requestAnimationFrame(animate);
  }
  function sync() {
    cancelAnimationFrame(frame);
    const stopped = paused || !visible || document.hidden;
    world.classList.toggle('is-paused', stopped);
    pauseButton.textContent = paused ? 'Activar animación' : 'Pausar animación';
    pauseButton.setAttribute('aria-pressed', String(paused));
    lastTime = 0;
    if (!stopped) frame = requestAnimationFrame(animate);
  }
  pauseButton.addEventListener('click', () => { paused = !paused; sync(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, { threshold: .08 }).observe(world);
  world.querySelectorAll('[data-mdt-mode]').forEach(button => {
    button.addEventListener('click', () => {
      mode = button.dataset.mdtMode;
      world.querySelectorAll('[data-mdt-mode]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      const history = mode === 'history';
      document.querySelector('#mdt-demo-mode').textContent = history ? 'HISTORIAL DE RECORRIDO' : 'RASTREO GPS';
      document.querySelector('#mdt-demo-detail').textContent = history ? 'Vuelve sobre cada trayecto.' : 'Cada movimiento cuenta.';
      document.querySelector('#mdt-demo-meta').textContent = history ? 'Reproducción de una ruta de ejemplo' : 'Ubicación y velocidad de tu unidad';
      world.querySelector('.mdt-float__state').textContent = history ? '● Reproducción de ejemplo' : '● En movimiento';
      progress = history ? .05 : .38;
      render();
    });
  });
  const inner = world.querySelector('.mdt-world__inner');
  world.addEventListener('pointermove', event => {
    if (reduced.matches || paused || event.pointerType !== 'mouse') return;
    const box = world.getBoundingClientRect();
    inner.style.setProperty('--ry', `${((event.clientX - box.left) / box.width - .5) * 8}deg`);
    inner.style.setProperty('--rx', `${-((event.clientY - box.top) / box.height - .5) * 5}deg`);
  });
  world.addEventListener('pointerleave', () => {
    inner.style.setProperty('--rx', '0deg');
    inner.style.setProperty('--ry', '0deg');
  });
  render();
  sync();
})();
