import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import formReducer from './utilsModalFormReducer'

function renderWithProviders(
  ui,
  {
    preloadedState = {
        isOpenModal: true
    },
    store = configureStore({ reducer: { form: formReducer } }, preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}


export default renderWithProviders;