/* в этот файл добавляет скрипты*/
const sliderCatalog = document.querySelector('.catalog__filter-price-slider');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price')

noUiSlider.cssClasses.target += ' range-slider';

noUiSlider.create(sliderCatalog, {
  range: {
    min: 0,
    max: 1000,
  },
  start: [0,900],
  step: 50,
  connect: true,
  cssPrefix: 'noui-', // defaults to 'noUi-',
}) ;

sliderCatalog.noUiSlider.on('update', (values) => {
  minPriceInput.value = Math.trunc(values[0]);
  maxPriceInput.value = Math.trunc(values[1]);
})
