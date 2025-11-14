import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  couldNotLoadTextContext: {
    id: 'authoring.texteditor.load.error',
    defaultMessage: 'Lỗi: Không thể tải nội dung văn bản',
    description: 'Thông báo lỗi khi không tải được nội dung HTML',
  },
  spinnerScreenReaderText: {
    id: 'authoring.texteditor.spinnerScreenReaderText',
    defaultMessage: 'đang tải',
    description: 'Thông báo tải dữ liệu cho trình đọc màn hình khi hiển thị spinner',
  },
});

export default messages;
