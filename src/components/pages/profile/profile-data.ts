import { Validators } from '@angular/forms';

export const profileFields: any[] = [
  {
    key: 'username',
    type: 'text',
    label: 'Username',
    value: '',
    validators: [Validators.required],
  },

  {
    key: 'email',
    type: 'email',
    label: 'Email Address',
    value: '',
    validators: [Validators.required, Validators.email],
  },

  {
    key: 'phoneNumber',
    type: 'tel',
    label: 'Phone Number',
    value: '',
    validators: [Validators.required],
  },

  {
    key: 'password',
    type: 'password',
    label: 'Password',
    value: '',
    validators: [Validators.required],
  },

  {
    key: 'percentage',
    type: 'number',
    label: 'Percentage',
    value: '',
  },

  {
    key: 'role',
    type: 'select',
    label: 'Role',
    value: '',

    options: [
      {
        label: 'Frontend Developer',
        value: 'frontend',
      },
      {
        label: 'Backend Developer',
        value: 'backend',
      },
      {
        label: 'Full Stack Developer',
        value: 'fullstack',
      },
      {
        label: 'UI/UX Designer',
        value: 'designer',
      },
    ],
  },

  {
    key: 'startDate',
    type: 'date',
    label: 'Start Date',
    value: '',
  },

  {
    key: 'birthDate',
    type: 'date',
    label: 'Birth Date',
    value: '',
  },

  {
    key: 'education',
    type: 'select',
    label: 'Education',
    value: '',

    options: [
      {
        label: 'SSC',
        value: 'ssc',
      },
      {
        label: 'HSC',
        value: 'hsc',
      },
      {
        label: 'Diploma',
        value: 'diploma',
      },
      {
        label: 'Bachelor Degree',
        value: 'bachelor',
      },
      {
        label: 'Master Degree',
        value: 'master',
      },
    ],
  },

  {
    key: 'location',
    type: 'text',
    label: 'Location',
    value: '',
  },

  {
    key: 'state',
    type: 'select',
    label: 'State',
    value: '',

    options: [
      {
        label: 'Gujarat',
        value: 'gujarat',
      },
      {
        label: 'Maharashtra',
        value: 'maharashtra',
      },
      {
        label: 'Rajasthan',
        value: 'rajasthan',
      },
      {
        label: 'Madhya Pradesh',
        value: 'madhya-pradesh',
      },
    ],
  },

  {
    key: 'skills',
    type: 'array',

    value: [{}],

    arrayFields: [
      {
        key: 'skill',
        type: 'text',
        label: 'Skill',
        value: '',
        validators: [Validators.required],
      },
    ],
  },
];
