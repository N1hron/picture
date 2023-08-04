export default function priceCalcuator() {
    const size = document.querySelector('#size'),
          material = document.querySelector('#material'),
          options = document.querySelector('#options'),
          promocode = document.querySelector('#promocode')

    const priceContainer = document.querySelector('.calc-price'),
          defaultValue = 'Для расчета нужно выбрать размер картины и материал картины'

    let price = 0

    updatePrice();

    [size, material, options, promocode].forEach(item => {
        item.addEventListener('input', updatePrice)
    })

    function updatePrice() {
        if (size.value && material.value && options.value) {
            price = (Number(size.value) + Number(material.value)) * options.value
            if (promocode.value === 'IWANTPOPART') price *= 0.7
        } else price = 0
        
        priceContainer.textContent = price ? price : defaultValue
    }
}