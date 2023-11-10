function validate(file) {
    const chars = '+1I|l=-/(){}_!\n\r '.split('')
    const check = chars.reduce((acc, cur) => {
        return acc.replace(new RegExp(`[${cur}]`, 'g'), '')
    }, file)
    if (check !== '') {
        return {
            success: false,
            msg: `코드에 ${chars.join(', ')}만 포함되어야 합니다.\n 현재 코드에는 ${check}가 포함되어 있습니다.`
        }
    }
    return {
        success: true
    }
}

function compile(input, file) {
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