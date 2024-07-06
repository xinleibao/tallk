

export default function (timestamp, flag = false) {

    const date = new Date(timestamp)

    if (flag) {
        // 精确到时分秒
        const time = date.toLocaleString()
        return time
    }

    const time = date.toLocaleDateString()
    return time

}

// export default function(timestamp)