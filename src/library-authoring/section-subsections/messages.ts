import { defineMessages } from '@edx/frontend-platform/i18n';

export const messages = defineMessages({
  breadcrumbsAriaLabel: {
    id: 'course-authoring.library-authoring.section-page.breadcrumbs.label.text',
    defaultMessage: 'Đường dẫn điều hướng',
    description: 'Aria label for navigation breadcrumbs',
  },
  orderUpdatedMsg: {
    id: 'course-authoring.library-authoring.container-component.order-updated-msg.text',
    defaultMessage: 'Đã cập nhật thứ tự',
    description: 'Toast message displayed when children items are successfully reordered in a container',
  },
  failedOrderUpdatedMsg: {
    id: 'course-authoring.library-authoring.container-component.failed-order-updated-msg.text',
    defaultMessage: 'Không thể cập nhật thứ tự các mục con',
    description: 'Toast message displayed when reordering of children items in container fails',
  },
  draftChipText: {
    id: 'course-authoring.library-authoring.container-component.draft-chip.text',
    defaultMessage: 'Bản nháp',
    description: 'Chip in children in section and subsection page that is shown when children has unpublished changes',
  },
});

export const sectionMessages = defineMessages({
  infoButtonText: {
    id: 'course-authoring.library-authoring.section-header.buttons.info',
    defaultMessage: 'Thông tin phần',
    description: 'Button text to section sidebar from section page',
  },
  addContentButton: {
    id: 'course-authoring.library-authoring.section-header.buttons.add-subsection',
    defaultMessage: 'Thêm tiểu mục mới',
    description: 'Text of button to add subsection to section',
  },
  addExistingContentButton: {
    id: 'course-authoring.library-authoring.section-header.buttons.add-existing-subsection',
    defaultMessage: 'Thêm tiểu mục có sẵn',
    description: 'Text of button to add existing content to section',
  },
  newContentButton: {
    id: 'course-authoring.library-authoring.section-header.buttons.add-new-subsection',
    defaultMessage: 'Thêm tiểu mục',
    description: 'Text of button to add new subsection to section in header',
  },
  noChildrenText: {
    id: 'course-authoring.library-authoring.section.no-children.text',
    defaultMessage: 'Phần này hiện đang trống',
    description: 'Message to display when section has not children',
  },
});

export const subsectionMessages = defineMessages({
  infoButtonText: {
    id: 'course-authoring.library-authoring.subsection-header.buttons.info',
    defaultMessage: 'Thông tin tiểu mục',
    description: 'Button text to subsection sidebar from subsection page',
  },
  addContentButton: {
    id: 'course-authoring.library-authoring.subsection-header.buttons.add-subsection',
    defaultMessage: 'Thêm đơn vị học mới',
    description: 'Text of button to add subsection to subsection',
  },
  addExistingContentButton: {
    id: 'course-authoring.library-authoring.subsection-header.buttons.add-existing-subsection',
    defaultMessage: 'Thêm đơn vị học có sẵn',
    description: 'Text of button to add existing content to subsection',
  },
  newContentButton: {
    id: 'course-authoring.library-authoring.subsection-header.buttons.add-new-subsection',
    defaultMessage: 'Thêm đơn vị học',
    description: 'Text of button to add new subsection to subsection in header',
  },
  noChildrenText: {
    id: 'course-authoring.library-authoring.subsection.no-children.text',
    defaultMessage: 'Tiểu mục này hiện đang trống',
    description: 'Message to display when subsection has not children',
  },
});
