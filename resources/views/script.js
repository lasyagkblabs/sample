const name = document.getElementsById('name')
const password = document.getElementsById('password')
const form = document.getElementsById('form')
const errorElement = document.getElementsById('error')

form.addEventListener('submit',(e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
})