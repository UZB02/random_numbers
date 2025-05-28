    const texts = {
      uz: {
        title: "Yashirin Raqamli Kartalar",
        lang: "Til",
        min: "Minimum",
        max: "Maksimum",
        button: "Qayta boshlash"
      },
      ru: {
        title: "Карты с Скрытыми Числами",
        lang: "Язык",
        min: "Минимум",
        max: "Максимум",
        button: "Перезапустить"
      },
      en: {
        title: "Hidden Number Cards",
        lang: "Language",
        min: "Min",
        max: "Max",
        button: "Restart"
      }
    };

    function updateTexts() {
      const lang = document.getElementById('lang').value;
      document.getElementById('title').innerText = texts[lang].title;
      document.getElementById('lang-label').innerText = texts[lang].lang;
      document.getElementById('min-label').innerText = texts[lang].min;
      document.getElementById('max-label').innerText = texts[lang].max;
      document.getElementById('btn-generate').innerText = texts[lang].button;
    }

    function generateCards() {
      const container = document.getElementById('card-container');
      container.innerHTML = '';

      const min = parseInt(document.getElementById('minNum').value);
      const max = parseInt(document.getElementById('maxNum').value);

      if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Raqam oralig‘i noto‘g‘ri!");
        return;
      }

      let numbers = [];
      for (let i = min; i <= max; i++) {
        numbers.push(i);
      }

      // Shuffle
      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }

      const selectedNumbers = numbers.slice(0, 16);

      selectedNumbers.forEach(number => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <div class="card-inner">
            <div class="card-front">?</div>
            <div class="card-back">${number}</div>
          </div>
        `;

        card.addEventListener('click', () => {
          card.classList.toggle('flipped');
        });

        container.appendChild(card);
      });
    }

    // Boshlang‘ich chaqirish
    updateTexts();
    generateCards();