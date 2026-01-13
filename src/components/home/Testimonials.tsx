export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Software Engineer',
      content: 'This platform made investing in mutual funds so simple and transparent. The portfolio tracking features are excellent!',
      avatar: 'RS'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Business Owner',
      content: 'I love the detailed fund analysis and historical performance data. It helped me make informed investment decisions.',
      avatar: 'PP'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      role: 'Marketing Professional',
      content: 'The user interface is intuitive and the customer support is outstanding. Highly recommend for both beginners and experienced investors.',
      avatar: 'AK'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Investors Say</h2>
          <p className="text-lg text-gray-600">Join thousands of satisfied investors</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
