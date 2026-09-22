export async function getNurses() {
  return [
    { 
      _id: '1', 
      fullName: 'Priya Sharma', 
      email: 'priya@example.com',
      phone: '123-456-7890',
      location: 'Toronto', 
      professionalRole: 'Registered Nurse',
      service: 'Home Nursing Care',
      yearsOfExperience: 5,
      availability: 'Available' as const
    },
    { 
      _id: '2', 
      fullName: 'Grace Adeyemi', 
      email: 'grace@example.com',
      phone: '123-456-7891',
      location: 'Vancouver', 
      professionalRole: 'Nurse Practitioner',
      service: 'Elderly Care',
      yearsOfExperience: 8,
      availability: 'Available' as const
    },
    { 
      _id: '3', 
      fullName: 'Daniel Osei', 
      email: 'daniel@example.com',
      phone: '123-456-7892',
      location: 'Calgary', 
      professionalRole: 'Critical Care Nurse',
      service: 'Post-Surgery Care',
      yearsOfExperience: 10,
      availability: 'Available' as const
    }
  ]
}