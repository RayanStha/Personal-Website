// Terminal effects: boot sequence, matrix rain, tmux clock, name glitch
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------------------------------------------------------------------------
// Boot sequence - plays once per browser session, any key / click skips it
// ---------------------------------------------------------------------------
const bootLines = [
    '<span class="dim">[    0.000000]</span> rayan-sec kernel: Linux version 6.9.0-sec (guest@rayan-sec)',
    '<span class="dim">[    0.004211]</span> Initializing cgroup subsys cpuset',
    '<span class="dim">[    0.019873]</span> Mounting encrypted volume /dev/mapper/home ... done',
    '[<span class="ok">  OK  </span>] Started Network Firewall (nftables).',
    '[<span class="ok">  OK  </span>] Started Zero Trust Policy Engine.',
    '[<span class="ok">  OK  </span>] Reached target Encrypted Tunnel (WireGuard).',
    '[<span class="ok">  OK  </span>] Started SIEM Log Forwarder.',
    '[<span class="ok">  OK  </span>] Mounted /home/rayan.',
    '[<span class="ok">  OK  </span>] Loaded travel waypoints.',
    '[<span class="warn"> WARN </span>] Coffee levels below recommended threshold.',
    '[<span class="ok">  OK  </span>] Started OpenSSH Server.',
    '',
    'rayan-sec login: <span class="hl">guest</span>',
    'Password: ********',
    '<span class="ok">Access granted.</span> Welcome, guest.'
];

function shouldPlayBoot() {
    if (reducedMotion) return false;
    try {
        if (sessionStorage.getItem('rayan-sec-booted')) return false;
        sessionStorage.setItem('rayan-sec-booted', '1');
    } catch (e) {
        // Storage blocked - just play it
    }
    return true;
}

function finishBoot() {
    const boot = document.getElementById('boot');
    if (!boot || boot.classList.contains('done')) return;
    boot.classList.add('done');
    document.body.classList.remove('booting');
    setTimeout(() => boot.remove(), 600);
}

function runBoot() {
    const boot = document.getElementById('boot');
    const log = document.getElementById('bootLog');
    if (!boot || !log) return;

    if (!shouldPlayBoot()) {
        boot.remove();
        document.body.classList.remove('booting');
        return;
    }

    let i = 0;
    function nextLine() {
        if (boot.classList.contains('done')) return;
        if (i >= bootLines.length) {
            setTimeout(finishBoot, 650);
            return;
        }
        log.innerHTML += bootLines[i] + '\n';
        i++;
        // Login lines type out slower than kernel spam
        setTimeout(nextLine, i > 11 ? 320 : 70 + Math.random() * 90);
    }
    nextLine();

    ['keydown', 'click', 'touchstart', 'wheel'].forEach(evt => {
        window.addEventListener(evt, finishBoot, { once: true, passive: true });
    });
}

// ---------------------------------------------------------------------------
// Matrix rain - faint, behind everything
// ---------------------------------------------------------------------------
function initMatrix() {
    const canvas = document.getElementById('matrix');
    if (!canvas || reducedMotion) return;

    const ctx = canvas.getContext('2d');
    const glyphs = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF{}<>$#/\\';
    const fontSize = 16;
    let columns = 0;
    let drops = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.ceil(canvas.width / fontSize);
        drops = Array.from({ length: columns }, () => Math.random() * -canvas.height / fontSize);
    }

    resize();
    window.addEventListener('resize', resize);

    let last = 0;
    function draw(time) {
        requestAnimationFrame(draw);
        if (time - last < 55) return; // ~18fps is plenty for rain
        last = time;

        ctx.fillStyle = 'rgba(3, 6, 3, 0.12)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${fontSize}px monospace`;

        for (let c = 0; c < columns; c++) {
            const y = drops[c] * fontSize;
            if (y > 0) {
                ctx.fillStyle = Math.random() > 0.96 ? '#d6ffe0' : '#39ff6a';
                ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], c * fontSize, y);
            }
            if (y > canvas.height && Math.random() > 0.975) {
                drops[c] = 0;
            }
            drops[c]++;
        }
    }
    requestAnimationFrame(draw);
}

// ---------------------------------------------------------------------------
// tmux clock, last-login line, footer year
// ---------------------------------------------------------------------------
function initClock() {
    const clock = document.getElementById('tmuxClock');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const pad = n => String(n).padStart(2, '0');

    function tick() {
        const d = new Date();
        if (clock) {
            clock.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())} ${pad(d.getDate())}-${months[d.getMonth()]}-${String(d.getFullYear()).slice(2)}`;
        }
    }
    tick();
    setInterval(tick, 10000);

    const lastLogin = document.getElementById('lastLogin');
    if (lastLogin) {
        const d = new Date(Date.now() - 1000 * 60 * 60 * 26);
        lastLogin.textContent = d.toString().split(' GMT')[0];
    }

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
}

// ---------------------------------------------------------------------------
// Occasional glitch on the name
// ---------------------------------------------------------------------------
function initNameGlitch() {
    const name = document.querySelector('.profile-name');
    if (!name || reducedMotion) return;

    setInterval(() => {
        name.classList.add('glitching');
        setTimeout(() => name.classList.remove('glitching'), 380);
    }, 7000);
}

document.addEventListener('DOMContentLoaded', function() {
    runBoot();
    initMatrix();
    initClock();
    initNameGlitch();
});
