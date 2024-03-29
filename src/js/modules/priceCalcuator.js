export default function priceCalcuator() {
    const size = document.querySelector('#size'),
          material = document.querySelector('#material'),
          options = document.querySelector('#options'),
          promocode = document.querySelector('#promocode')

    const priceContainer = document.querySelector('.calc-price'),
          defaultValue = 'Для расчета нужно выбрать размер картины и материал картины'

    const fields = [size, material, options, promocode]

    fields.forEach(field => field.addEventListener('input', updatePrice))
    priceContainer.closest('form').addEventListener('reset', () => priceContainer.textContent = defaultValue)

    updatePrice()

    function updatePrice() {
        let price

        if (size.value && material.value && options.value) {
            price = (Number(size.value) + Number(material.value)) * options.value
            if (promocode.value === 'IWANTPOPART') price *= 0.7
        } else price = 0
        
        priceContainer.textContent = price ? `${Math.floor(price)}руб.` : defaultValue
    }
}