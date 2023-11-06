function validate(file) {
    const chars = '+1I|l=-/(){}_!\n\r '.split('')
    const check = chars.reduce((acc, cur) => {
        return acc.replace(new RegExp(`[${cur}]`, 'g'), '')
    }, file)
    if (check !== '') {
        return {
            success: false,
            msg: `You should only contain ${chars.join(', ')}.\n However, your code contains ${check}.`
        }
    }
    return {
        success: true
    }
}

function compile(file) {
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