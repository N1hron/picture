import { setFileName } from './forms'

export default function dragAndDrop() {
    const fileInputs = document.querySelectorAll('[type="file"]')

    fileInputs.forEach(input => {
        ['dragover'].forEach(eventType => input.addEventListener(eventType, () => highlight(input)));
        ['dragleave', 'drop'].forEach(eventType => input.addEventListener(eventType, () => unhighlight(input)))
        input.addEventListener('drop', event => {
            event.preventDefault()
        
            input.files = event.dataTransfer.files
            setFileName(input)
        })
    })
}

function highlight(input) {
    input.closest('.file_upload').style.cssText = `background-color: #d0d0d0;border-radius: 26px;`
}

function unhighlight(input) {
    input.closest('.file_upload').style.cssText = ''
}