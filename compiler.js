function isValidate(file) {
    const chars = '+1I|l=-/(){}_!\n\r '.split('')
    const check = chars.reduce((acc, cur) => {
        return acc.replace(new RegExp(`[${cur}]`, 'g'), '')
    }, file)
    if (check !== '') {
        throw new Error(`코드에 ${chars.join(', ')}만 포함되어야 합니다.\n 현재 코드에는 ${check}가 포함되어 있습니다.`)
        return false
    }
    return true
}

function compile(input, file) {
    if (!Number.isInteger(input) || l <= 0) throw new Error('l의 초기값은 자연수만 됩니다.')
    file = `I l = ${input}\n${file}`
    const change = {
        '/': 'while',
        '_': 'result += \'\\n\' + ',
        'I': 'let',
    }
    for (const from in change) {
        const to = change[from]
        file = file.replace(new RegExp(`[${from}]`, 'g'), to)
    }
    return eval(`(() => {let result = ''\n${file}\nreturn result.slice(1)})()`)
}