// Создание искр
const sparksContainer = document.getElementById('sparks');
const sparksCount = 30;

for (let i = 0; i < sparksCount; i++) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    
    // Случайные начальные позиции по краям изображения
    const edge = Math.floor(Math.random() * 4); // 0-верх, 1-право, 2-низ, 3-лево
    let left, top;
    
    if (edge === 0) {
        left = Math.random() * 100;
        top = 0;
    } else if (edge === 1) {
        left = 100;
        top = Math.random() * 100;
    } else if (edge === 2) {
        left = Math.random() * 100;
        top = 100;
    } else {
        left = 0;
        top = Math.random() * 100;
    }
    
    spark.style.left = `${left}%`;
    spark.style.top = `${top}%`;
    
    // Случайное направление движения искр
    const tx = (Math.random() - 0.5) * 100;
    const ty = (Math.random() - 0.5) * 100;
    spark.style.setProperty('--tx', `${tx}px`);
    spark.style.setProperty('--ty', `${ty}px`);
    
    // Случайная задержка анимации
    spark.style.animationDelay = `${Math.random() * 2}s`;
    
    sparksContainer.appendChild(spark);
}