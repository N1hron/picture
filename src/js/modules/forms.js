const messages = {
    loading: {
        description: 'Загрузка...',
        image: 'assets/img/spinner.gif'
    },
    success: {
        description: 'Спасибо! Скоро мы с вами свяжемся',
        image: 'assets/img/ok.png'
    },
    failure: {
        description: 'Что-то пошло не так...',
        image: 'assets/img/fail.png'
    }
}

const urls = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
}

export default function forms() {
    const forms = document.querySelectorAll('form'),
          fileInputs = document.querySelectorAll('[type="file"]')

    fileInputs.forEach(fileInput => {
        fileInput.addEventListener('change', () => {
            let [ name, extension ] = fileInput.files[0].name.split('.')
            name = name.length > 7 ? name.slice(0, 7).trim() + '...' : name
            fileInput.parentElement.querySelector('[data-file]').textContent = name + '.' + extension
        })
    })

    forms.forEach(form => {
        const message = document.createElement('div'),
              description = document.createElement('p'),
              image = document.createElement('img'),
              fileInput = form.querySelector('[type="file"]')
        
        message.classList.add('status-message', 'animated', 'fadeIn')

        let timeoutId

        form.addEventListener('submit', event => {
            event.preventDefault()

            form.style.display = 'none'
            message.append(description, image)
            form.parentElement.appendChild(message)

            setMessage('loading')

            postData(urls.designer, new FormData(form))
                .then(res => {
                    console.log(res)
                    setMessage('success')
                })
                .catch(error => {
                    console.log(error)
                    setMessage('failure')
                })
                .finally(() => timeoutId = setTimeout(resetForm, 5000))
        })

        enableValidation(form)

        function resetForm() {
            form.reset()
            if (fileInput) fileInput.parentElement.querySelector('[data-file]').textContent = 'Файл не выбран'
            form.style.display = ''
            message.remove()
        }

        function setMessage(type) {
            description.textContent = messages[type].description
            image.setAttribute('src', messages[type].image)
        }
    })
}

function enableValidation(form) {
    form.querySelectorAll('input, textarea').forEach(item => {
        if (!item.classList.contains('promocode')) {
            item.addEventListener('keypress', event => {
                if (event.key.match(/[^а-яё0-9]/)) event.preventDefault()
            })
        }
    })
}

async function postData(url, data) {
    return await fetch(url, {
        method: 'POST',
        body: data
    }).then(res => {
        if (!res.ok) throw new Error('Could not post data, status: ' + res.status)
        return res.text()
    })
}