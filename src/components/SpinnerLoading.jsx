export const SpinerLoading = () => {
    return (
      <div className='flex justify-center items-center h-screen'>
          <div className='relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-pink-600 via-indigo-600 to-green-600'>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-100 rounded-full'>
              </div>
          </div>
      </div>
    )
  }