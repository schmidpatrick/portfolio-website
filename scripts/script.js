const getRandomRGB = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;

    return rgb;
};

const cracyGreeting = () => {
    const text = "Good Morning Y'all";
    const element = document.querySelector('#greeting');

    let output = '';

    for (const char of text) {
        if (char === ' ') {
            output += '<br>';
        } else {
            const color = getRandomRGB();
            output += `<span style="color:${color}">${char}</span>`;
        }
    }

    element.innerHTML = output;
};

const setActiveNav = () => {
    const pathname = window.location.pathname;
    const work = document.querySelector('#work');
    const about = document.querySelector('#about');

    if (pathname.includes('about')) {
        about.classList.add('active');
    } else {
        work.classList.add('active');
    }
};

setActiveNav();
