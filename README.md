# MIDI Drum

Project developed to improve my skills in JavaScript.

![MIDI Drum](https://github.com/GabrielNeves/midi_drum/blob/master/images/thumbnail.png)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

MIDI Drum is a web-based drum kit that allows users to play drum sounds by clicking on buttons or pressing specific keys on the keyboard. The project is built using HTML, CSS, and JavaScript.

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/GabrielNeves/midi_drum.git
    ```

2. Open the [index.html](http://_vscodecontentref_/0) file in your favorite browser.

## Usage

- Click on the drum buttons to play the corresponding sound.
- Use the following keys to play the sounds:
  - `Q`: Pom
  - `W`: Clap
  - `E`: Tim
  - `A`: Puff
  - `S`: Splash
  - `D`: Toim
  - `Z`: Psh
  - `X`: Tic
  - `C`: Tom

## JavaScript Code

```javascript
function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento nao encontrado ou seletor nao encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
    const idAudio = `#som_${tecla.classList[1]}`;

    tecla.onclick = () => tocaSom(idAudio);

    tecla.onkeydown = evento => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

        if (evento.code === 'KeyQ') {
            listaDeTeclas[0].classList.add('ativa');
            tocaSom('#som_tecla_pom');
        }
    };

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
        listaDeTeclas[0].classList.remove('ativa');
    };
});
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.