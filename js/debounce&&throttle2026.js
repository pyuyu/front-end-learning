function debounce(fn, wait, immediate = false) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }

        if (immediate) {
            // 如果要求立即执行，且当前没有定时器在跑，说明是“第一次”触发
            const callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (callNow) {
                fn.apply(this, args);
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, wait)
        }
    }
}

// timer版本 延后执行 停止后还会执行最后一次
function throttle1(fn, wait) {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, wait)
    }
}

// 时间戳版本 立即执行一次 停止后不再执行
function throttle2(fn, wait) {
    let pre = 0;
    return function (...args) {
        const now = Date.now();
        if (now - pre >= wait) {
            pre = now;
            fn.apply(this, args)
        }
    }

}
// https://business.gemini.google/home/cid/5702ee6c-a101-4a20-9f58-ebeae4abbdda/r/share/756a23c9-9ef1-4224-be0a-02f3560e315d?loginHint=pyuyu1024%40gmail.com&csesidx=372720027
function throttle(fn, wait) {
    let pre = 0;
    let timer = null;
    return function (...args) {
        const now = Date.now();
        const remaining = wait - (now - pre);
        if (remaining <= 0) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            pre = now;
            fn.apply(this, args);
        } else if (!timer) {
            timer = setTimeout(() => {
                pre = Date.now();
                timer = null;
                fn.apply(this, args);
            }, remaining)
        }
    }
}