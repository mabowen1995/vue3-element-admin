import axios, { AxiosRequestConfig } from "axios";

// 存储每个请求中的map
const pendingXHRMap = new Map();

export const createDuplicatedKey = (config: AxiosRequestConfig) => {
    // 正则匹配，去掉query参数
    const url = config.url!.match(/(.*)(?=\?)/) ? config.url!.match(/(.*)(?=\?)/)![0] : config.url;
    // 可在此设置用户自定义的唯一标识，默认按请求方式 + 请求地址判断
    return `${config.method}${url}`
}

export const addPendingXHR = (config: AxiosRequestConfig) => {
    const duplicatedKey = JSON.stringify({
        duplicatedKey: createDuplicatedKey(config),
    })
    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
        if (duplicatedKey && !pendingXHRMap.has(duplicatedKey)) {
            pendingXHRMap.set(duplicatedKey, cancel)
        }
    })
}

export const removePendingXHR = (config: AxiosRequestConfig) => {
    const duplicatedKey = JSON.stringify({
        duplicatedKey: createDuplicatedKey(config),
    })
    if (duplicatedKey && pendingXHRMap.has(duplicatedKey)) {
        const cancel = pendingXHRMap.get(duplicatedKey)
        cancel(duplicatedKey)
        pendingXHRMap.delete(duplicatedKey)
    }
}