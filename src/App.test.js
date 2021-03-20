import { render, screen } from '@testing-library/react'
import App from './App'
import fixture from './models/dt.json'

test('renders game title', () => {
  const { getByText } = render(<App />)
  expect(getByText(fixture.name)).toBeInTheDocument()
})
