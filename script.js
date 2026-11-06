// الكود ده بيخلي الروابط اللي جوه الصفحة تنزل بنعومة
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // بيمنع النطة الوحشة
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // بينزل بنعومة وسلاسة
        });
    });
});