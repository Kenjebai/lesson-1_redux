
let num = 1
const initialState = {
    title: num
}

export default function reducer (state = initialState, action) {
    if(action.type === 'CHANGE_PLUS'){
        return{title: ++num}
    }else if(action.type === 'CHANGE_MINUS'){
        return{title: --num}
    }
    return state
}