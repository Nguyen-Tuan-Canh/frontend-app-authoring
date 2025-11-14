import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  createLibrary: {
    id: 'course-authoring.library-authoring.create-library',
    defaultMessage: 'Tạo thư viện mới',
    description: 'Header for the create library form',
  },
  titleLabel: {
    id: 'course-authoring.library-authoring.create-library.form.title.label',
    defaultMessage: 'Tên thư viện',
    description: 'Label for the title field.',
  },
  titlePlaceholder: {
    id: 'course-authoring.library-authoring.create-library.form.title.placeholder',
    defaultMessage: 'VD: Bài tập Khoa học Máy tính',
    description: 'Placeholder text for the title field.',
  },
  titleHelp: {
    id: 'course-authoring.library-authoring.create-library.form.title.help',
    defaultMessage: 'Tên hiển thị cho thư viện của bạn',
    description: 'Help text for the title field.',
  },
  orgLabel: {
    id: 'course-authoring.library-authoring.create-library.form.org.label',
    defaultMessage: 'Tổ chức',
    description: 'Label for the organization field.',
  },
  orgPlaceholder: {
    id: 'course-authoring.library-authoring.create-library.form.org.placeholder',
    defaultMessage: 'VD: UniversityX hoặc OrganizationX',
    description: 'Placeholder text for the organization field.',
  },
  orgHelp: {
    id: 'course-authoring.library-authoring.create-library.form.org.help',
    defaultMessage: 'Tên tổ chức hiển thị công khai cho thư viện của bạn. Giá trị này không thể thay đổi.',
    description: 'Help text for the organization field.',
  },
  slugLabel: {
    id: 'course-authoring.library-authoring.create-library.form.slug.label',
    defaultMessage: 'Mã thư viện (Library ID)',
    description: 'Label for the slug field.',
  },
  slugPlaceholder: {
    id: 'course-authoring.library-authoring.create-library.form.slug.placeholder',
    defaultMessage: 'VD: CSPROB',
    description: 'Placeholder text for the slug field.',
  },
  slugHelp: {
    id: 'course-authoring.library-authoring.create-library.form.slug.help',
    defaultMessage: `Mã duy nhất dùng để định danh thư viện này. Lưu ý: đây là một phần của URL thư viện, 
vì vậy không được dùng khoảng trắng hoặc ký tự đặc biệt. Giá trị này không thể thay đổi.`,
    description: 'Help text for the slug field.',
  },
  invalidSlugError: {
    id: 'course-authoring.library-authoring.create-library.form.invalid-slug.error',
    defaultMessage: 'Nhập một “slug” hợp lệ chỉ gồm chữ cái, số, dấu gạch dưới hoặc gạch nối.',
    description: 'Text to display when slug id has invalid symbols.',
  },
  requiredFieldError: {
    id: 'course-authoring.library-authoring.create-library.form.required.error',
    defaultMessage: 'Trường này là bắt buộc.',
    description: 'Error message to display when a required field is missing.',
  },
  disallowedCharsError: {
    id: 'course-authoring.library-authoring.create-library.form.disallowed-chars.error',
    defaultMessage: 'Vui lòng không dùng khoảng trắng hoặc ký tự đặc biệt trong trường này.',
    description: 'Error message to display when a field contains disallowed characters.',
  },
  noSpaceError: {
    id: 'course-authoring.library-authoring.create-library.form.no-space.error',
    defaultMessage: 'Vui lòng không dùng khoảng trắng trong trường này.',
    description: 'Error message to display when a field contains spaces.',
  },
  createLibraryButton: {
    id: 'course-authoring.library-authoring.create-library.form.create-library.button',
    defaultMessage: 'Tạo',
    description: 'Button text for creating a new library.',
  },
  createLibraryButtonPending: {
    id: 'course-authoring.library-authoring.create-library.form.create-library.button.pending',
    defaultMessage: 'Đang tạo…',
    description: 'Button text while the library is being created.',
  },
  cancelCreateLibraryButton: {
    id: 'course-authoring.library-authoring.create-library.form.create-library.cancel.button',
    defaultMessage: 'Hủy',
    description: 'Button text to cancel creating a new library.',
  },
  createFromArchiveButton: {
    id: 'course-authoring.library-authoring.create-library.form.create-from-archive.button',
    defaultMessage: 'Tạo từ bản sao lưu',
    description: 'Button text to create library from archive.',
  },
  uploadSuccess: {
    id: 'course-authoring.library-authoring.create-library.form.upload.success',
    defaultMessage: 'Tải tệp lên thành công',
    description: 'Success message when file is uploaded.',
  },
  restoreInProgress: {
    id: 'course-authoring.library-authoring.create-library.form.restore.in-progress',
    defaultMessage: 'Đang khôi phục thư viện...',
    description: 'Message shown while library is being restored.',
  },
  restoreError: {
    id: 'course-authoring.library-authoring.create-library.form.restore.error',
    defaultMessage: 'Khôi phục thư viện thất bại. Xem nhật ký lỗi để biết chi tiết.',
    description: 'Error message when library restore fails.',
  },
  createLibraryFromArchiveButton: {
    id: 'course-authoring.library-authoring.create-library.form.create-from-archive-final.button',
    defaultMessage: 'Tạo thư viện từ bản sao lưu',
    description: 'Button text to finalize library creation from archive.',
  },
  createLibraryFromArchiveButtonPending: {
    id: 'course-authoring.library-authoring.create-library.form.create-from-archive-final.button.pending',
    defaultMessage: 'Đang tạo từ bản sao lưu...',
    description: 'Button text while the library is being created from archive.',
  },
  archiveComponentsCount: {
    id: 'course-authoring.library-authoring.create-library.form.archive.components-count',
    defaultMessage: 'Chứa {count} thành phần',
    description: 'Text showing the number of components in the restored archive.',
  },
  archiveBackupDate: {
    id: 'course-authoring.library-authoring.create-library.form.archive.backup-date',
    defaultMessage: 'Được sao lưu ngày {date} lúc {time}',
    description: 'Text showing when the archive was backed up.',
  },
  uploadingStatus: {
    id: 'course-authoring.library-authoring.create-library.form.uploading.status',
    defaultMessage: 'Đang tải lên...',
    description: 'Status message shown while file is uploading.',
  },
  invalidFileTypeError: {
    id: 'course-authoring.library-authoring.create-library.form.invalid-file-type.error',
    defaultMessage: 'Loại tệp không hợp lệ. Vui lòng tải lên tệp .zip, .tar.gz hoặc .tar.',
    description: 'Error message when user uploads an unsupported file type.',
  },
  viewErrorLogText: {
    id: 'course-authoring.library-authoring.create-library.form.view-error-log.text',
    defaultMessage: 'Xem nhật ký lỗi',
    description: 'Link text to view the error log when restore fails.',
  },
  genericErrorMessage: {
    id: 'course-authoring.library-authoring.create-library.form.generic-error.message',
    defaultMessage: 'Đã xảy ra lỗi',
    description: 'Generic error message when a specific error is not available.',
  },
});

export default messages;
