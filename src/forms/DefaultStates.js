export const workoutDefaultState = [
    {
        componentType: 'select',
        name: 'exercise',
        value: 'Select',
        label: 'Select Exercise',
        options: ['Squat', 'Bench', 'Overhead Press', 'Bent Over Row', 'Deadlift'],
    },
    {
        componentType: 'input',
        name: 'weight',
        value: '',
        placeholder: 'Weight Used (lbs)',
        type: 'number'
    },
    {
        componentType: 'select',
        name: 'reps',
        value: 'Select',
        label: 'Select Reps',
        options: [1, 3, 5, 10]
    }
]

export const loginDefaultState = [
    {
        componentType: 'input',
        name: 'email',
        value: '',
        placeholder: 'Email Address',
        type: 'email',
    },
    {
        componentType: 'input',
        name: 'password',
        value: '',
        placeholder: 'Password',
        type: 'password',
    }
]

export const signupDefaultState = [
    {
        componentType: 'input',
        name: 'email',
        value: '',
        placeholder: 'Email Address',
        type: 'email'
    },
    {
        componentType: 'input',
        name: 'password1',
        value: '',
        placeholder: 'Password',
        type: 'password',
    },
    {
        componentType: 'input',
        name: 'password2',
        value: '',
        placeholder: 'Re-type Password',
        type: 'password',
    }

]