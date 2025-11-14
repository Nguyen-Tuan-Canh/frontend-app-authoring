import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  title: {
    id: 'authoring.videoeditor.transcripts.title',
    defaultMessage: 'Phụ đề',
    description: 'Tiêu đề cho widget quản lý phụ đề',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.transcripts.upload.label',
    defaultMessage: 'Thêm phụ đề',
    description: 'Nhãn nút tải phụ đề lên',
  },
  addFirstTranscript: {
    id: 'authoring.videoeditor.transcripts.upload.firstTranscriptMessage',
    defaultMessage: 'Thêm phụ đề cho video (chỉ hỗ trợ tệp .srt) để cải thiện khả năng truy cập.',
    description: 'Thông điệp khi thêm phụ đề đầu tiên cho video',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.transcripts.allowDownloadCheckboxLabel',
    defaultMessage: 'Cho phép tải phụ đề xuống',
    description: 'Nhãn checkbox cho phép tải phụ đề',
  },
  showByDefaultCheckboxLabel: {
    id: 'authoring.videoeditor.transcripts.upload.showByDefaultCheckboxLabel',
    defaultMessage: 'Mặc định hiển thị phụ đề trong trình phát video',
    description: 'Nhãn checkbox bật hiển thị phụ đề mặc định',
  },
  tooltipMessage: {
    id: 'authoring.videoeditor.transcripts.upload.allowDownloadTooltipMessage',
    defaultMessage: 'Học viên sẽ thấy liên kết tải phụ đề bên dưới video.',
    description: 'Thông điệp tooltip khi cho phép tải phụ đề',
  },
  transcriptTypeError: {
    id: 'authoring.videoeditor.transcript.error.transcriptTypeError',
    defaultMessage: 'Chỉ có thể tải lên tệp SRT.',
    description: 'Thông báo lỗi khi định dạng tệp không phải SRT',
  },
  uploadTranscriptError: {
    id: 'authoring.videoeditor.transcript.error.uploadTranscriptError',
    defaultMessage: 'Không thể tải phụ đề. Vui lòng thử lại.',
    description: 'Thông báo lỗi khi tải phụ đề thất bại',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.transcript.error.fileSizeError',
    defaultMessage: 'Kích thước tệp phụ đề vượt quá giới hạn cho phép. Vui lòng thử lại.',
    description: 'Thông báo lỗi khi tệp phụ đề quá lớn',
  },
  deleteTranscript: {
    id: 'authoring.videoeditor.transcript.deleteTranscript',
    defaultMessage: 'Xóa',
    description: 'Nhãn hành động dùng để xóa phụ đề',
  },
  deleteTranscriptError: {
    id: 'authoring.videoeditor.transcript.error.deleteTranscriptError',
    defaultMessage: 'Không thể xóa phụ đề. Vui lòng thử lại.',
    description: 'Thông báo lỗi khi xóa phụ đề thất bại',
  },
  replaceTranscript: {
    id: 'authoring.videoeditor.transcript.replaceTranscript',
    defaultMessage: 'Thay thế',
    description: 'Nhãn hành động dùng để thay thế phụ đề',
  },
  downloadTranscript: {
    id: 'authoring.videoeditor.transcript.downloadTranscript',
    defaultMessage: 'Tải xuống',
    description: 'Nhãn hành động dùng để tải phụ đề',
  },
  languageSelectLabel: {
    id: 'authoring.videoeditor.transcripts.languageSelectLabel',
    defaultMessage: 'Ngôn ngữ',
    description: 'Nhãn cho danh sách chọn ngôn ngữ của phụ đề',
  },
  languageSelectPlaceholder: {
    id: 'authoring.videoeditor.transcripts.languageSelectPlaceholder',
    defaultMessage: 'Chọn ngôn ngữ',
    description: 'Placeholder cho danh sách chọn ngôn ngữ của phụ đề',
  },
  cancelDeleteLabel: {
    id: 'authoring.videoeditor.transcripts.cancelDeleteLabel',
    defaultMessage: 'Hủy',
    description: 'Nhãn nút hủy thao tác xóa phụ đề',
  },
  confirmDeleteLabel: {
    id: 'authoring.videoeditor.transcripts.confirmDeleteLabel',
    defaultMessage: 'Xóa',
    description: 'Nhãn nút xác nhận xóa phụ đề',
  },
  deleteConfirmationMessage: {
    id: 'authoring.videoeditor.transcripts.deleteConfirmationMessage',
    defaultMessage: 'Bạn có chắc chắn muốn xóa phụ đề này không?',
    description: 'Cảnh báo hỏi xác nhận trước khi xóa phụ đề',
  },
  deleteConfirmationHeader: {
    id: 'authoring.videoeditor.transcripts.deleteConfirmationTitle',
    defaultMessage: 'Xóa phụ đề này?',
    description: 'Tiêu đề cảnh báo khi xóa phụ đề',
  },
  fileTypeWarning: {
    id: 'authoring.videoeditor.transcripts.fileTypeWarning',
    defaultMessage: 'Chỉ có thể tải tệp SRT. Vui lòng chọn tệp có đuôi .srt để tải lên.',
    description: 'Thông báo nhắc người dùng chỉ tải tệp .srt',
  },
  importButtonLabel: {
    id: 'authoring.videoEditor.transcripts.importButton.label',
    defaultMessage: 'Nhập phụ đề',
    description: 'Nhãn nút nhập phụ đề từ YouTube',
  },
  importHeader: {
    id: 'authoring.videoEditor.transcripts.importCard.header',
    defaultMessage: 'Nhập phụ đề từ YouTube?',
    description: 'Tiêu đề cho thẻ nhập phụ đề từ YouTube',
  },
  importMessage: {
    id: 'authoring.videoEditor.transcrtipts.importCard.message',
    defaultMessage: 'Chúng tôi đã tìm thấy phụ đề cho video này trên YouTube. Bạn có muốn nhập ngay không?',
    description: 'Thông điệp hỏi người dùng có muốn nhập phụ đề từ YouTube',
  },
  videoCreationWarning: {
    id: 'authoring.videoEditor.transcrtipts.videoCreation.message',
    defaultMessage: 'Để thêm phụ đề, hãy lưu và mở lại video này.',
    description: 'Cảnh báo khi người dùng đang tạo video mới và chưa thể thêm phụ đề',
  },
});

export default messages;
