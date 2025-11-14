import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  connectionError: {
    id: 'authoring.alert.error.connection',
    defaultMessage: 'Đã xảy ra lỗi kỹ thuật khi tải trang này. Đây có thể chỉ là sự cố tạm thời, vui lòng thử lại sau vài phút. Nếu vấn đề vẫn tiếp diễn, hãy truy cập {supportLink} để được hỗ trợ.',
    description: 'Error message shown to users when there is a connectivity issue with the server.',
  },
  supportText: {
    id: 'authoring.alert.support.text',
    defaultMessage: 'Trang hỗ trợ',
  },
});

export default messages;
