// Dismiss Keyboard Higher-Order Component
import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

const DismissKeyboardHOC = (Comp) => {
    return ({ children, ...props }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Comp {...props}>
                {children}
            </Comp>
        </TouchableWithoutFeedback>
    )
}

export default DismissKeyboardHOC

// Usage
// import { DismissKeyboardView } from './hoc/location'
// ...
// render() {
//     <DismissKeyboardView>
//         ...
//     </DismissKeyboardView>
// }
