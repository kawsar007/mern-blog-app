const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[220px]'>
      <div className='animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900 dark:border-white'></div>
      <p className='ml-2 text-xl dark:text-white'>Please wait...</p>
    </div>
  );
};

export default Loading;
