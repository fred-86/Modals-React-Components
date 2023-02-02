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
                keydown={{ active: true, key: 'Escape' }}
            />
        </div>
    )
}

export default App
