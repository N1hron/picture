export default function bindPhoneMask(inputSelector) {
    const mask = '+7 (___) ___ __ __',
          defaultValue = mask.replace(/\D/g, ''),
          inputs = document.querySelectorAll(inputSelector)

    inputs.forEach(input => {
        ['focus', 'input', 'blur'].forEach(eventType => input.addEventListener(eventType, createMask))
        input.addEventListener('click', () => input.selectionStart = input.value.length)
    })

    function createMask(event) {
        let currentValue = this.value.replace(/\D/g, '').slice(0, 11)

        if (event.type === 'blur') {
            if (currentValue === defaultValue) this.value = ''
        } else {
            if (!currentValue) currentValue = defaultValue
            this.value = setMaskedValue(currentValue)
        }
    }

    function setMaskedValue(value) {
        let valueOffset = 0

        return mask.replace(/./g, match => {
            return /[_\d]/.test(match) && valueOffset < value.length ? value[valueOffset++] : (valueOffset >= value.length ? '' : match)
        })
    }
}


