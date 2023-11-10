export const incNumber = () => {
    return {
        type: "INCREMENT"
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}

export const setNumber = (num) => {
    return {
        type: "SET",
        payload: num
    }
}