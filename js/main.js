$(() => {
    $(".header__logo-img").mgGlitch({
        destory: true,
        glitch: true,
        scale: true,
        blend: true,
        blendModeType: 'hue',
        glitch1TimeMin: 300,
        glitch1TimeMax: 100,
        glitch2TimeMin: 100,
        glitch2TimeMax: 100,
    });
});
