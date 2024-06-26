export default function RegistrationsPage() {
    const registrations = [
      { state: 'Alaska', fields: ['Electrical'] },
      { state: 'Arizona', fields: ['Electrical'] },
      { state: 'California', fields: ['Mechanical', 'Electrical'] },
      { state: 'Colorado', fields: ['Mechanical', 'Electrical'] },
      { state: 'Georgia', fields: ['Mechanical'] },
      { state: 'Hawaii', fields: ['Mechanical', 'Electrical'] },
      { state: 'Idaho', fields: ['Mechanical', 'Electrical'] },
      { state: 'Illinois', fields: ['Electrical'] },
      { state: 'Kentucky', fields: ['Mechanical', 'Electrical'] },
      { state: 'Michigan', fields: ['Mechanical'] },
      { state: 'Montana', fields: ['Mechanical', 'Electrical'] },
      { state: 'New Mexico', fields: ['Mechanical', 'Electrical'] },
      { state: 'Nevada', fields: ['Mechanical', 'Electrical'] },
      { state: 'New York', fields: ['Electrical'] },
      { state: 'Ohio', fields: ['Electrical'] },
      { state: 'Oklahoma', fields: ['Electrical'] },
      { state: 'Oregon', fields: ['Mechanical', 'Electrical'] },
      { state: 'Texas', fields: ['Electrical'] },
      { state: 'Utah', fields: ['Electrical'] },
      { state: 'Washington', fields: ['Mechanical', 'Electrical'] },
      { state: 'Wyoming', fields: ['Electrical'] },
    ]
  
    return (
      <div className="text-white font-playfair">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-bold">Registrations</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {registrations.map(({state, fields}) => (
          <li key={state} className="text-lg">
            <span className="bg-yellow-500 text-black font-bold px-2">{state}:</span>
            <span className="bg-gray-800 px-2 ml-2">{fields.join(', ')}</span>
          </li>
        ))}
      </ul>
      <h3 className="text-2xl mb-4 font-bold">Not LISTED?</h3>
      <p className="text-lg">
        We provide engineering services to the entire United States,
        including Alaska and Hawaii. If your state is not named within
        the above list of registrations, please contact us or call 503-292-6000.
      </p>
    </div>
    )
  }