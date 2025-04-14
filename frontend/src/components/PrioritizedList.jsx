const PrioritizedList = ({ aiText, isLoading }) => {
    if (isLoading) {
        return (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </div>
        );
    }


    const tasks = aiText.split('\n').filter(task => task.trim() !== '');

    return (
        <ul>
            {tasks.map((task, index) => {
                const [ title, deadline ] = task.split('(Deadline:');
                return (
                    <li key={index} className="my-3">
                        <h3 className="font-semibold text-lg">{title.trim()}</h3>
                        {deadline && (
                            <p className="text-gray-600 mt-1">
                                Deadline: {deadline.replace(')', '').trim()}
                            </p>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default PrioritizedList