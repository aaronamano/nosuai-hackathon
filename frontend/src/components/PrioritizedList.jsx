import React from 'react';

const PrioritizedList = ({ aiText }) => {
    const tasks = aiText.split('\n').filter(task => task.trim() !== '');

    return (
        <ul>
            {tasks.map((task, index) => {
                const [ title, deadline ] = task.split('(Deadline:');
                return (
                    <li key={index} className="my-2">
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