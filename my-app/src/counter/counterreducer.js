

//Redux toolkit : immer.js...

const increment = 'counter/increment'

const CounterReducer = (state = { value: 10 }, action) => {
    switch (action.type) {
        case increment:
            return { ...state, value: state.value + 1 }
        default:
            return state
    }
}

export {CounterReducer,increment}
