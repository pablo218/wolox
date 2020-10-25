import { useCallback, useReducer } from 'react'

const formRducer = (state, action) => {

    switch (action.type) {

        case "INPUT_CHANGE":

            let formIsValid = true;

            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            }
        default:
            return state
    }
}


export const useForm = (initialInputs, initialFormValidity) => {

    const [formState, dispatchForm] = useReducer(formRducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    })

    const inputHandler = useCallback((id, value, isValid) => {

        dispatchForm({
            type: "INPUT_CHANGE",
            value: value,
            isValid: isValid,
            inputId: id

        })

    }, [])


    return [formState, inputHandler]

}