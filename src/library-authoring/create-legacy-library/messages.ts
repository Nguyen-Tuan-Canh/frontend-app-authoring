import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  createLibrary: {
    id: 'course-authoring.library-authoring.create-legacy-library',
    defaultMessage: 'Tạo thư viện kiểu cũ mới',
    description: 'Header for the create legacy library form',
  },
  titleLabel: {
    id: 'course-authoring.library-authoring.create-legacy-library.form.title.label',
    defaultMessage: 'Tên thư viện kiểu cũ',
    description: 'Label for the title field when creating a legacy library.',
  },
  createLibraryButton: {
    id: 'course-authoring.library-authoring.create-legacy-library.form.create-library.button',
    defaultMessage: 'Tạo thư viện kiểu cũ',
    description: 'Button text for creating a new legacy library.',
  },
  createLibraryButtonPending: {
    id: 'course-authoring.library-authoring.create-legacy-library.form.create-library.button.pending',
    defaultMessage: 'Đang tạo thư viện kiểu cũ…',
    description: 'Button text while the legacy library is being created.',
  },
});

export default messages;
