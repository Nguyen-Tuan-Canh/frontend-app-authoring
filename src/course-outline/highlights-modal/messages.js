import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.highlights-modal.title',
    defaultMessage: 'Điểm nhấn cho {title}',
  },
  description: {
    id: 'course-authoring.course-outline.highlights-modal.description',
    defaultMessage: 'Nhập 3–5 điểm nhấn sẽ được đưa vào email mà học viên nhận cho phần này (giới hạn 250 ký tự). Để biết thêm thông tin và xem ví dụ mẫu email, hãy xem {documentation} của chúng tôi.',
  },
  documentationLink: {
    id: 'course-authoring.course-outline.highlights-modal.documentation-link',
    defaultMessage: 'tài liệu hướng dẫn',
  },
  highlight: {
    id: 'course-authoring.course-outline.highlights-modal.highlight',
    defaultMessage: 'Điểm nhấn {index}',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.highlights-modal.button.cancel',
    defaultMessage: 'Hủy',
  },
  saveButton: {
    id: 'course-authoring.course-outline.highlights-modal.button.save',
    defaultMessage: 'Lưu',
  },
});

export default messages;
