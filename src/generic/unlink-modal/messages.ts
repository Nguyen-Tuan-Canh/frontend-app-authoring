import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.unlink-modal.title',
    defaultMessage: 'Gỡ liên kết {displayName}?',
    description: 'Tiêu đề cho hộp thoại xác nhận gỡ liên kết',
  },
  titleComponent: {
    id: 'course-authoring.course-outline.unlink-modal.title-component',
    defaultMessage: 'Gỡ liên kết thành phần này?',
    description: 'Tiêu đề cho hộp thoại xác nhận gỡ liên kết khi mục là một thành phần',
  },
  description: {
    id: 'course-authoring.course-outline.unlink-modal.description',
    defaultMessage:
      'Bạn có chắc chắn muốn gỡ liên kết tham chiếu {categoryName} từ thư viện này không? '
      + 'Các khối đã gỡ liên kết sẽ không thể được đồng bộ. <b>Việc gỡ liên kết là vĩnh viễn.</b>',
    description: 'Văn bản mô tả trong hộp thoại xác nhận gỡ liên kết',
  },
  descriptionChildren: {
    id: 'course-authoring.course-outline.unlink-modal.description-children',
    defaultMessage:
      '{childrenCategoryName} nằm trong {categoryName} này sẽ vẫn được liên kết với '
      + 'phiên bản của chúng trong thư viện.',
    description: 'Văn bản mô tả trong hộp thoại xác nhận gỡ liên kết khi mục có phần tử con',
  },
  unlinkButton: {
    id: 'course-authoring.course-outline.unlink-modal.button.unlink',
    defaultMessage: 'Xác nhận gỡ liên kết',
  },
  pendingDeleteButton: {
    id: 'course-authoring.course-outline.unlink-modal.button.pending-unlink',
    defaultMessage: 'Đang gỡ liên kết',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.unlink-modal.button.cancel',
    defaultMessage: 'Hủy',
  },
  chapterName: {
    id: 'course-authoring.course-outline.unlink-modal.chapter-name',
    defaultMessage: 'Phần',
    description: 'Dùng để gọi một chapter trong dàn ý khóa học',
  },
  sequentialName: {
    id: 'course-authoring.course-outline.unlink-modal.sequential-name',
    defaultMessage: 'Mục con',
    description: 'Dùng để gọi một sequential trong dàn ý khóa học',
  },
  verticalName: {
    id: 'course-authoring.course-outline.unlink-modal.vertical-name',
    defaultMessage: 'Đơn vị',
    description: 'Dùng để gọi một vertical trong dàn ý khóa học',
  },
  componentName: {
    id: 'course-authoring.course-outline.unlink-modal.component-name',
    defaultMessage: 'Thành phần',
    description: 'Dùng để gọi một component trong dàn ý khóa học',
  },
  chapterChildrenName: {
    id: 'course-authoring.course-outline.unlink-modal.chapter-children-name',
    defaultMessage: 'Các mục con',
    description: 'Dùng để gọi các phần tử con của chapter trong dàn ý khóa học',
  },
  sequentialChildrenName: {
    id: 'course-authoring.course-outline.unlink-modal.sequential-children-name',
    defaultMessage: 'Các đơn vị',
    description: 'Dùng để gọi các phần tử con của sequential trong dàn ý khóa học',
  },
  verticalChildrenName: {
    id: 'course-authoring.course-outline.unlink-modal.vertical-children-name',
    defaultMessage: 'Các thành phần',
    description: 'Dùng để gọi các phần tử con của vertical trong dàn ý khóa học',
  },
});

export default messages;
