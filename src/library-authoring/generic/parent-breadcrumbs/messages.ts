import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  breadcrumbsAriaLabel: {
    id: 'course-authoring.library-authoring.parent-breadcrumbs.label.text',
    defaultMessage: 'Đường dẫn điều hướng',
    description: 'Aria label for navigation breadcrumbs',
  },
  breadcrumbsSectionsDropdown: {
    id: 'course-authoring.library-authoring.parent-breadcrumbs.dropdown.sections',
    defaultMessage: 'Các phần',
    description: 'Title for dropdown menu containing sections',
  },
  breadcrumbsSubsectionsDropdown: {
    id: 'course-authoring.library-authoring.parent-breadcrumbs.dropdown.subsections',
    defaultMessage: 'Các tiểu phần',
    description: 'Title for dropdown menu containing subsections',
  },
});

export default messages;
