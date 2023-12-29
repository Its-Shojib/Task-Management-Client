

const UserTypesSection = () => {
  const userTypes = [
    {
      id: 1,
      name: 'Developers',
      description: 'Organize your coding tasks efficiently.',
      photo: 'https://i.ibb.co/qRLK5cY/image.png', // Placeholder image, replace with actual URLs
    },
    {
      id: 2,
      name: 'Corporate Professionals',
      description: 'Stay on top of your work tasks.',
      photo: 'https://i.ibb.co/njFnyDF/image.png',
    },
    {
      id: 3,
      name: 'Bankers',
      description: 'Manage your tasks in the financial sector.',
      photo: 'https://i.ibb.co/NFYHrsY/image.png',
    },
    {
      id: 4,
      name: 'Students',
      description: 'Keep track of your assignments and projects.',
      photo: 'https://i.ibb.co/HFLGBnY/image.png',
    },
    {
      id: 5,
      name: 'Entrepreneurs',
      description: 'Stay organized while building your startup.',
      photo: 'https://i.ibb.co/nwYhkL9/image.png',
    },
    {
      id: 6,
      name: 'Freelancers',
      description: 'Manage your freelance projects and deadlines.',
      photo: 'https://i.ibb.co/WvpdwW9/image.png',
    },
  ];

  return (
    <section className="bg-gray-100 py-12 w-full md:w-10/12 mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Who can benefit from our Todo List?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((userType) => (
            <div key={userType.id} className="bg-white p-6 rounded-md shadow-md">
              <img
                src={userType.photo}
                alt={`Photo of ${userType.name}`}
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold mb-2">{userType.name}</h3>
              <p className="text-gray-700">{userType.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
