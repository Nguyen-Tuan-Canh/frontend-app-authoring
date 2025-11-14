import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.files-and-uploads.heading',
    defaultMessage: 'Tệp',
    description: 'Title for the page',
  },
  thumbnailAltMessage: {
    id: 'course-authoring.files-and-uploads.thumbnail.alt',
    defaultMessage: 'Xem trước tệp {displayName}',
    description: 'Alternative text for thumbnail',
  },
  copyStudioUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.copyStudioUrl.title',
    defaultMessage: 'Sao chép URL Studio',
    description: 'Label for Copy Studio URL button in info modal',
  },
  copyWebUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.copyWebUrl.title',
    defaultMessage: 'Sao chép URL web',
    description: 'Label for Copy Web URL button in info modal',
  },
  dateAddedTitle: {
    id: 'course-authoring.files-and-uploads.file-info.dateAdded.title',
    defaultMessage: 'Ngày thêm',
    description: 'Title for date added section in info modal',
  },
  fileSizeTitle: {
    id: 'course-authoring.files-and-uploads.file-info.fileSize.title',
    defaultMessage: 'Kích thước tệp',
    description: 'Title for file size section in info modal',
  },
  studioUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.studioUrl.title',
    defaultMessage: 'URL Studio',
    description: 'Title for studio url section in info modal',
  },
  webUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.webUrl.title',
    defaultMessage: 'URL web',
    description: 'Title for web url section in info modal',
  },
  lockFileTitle: {
    id: 'course-authoring.files-and-uploads.file-info.lockFile.title',
    defaultMessage: 'Khóa tệp',
    description: 'Label for lock file checkbox in info modal',
  },
  activeCheckboxLabel: {
    id: 'course-authoring.files-and-videos.file-info.activeCheckbox.label',
    defaultMessage: 'Đang hoạt động',
    description: 'Label for active checkbox in filter section of sort and filter modal',
  },
  inactiveCheckboxLabel: {
    id: 'course-authoring.files-and-videos.file-info.inactiveCheckbox.label',
    defaultMessage: 'Ngừng hoạt động',
    description: 'Label for inactive checkbox in filter section of sort and filter modal',
  },
  lockedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.lockedCheckbox.label',
    defaultMessage: 'Đã khóa',
    description: 'Label for locked checkbox in filter section of sort and filter modal',
  },
  publicCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.publicCheckbox.label',
    defaultMessage: 'Công khai',
    description: 'Label for public checkbox in filter section of sort and filter modal',
  },
  codeCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.codeCheckbox.label',
    defaultMessage: 'Mã',
    description: 'Label for code checkbox in filter section of sort and filter modal',
  },
  imageCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.imageCheckbox.label',
    defaultMessage: 'Hình ảnh',
    description: 'Label for images checkbox in filter section of sort and filter modal',
  },
  documentCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.documentCheckbox.label',
    defaultMessage: 'Tài liệu',
    description: 'Label for documents checkbox in filter section of sort and filter modal',
  },
  audioCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.audioCheckbox.label',
    defaultMessage: 'Âm thanh',
    description: 'Label for audio checkbox in filter section of sort and filter modal',
  },
  otherCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.otherCheckbox.label',
    defaultMessage: 'Khác',
    description: 'Label for other checkbox in filter section of sort and filter modal',
  },
  overwriteConfirmMessage: {
    id: 'course-authoring.files-and-videos.overwrite.modal.confirmation-message',
    defaultMessage: 'Một số tệp bạn tải lên đã tồn tại trong khóa học này. Bạn có muốn ghi đè các tệp sau không?',
    description: 'The message displayed in the modal shown when uploading files with pre-existing names',
  },
  overwriteModalTitle: {
    id: 'course-authoring.files-and-videos.overwrite.modal.title',
    defaultMessage: 'Ghi đè tệp',
    description: 'The title of the modal to confirm overwriting the files',
  },
  confirmOverwriteButtonLabel: {
    id: 'course-authoring.files-and-videos.overwrite.modal.overwrite-button.label',
    defaultMessage: 'Ghi đè',
    description: 'The message displayed in the button to confirm overwriting the files',
  },
  cancelOverwriteButtonLabel: {
    id: 'course-authoring.files-and-videos.overwrite.modal.cancel-button.label',
    defaultMessage: 'Hủy',
    description: 'The message displayed in the button to confirm cancelling the upload',
  },
  lockFileTooltipContent: {
    id: 'course-authoring.files-and-uploads.file-info.lockFile.tooltip.content',
    defaultMessage: `Theo mặc định, bất kỳ ai có URL web của tệp bạn tải lên đều có thể truy cập tệp,
      ngay cả khi họ không ghi danh vào khóa học.
      Bạn có thể chặn truy cập từ bên ngoài bằng cách khóa tệp. Khi
      bạn khóa một tệp, URL web chỉ cho phép những người học đã ghi danh
      vào khóa học của bạn và đã đăng nhập mới có thể truy cập tệp.`,
    description: 'Tooltip message for the lock icon in the table view of files',
  },
  fileNameColumn: {
    id: 'course-authoring.files-and-uploads.file-info.fileName.column',
    defaultMessage: 'Tên tệp',
    description: 'Title of the File Name column in the file list view',
  },
  fileSizeColumn: {
    id: 'course-authoring.files-and-uploads.file-info.fileSize.column',
    defaultMessage: 'Kích thước tệp',
    description: 'Title of the File size column in the file list view',
  },
  fileTypeColumn: {
    id: 'course-authoring.files-and-uploads.file-info.fileType.column',
    defaultMessage: 'Loại',
    description: 'Title of the Type column in the file list view',
  },
  fileActiveColumn: {
    id: 'course-authoring.files-and-uploads.file-info.fileActive.column',
    defaultMessage: 'Hoạt động',
    description: 'Title of the Active column in the file list view',
  },
  fileAccessColumn: {
    id: 'course-authoring.files-and-uploads.file-info.fileAccess.column',
    defaultMessage: 'Quyền truy cập',
    description: 'Title of the Access column in the file list view',
  },
});

export default messages;
