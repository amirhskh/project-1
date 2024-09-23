var text = document.getElementById('text');

var typewriter = new Typewriter(text, {
    loop: true
});

typewriter.typeString('پیشرفت')
    .pauseFor(200)
    .deleteAll()
    .typeString('موفقیت')
    .pauseFor(200)
    .deleteAll()
    .typeString('<strong>نواوری</strong>')
    .pauseFor(200)
    .start();