# Modals-React-Components

## Table of Contents

-   [Modal Component React](#modal-component-react)
    -   [Table of Contents](#table-of-contents)
    -   [General information](#general-information)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [API Reference](#api-reference)
    -   [Usages](#usages)
        -   [**without children**](#without-children)
        -   [**with children**](#with-children)

## General information

A Modal component that utilizes ReactDOM.createPortal(). A Portal in React is a component that allows rendering elements into a different component tree from where they are declared.

for more information see [Portals](https://reactjs.org/docs/portals.html#gatsby-focus-wrapper) in React doc

## Prerequisites

-   <img src="https://img.shields.io/badge/Node-v16.12.0-blue">
-   <img src="https://img.shields.io/badge/React-v18.2.0-green">
-   <img src="https://img.shields.io/badge/npm-8.1.0-blue"> or <img src="https://img.shields.io/badge/Yarn-v1.14.0-green">

## Installation

To install, you can use npm or yarn:

```
   $ npm install Modals-React-Components

   $ yarn add Modals-React-Components
```

## API Reference

-   to initialise the modal, you need to import
    -   `const { isShowing, toggle } = useModal()`
-   the modal component has several optional and required props
    -   Required
        -   `isShowing` type of boolean
        -   `hide` function for opening and closing
    -   Optionnal
        -   `title` can receive a string or component
        -   `children` can receive one or more components, which will constitute the body
        -   `classNameBody` if you want to add your own className for the Body
        -   `keydown` iy you want to use event KeyDown to close Modal

## Usages

### **without children**

```Jsx
import { useModal } from '../Hooks/useModal'
import '../Styles/App.css'
import { Modal } from './modal'

function App() {
    const { isShowing, toggle } = useModal()
    return (
        <div className="App">
            <header className="App-header">
                <button className="modal-toggle" onClick={toggle}>
                    Show modal
                </button>
            </header>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                title='hello World!!'
                keydown={{ active: true, key: 'Escape' }}
            />
        </div>
    )
}

export default App
```

---

### **with children**

```Jsx
import { useModal } from '../Hooks/useModal'
import '../Styles/App.css'
import { Modal } from './modal'

function App() {
    const { isShowing, toggle } = useModal()
    return (
        <div className="App">
            <header className="App-header">
                <button className="modal-toggle" onClick={toggle}>
                    Show modal
                </button>
            </header>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                title='hello World!!'
                classNameBody="your class"
            >
                // do something

            </Modal>
        </div>
    )
}

export default App
```

[def]: #table-of-contents
