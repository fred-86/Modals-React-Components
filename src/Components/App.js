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
                title="Bonjour"
                classNameBody="toto"
                keydown={{ active: false, key: 'Escape' }}
            >
                {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit molestias maxime obcaecati dolore officia iure
                    voluptatibus, ipsam dignissimos qui quod neque dolorum odit,
                    vitae minus eaque assumenda nesciunt voluptatum repellendus!
                </p> */}
            </Modal>
        </div>
    )
}

export default App
