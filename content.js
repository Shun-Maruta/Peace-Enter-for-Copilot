document.addEventListener('keydown', (event) => {
    const textarea = document.querySelector('textarea')
    if (!textarea || !textarea.contains(event.target)) return

    if (event.key === 'Enter' && event.isComposing) return

    if (event.key === 'Enter' && !event.ctrlKey) {
        event.preventDefault()
        event.stopPropagation()

        const start = textarea.selectionStart
        const end = textarea.selectionEnd

        textarea.value = textarea.value.substring(0, start) + "\n" + textarea.value.substring(end)
        textarea.selectionStart = textarea.selectionEnd = start + 1

        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
    }
})
