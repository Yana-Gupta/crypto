const Loader = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center py-3">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-700 mx-4"></div>
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sky-700 mx-4"></div>
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-cyan-700 mx-4"></div>
    </div>
  )
};

export default Loader;
