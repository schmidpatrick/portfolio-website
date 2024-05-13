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
