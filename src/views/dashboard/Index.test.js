import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './index'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText('Hello React')
  expect(linkElement).toBeInTheDocument()
})
