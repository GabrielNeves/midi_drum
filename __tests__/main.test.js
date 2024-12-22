const tocaSom = require('../main'); // Adjust the path if necessary

/**
 * @jest-environment jsdom
 */


describe('Application Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="tecla" id="tecla_pom" data-key="KeyQ">
                <audio id="som_tecla_pom" src="sounds/pom.wav"></audio>
            </div>
        `;
    });

    test('hello world!', () => {
        expect(1 + 1).toBe(2);
    });

    test('should play sound when tecla is clicked', () => {
        const tecla = document.querySelector('.tecla');
        const audio = document.querySelector('#som_tecla_pom');
        audio.play = jest.fn();

        tecla.click();

        expect(audio.play).toHaveBeenCalled();
    });

    test('should add "ativa" class on keydown and remove on keyup', () => {
        const tecla = document.querySelector('.tecla');

        const keydownEvent = new KeyboardEvent('keydown', { code: 'Space' });
        const keyupEvent = new KeyboardEvent('keyup');

        tecla.dispatchEvent(keydownEvent);
        expect(tecla.classList.contains('ativa')).toBe(true);

        tecla.dispatchEvent(keyupEvent);
        expect(tecla.classList.contains('ativa')).toBe(false);
    });

    test('should play sound and add "ativa" class when "KeyQ" is pressed', () => {
        const tecla = document.querySelector('.tecla');
        const audio = document.querySelector('#som_tecla_pom');
        audio.play = jest.fn();

        const keydownEvent = new KeyboardEvent('keydown', { code: 'KeyQ' });

        tecla.dispatchEvent(keydownEvent);

        expect(tecla.classList.contains('ativa')).toBe(true);
        expect(audio.play).toHaveBeenCalled();
    });
});
