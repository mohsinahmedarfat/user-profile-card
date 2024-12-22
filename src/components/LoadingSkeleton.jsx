const LoadingSkeleton = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-white">
      <div className="p-10 border border-gray-200 w-[625px] h-80 animate-pulse">
        <div className="border-gray-300 border-2 rounded-2xl px-8 py-10 h-full">
          <div className="flex gap-10">
            {/* Skeleton for Profile Image */}
            <div className="border-gray-300 border-2 rounded-2xl w-1/3 bg-gray-200 h-36"></div>
            {/* Skeleton for Text */}
            <div className="p-3 text-start space-y-4 w-2/3">
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
