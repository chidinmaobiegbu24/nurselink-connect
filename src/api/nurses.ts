import { defineEventHandler, createError } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const nurses = [
      { id: 1, name: 'Priya Sharma', specialty: 'General Care', location: 'Toronto' },
      { id: 2, name: 'Grace Adeyemi', specialty: 'Emergency Care', location: 'Vancouver' },
      { id: 3, name: 'Daniel Osei', specialty: 'Critical Care', location: 'Calgary' }
    ]
    
    return nurses
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch nurses'
    })
  }
})