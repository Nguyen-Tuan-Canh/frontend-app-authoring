import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  titleLabel: {
    id: 'authoring.videoeditor.handout.title.label',
    defaultMessage: 'Tài liệu đính kèm',
    description: 'Tiêu đề cho phần tài liệu đính kèm (handout)',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.handout.upload.label',
    defaultMessage: 'Tải tài liệu lên',
    description: 'Nhãn nút để tải tài liệu đính kèm lên',
  },
  addHandoutMessage: {
    id: 'authoring.videoeditor.handout.upload.addHandoutMessage',
    defaultMessage: `Thêm tài liệu đính kèm cho video này. Học viên có thể tải tài liệu
    bằng cách nhấn "Tải tài liệu" bên dưới video.`,
    description: 'Thông điệp hiển thị khi tải tài liệu đính kèm',
  },
  uploadHandoutError: {
    id: 'authoring.videoeditor.handout.error.uploadHandoutError',
    defaultMessage: 'Không thể tải tài liệu đính kèm. Vui lòng thử lại.',
    description: 'Thông báo hiển thị khi tải tài liệu đính kèm thất bại',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.handout.error.fileSizeError',
    defaultMessage: 'Tài liệu đính kèm phải có dung lượng tối đa 20 MB. Vui lòng giảm kích thước tệp và thử lại.',
    description: 'Thông báo khi tệp tài liệu đính kèm lớn hơn 20 MB',
  },
  handoutHelpMessage: {
    id: 'authoring.videoeditor.handout.handoutHelpMessage',
    defaultMessage: 'Học viên có thể tải tài liệu này bằng cách nhấn "Tải tài liệu" bên dưới video.',
    description: 'Thông điệp hiển thị khi đã có tài liệu đính kèm',
  },
  deleteHandout: {
    id: 'authoring.videoeditor.handout.deleteHandout',
    defaultMessage: 'Xóa',
    description: 'Nhãn hành động để xóa tài liệu đính kèm',
  },
  replaceHandout: {
    id: 'authoring.videoeditor.handout.replaceHandout',
    defaultMessage: 'Thay thế',
    description: 'Nhãn hành động để thay thế tài liệu đính kèm',
  },
  downloadHandout: {
    id: 'authoring.videoeditor.handout.downloadHandout',
    defaultMessage: 'Tải xuống',
    description: 'Nhãn hành động để tải tài liệu đính kèm',
  },
});

export default messages;
