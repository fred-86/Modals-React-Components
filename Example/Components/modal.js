/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import '../Styles/Modal.css'
/**
 *  Modal
 * @component
 * @prop {boolean} isShowing - function that uses the Hooks useModal() with State
 * @prop {function} hide - function that uses the Hooks useModal() function to close or open
 * @prop {...string | ...element} [title] - optional title that will be in the header
 * @prop {element} [children] - optional child element that will be in the body
 * @prop {string} [classNameBody] - optional className to customize the body content
 * @prop {Objetct.<active: Bool, key: String>} [keydown] - optional for configuring close modal by Key
 * @returns {React.ReactElement}
 */
export function Modal({
    isShowing,
    hide,
    title,
    children,
    classNameBody,
    keydown,
}) {
    if (typeof keydown !== 'undefined') {
        if (keydown.active) {
            const handleKeyDown = useCallback(
                (e) => {
                    console.log(e)
                    if (e.key === keydown.key) {
                        hide()
                    }
                },
                [hide]
            )
            useEffect(() => {
                document.addEventListener('keydown', handleKeyDown)
                return () =>
                    document.removeEventListener('keydown', handleKeyDown)
            }, [hide])
        }
    }

    return isShowing
        ? ReactDOM.createPortal(
            <>
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="modal">
                            <div
                                className={`modal-header ${
                                    title ? '' : 'modal-header--withoutTitle'
                                }`}
                            >
                                {typeof title === 'string' ? (
                                    <div
                                        className={`modal-title ${
                                            title.length > 60
                                                ? 'modal-title--length'
                                                : ''
                                        }`}
                                    >
                                        {title && <h4>{title}</h4>}
                                    </div>
                                ) : (
                                    title
                                )}

                                <div
                                    className={`modal-close ${
                                        children
                                            ? 'modal-close--children '
                                            : ''
                                    }`}
                                >
                                    <button
                                        type="button"
                                        className="close-btn"
                                        onClick={hide}
                                    >
                                        <span className="close-cross">
                                              &times;
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {children && (
                                <div
                                    className={`modal-body ${
                                        classNameBody ||
                                          Modal.defaultProps.classNameBody
                                    }`}
                                >
                                    {children}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </>,
            document.body
        )
        : null
}
Modal.defaultProps = {
    classNameBody: 'modal-body',
}
Modal.propTypes = {
    isShowing: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    classNameBody: PropTypes.string,
    keydown: PropTypes.shape({
        active: PropTypes.bool,
        key: PropTypes.string,
    }),
}
